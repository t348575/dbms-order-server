const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const url = require('url');
const bcrypt = require('bcrypt');
const key = fs.readFileSync(path.join(__dirname, '/../../private.cert'));
const publicKey = fs.readFileSync(path.join(__dirname, '/../../public.cert'));
const localPool = mysql.createPool({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatements: 'true'
});
const formatDate = (date) => {
    let month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
};
const toMysqlFormat = (date) => {
    return formatDate(date) + ' ' + date.toTimeString().split(' ')[0];
};
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
router.post('/placeOrder', authenticateJWT, (req, res) => {
    const ord_id = crypto.randomBytes(32).toString('hex');
    const summary = {
        total: 0,
        items: []
    };
    for (const v of req.body.products) {
        summary.items.push(v.product.prod_price * v.count);
        summary.total += summary.items[summary.items.length - 1];
    }
    req.body.products = req.body.products.map(a => {
        return {
            count: a.count,
            product: {
                prod_price: a.product.prod_price,
                prod_id: a.product.prod_id
            }
        }
    });
    summary.details = req.body.details;
    localPool.query(`INSERT INTO orders VALUES('${ord_id}', '${req.tokenData.data.id}', '${JSON.stringify(req.body.products)}', '${toMysqlFormat(new Date())}', '${JSON.stringify(summary)}', '${JSON.stringify(req.body.payment)}', 0)`, (err, results) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json({ status: true, ord_id });
            res.status(200).end();
        }
    });
});
router.get('/getOrders', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    const onlyRecent = parseInt(req.body.recent, 10);
    if (onlyRecent) {
        const today = new Date();
        today.setMonth(today.getMonth() - 6);
        localPool.query('SELECT ord_id, cust_id, ord_prod, ord_date, ord_summ, state FROM orders WHERE cust_id = ? AND ord_date >= ? ORDER BY ord_date', [req.tokenData.data.id, toMysqlFormat(today)], (err, results) => {
            if (err) {
                res.status(500).end();
            } else {
                results = results.map(a => {
                    return {
                        ord_id: a.ord_id,
                        cust_id: a.cust_id,
                        ord_date: a.ord_date,
                        state: a.state,
                        ord_prod: JSON.parse(a.ord_prod),
                        ord_summ: JSON.parse(a.ord_summ)
                    }
                });
                res.json(results);
                res.status(200).end();
            }
        });
    } else {
        localPool.query('SELECT ord_id, cust_id, ord_prod, ord_date, ord_summ, state FROM orders WHERE cust_id = ? ORDER BY ord_date', [req.tokenData.data.id], (err, results) => {
            if (err) {
                res.status(500).end();
            } else {
                results = results.map(a => {
                    return {
                        ord_id: a.ord_id,
                        cust_id: a.cust_id,
                        ord_date: a.ord_date,
                        state: a.state,
                        ord_prod: JSON.parse(a.ord_prod),
                        ord_summ: JSON.parse(a.ord_summ)
                    }
                });
                res.json(results);
                res.status(200).end();
            }
        });
    }
});
router.get('/getOrder', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT ord_id, cust_id, ord_prod, ord_date, ord_summ, state FROM orders WHERE ord_id = ?; CALL get_order_products(?);', [req.body.id, req.body.id], (err, results) => {
        if (err) {
            res.status(500).end();
        } else {
            results = results.map(a => a[0]);
            results[0] = {
                ord_id: results[0].ord_id,
                cust_id: results[0].cust_id,
                ord_date: results[0].ord_date,
                state: results[0].state,
                ord_prod: JSON.parse(results[0].ord_prod),
                ord_summ: JSON.parse(results[0].ord_summ)
            }
            results.splice(results.length - 1, 1);
            results = results.map(a => {
                if (a.hasOwnProperty('count')) {
                    const temp = {
                        count: a.count,
                        product: {...a}
                    }
                    delete temp.product.count;
                    return temp;
                } else {
                    return a;
                }
            });
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/getShipmentStatus', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT ship_status, ship_est_date FROM shipping WHERE ord_id = ?', [req.body.ordId], (err, results) => {
        if (err) {
            res.status(500).end();
        } else {
            results[0].ship_status = JSON.parse(results[0].ship_status);
            res.json(results[0]);
            res.status(200).end();
        }
    });
});
module.exports = router;
