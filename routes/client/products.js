const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const url = require('url');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const multer  = require('multer');
const jsep = require("jsep");
const publicKey = fs.readFileSync(path.join(__dirname, '/../../public.cert'));
const localPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatements: 'true'
});
function evaluateBooleanExpressionTree(tree, queryList) {
    if (tree.type === 'Literal') {
        return queryList[tree.value - 1];
    }
    else if (tree.type === 'LogicalExpression') {
        if (tree.operator === '&&') {
            return evaluateBooleanExpressionTree(tree['left'], queryList) + ' && '+ evaluateBooleanExpressionTree(tree['right'], queryList);
        }
        else {
            return evaluateBooleanExpressionTree(tree['left'], queryList) + ' || '+  evaluateBooleanExpressionTree(tree['right'], queryList);
        }
    }
    else {
        return null;
    }
}
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, publicKey, (err, data) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.tokenData = data;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '/../../public/images'),
        filename: (req, file, cb) => {
            req.body.fileName = crypto.randomBytes(16).toString('hex');
            cb(null, req.body.fileName + req.body.extension);
        }
    })
});
router.get('/get', (req, res) => {
    req.body = url.parse(req.url, true).query;
    req.body.page = parseInt(req.body.page, 10);
    req.body.pageSize = parseInt(req.body.pageSize, 10);
    if (req.body.search && req.body.search.length > 0) {
        let searchQuery = 'WHERE ';
        let searchColumns = req.body.searchColumns;
        if (typeof searchColumns === 'string') {
            searchColumns = [searchColumns];
        }
        for (const v of searchColumns) {
            searchQuery += `${v} LIKE '%${req.body.search}%' OR `;
        }
        searchQuery = searchQuery.slice(0, -3);
        localPool.query(`SELECT * FROM products ${searchQuery} ORDER BY ${req.body.sortBy} ${req.body.dir} limit ? OFFSET ?; SELECT COUNT(prod_stock) AS total FROM products ${searchQuery};`,
            [req.body.pageSize, req.body.page * req.body.pageSize, '%' + req.body.search + '%'],
            (err, results) => {
                if (err) {
                    console.log(err);
                    res.status(500).end();
                } else {
                    results[0] = results[0].map(a => {
                        if (a.prod_type === 0) {
                            a.prod_dim = JSON.parse(a.prod_dim);
                        }
                        a.prod_feat = JSON.parse(a.prod_feat)
                        return a;
                    });
                    res.json({
                        data: results[0],
                        total: results[1][0].total
                    });
                }
            });
    } else {
        localPool.query(`SELECT * FROM products ORDER BY ${req.body.sortBy} ${req.body.dir} limit ? OFFSET ?; SELECT COUNT(prod_stock) AS total FROM products;`,
            [req.body.pageSize, req.body.page * req.body.pageSize],
            (err, results) => {
                if (err) {
                    console.log(err);
                    res.status(500).end();
                } else {
                    results[0] = results[0].map(a => {
                        if (a.prod_type === 0) {
                            a.prod_dim = JSON.parse(a.prod_dim);
                        }
                        a.prod_feat = JSON.parse(a.prod_feat)
                        return a;
                    });
                    res.json({
                        data: results[0],
                        total: results[1][0].total
                    });
                    res.status(200).end();
                }
            });
    }
});
router.get('/filter', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    req.body.page = parseInt(req.body.page, 10);
    req.body.pageSize = parseInt(req.body.pageSize, 10);
    let searchQuery = 'WHERE ';
    let searchColumns = req.body.searchColumns;
    if (typeof searchColumns === 'string') {
        searchColumns = [searchColumns];
    }
    if (searchColumns.length > 0) {
        searchQuery += '(';
    }
    for (const v of searchColumns) {
        searchQuery += `${v} LIKE '%${req.body.search}%' OR `;
    }
    searchQuery = searchQuery.slice(0, -3);
    if (searchColumns.length > 0) {
        searchQuery += ') AND (';
    } else {
        searchQuery += '(';
    }
    const queries = JSON.parse(req.body.queries);
    const queryList = [];
    for (const v of queries) {
        queryList.push(`(${v.column} `);
        switch (v.operator) {
            case '>=':
            case '<=':
            case '>':
            case '<':
            case '!=':
            case '=': {
                queryList[queryList.length - 1] += `${v.operator} ${v.operateValue}`;
                break;
            }
            case '<>': {
                const a = v.operateValue.split(',')[0].trim();
                const b = v.operateValue.split(',')[1].trim();
                queryList[queryList.length - 1] += `BETWEEN ${a > b ? b : a} AND ${a > b ? a : b}`;
                break;
            }
            case '%': {
                if (v.operateOn === 'value') {
                    queryList[queryList.length - 1] += `LIKE '%${v.operateValue}%'`;
                } else {
                    queryList[queryList.length - 1] += `LIKE CONCAT("%", p.${v.operateValue}, "%")`;
                }
                break;
            }
            case '!%': {
                if (v.operateOn === 'value') {
                    queryList[queryList.length - 1] += `NOT LIKE '%${v.operateValue}%'`;
                } else {
                    queryList[queryList.length - 1] += `NOT LIKE CONCAT("%", p.${v.operateValue}, "%")`;
                }
                break;
            }
        }
        queryList[queryList.length - 1] += ')';
    }
    if (req.body.relations.length > 0) {
        searchQuery += evaluateBooleanExpressionTree(jsep(req.body.relations), queryList);
    } else {
        let relations = '';
        for (let i = 1; i <= queries.length; i++) {
            relations += `${i} && `;
        }
        relations = relations.slice(0, -4);
        searchQuery += evaluateBooleanExpressionTree(jsep(relations), queryList)
    }
    searchQuery += ')';
    console.log(`SELECT * FROM products ${searchQuery} ORDER BY ${req.body.sortBy} ${req.body.dir} limit ? OFFSET ?; SELECT COUNT(prod_stock) AS total FROM products ${searchQuery};`);
    localPool.query(`SELECT * FROM products ${searchQuery} ORDER BY ${req.body.sortBy} ${req.body.dir} limit ? OFFSET ?; SELECT COUNT(prod_stock) AS total FROM products ${searchQuery};`,
        [req.body.pageSize, req.body.page * req.body.pageSize, '%' + req.body.search + '%'],
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            } else {
                results[0] = results[0].map(a => {
                    if (a.prod_type === 0) {
                        a.prod_dim = JSON.parse(a.prod_dim);
                    }
                    a.prod_feat = JSON.parse(a.prod_feat)
                    return a;
                });
                res.json({
                    data: results[0],
                    total: results[1][0].total
                });
            }
        });
});
router.get('/search', (req, res) => {
    req.body = url.parse(req.url, true).query;
    req.body.page = parseInt(req.body.page, 10);
    req.body.pageSize = parseInt(req.body.pageSize, 10);
    localPool.query(`SELECT * FROM products WHERE prod_name LIKE ? ORDER BY ${req.body.sortBy} ${req.body.dir} limit ${req.body.pageSize} OFFSET ?`, [`%${req.body.search}%`, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/browse', (req, res) => {
    req.body = url.parse(req.url, true).query;
    req.body.page = parseInt(req.body.page, 10);
    req.body.pageSize = parseInt(req.body.pageSize, 10);
    localPool.query('SELECT * FROM products  ORDER BY RAND() limit ? OFFSET ?', [ req.body.pageSize, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/predictSearch', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT * FROM products  WHERE prod_name LIKE ? LIMIT 5;', [`%${req.body.search}%`], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/byId', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT * FROM products WHERE prod_id IN (?)', [req.body.ids], (err, results) => {
        if (err) {
            res.status(500).end();
        } else {
            if (req.body.admin) {
                results = results.map(a => {
                    if (a.prod_type === 0) {
                        a.prod_dim = JSON.parse(a.prod_dim);
                    }
                    a.prod_feat = JSON.parse(a.prod_feat)
                    return a;
                });
                res.json(results);
            } else {
                res.json(results);
            }
            res.status(200).end();
        }
    })
});
router.post('/uploadImage', authenticateJWT, upload.single('file'), (req, res) => {
    localPool.query('UPDATE products SET prod_img = ? WHERE prod_id = ?',
        [`cl/images/${req.body.fileName}${req.body.extension}`, req.body.prodId],
        (err) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});
router.post('/updateProduct', authenticateJWT, (req, res) => {
    localPool.query('UPDATE products SET prod_name = ?, prod_desc = ?, prod_stock = ?, ' +
        'prod_dim = ?, prod_feat = ?, prod_price = ?, prod_rating = ?, prod_type = ? WHERE prod_id = ?',
        [req.body.name, req.body.desc, req.body.stock,
            req.body.type ? req.body.dim : JSON.stringify(req.body.dim),
            JSON.stringify(req.body.feat), req.body.price, req.body.rating,
            req.body.type, req.body.prodId], (err) => {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
});
module.exports = router;
