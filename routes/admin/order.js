const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const url = require('url');
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
router.get('/getOrders', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    const state = parseInt(req.body.state, 10);
    const page = parseInt(req.body.page, 10);
    const pageSize = parseInt(req.body.pageSize, 10);
    let query = '';
    let stateQuery = '';
    let dateQuery = '';
    if (!isNaN(state) && state !== -2) {
        stateQuery = `WHERE state = ${state}`;
    }
    if (req.body.search.length > 0) {
        query = `${stateQuery.length > 0 ? 'AND' : ''} ord_id LIKE '%${req.body.search}%'`;
    }
    if (req.body.startDate && req.body.endDate) {
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        dateQuery = `${stateQuery.length > 0 || query.length > 0 ? 'AND' : ''} ord_date >= '${toMysqlFormat(startDate)}' AND ord_date <= '${toMysqlFormat(endDate)}'`;
    } else if (req.body.startDate) {
        const startDate = new Date(req.body.startDate);
        startDate.setHours(0, 0, 0, 0);
        dateQuery = `${stateQuery.length > 0 || query.length > 0 ? 'AND' : ''} ord_date >= '${toMysqlFormat(startDate)}'`;
    } else if (req.body.endDate) {
        const endDate = new Date(req.body.endDate);
        endDate.setHours(0, 0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        dateQuery = `${stateQuery.length > 0 || query.length > 0 ? 'AND' : ''} ord_date <= '${toMysqlFormat(endDate)}'`;
    }
    if (stateQuery.length === 0 && (query.length > 0 || dateQuery.length > 0)) {
        stateQuery = 'WHERE';
    }
    localPool.query(`SELECT * FROM orders ${stateQuery} ${query} ${dateQuery} ORDER BY ord_date DESC LIMIT ? OFFSET ?; SELECT COUNT(*) AS total FROM orders ${stateQuery} ${query} ${dateQuery};`,
        [pageSize, page * pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            results[0] = results[0].map(a => {
                a.ord_prod = JSON.parse(a.ord_prod);
                a.ord_summ = JSON.parse(a.ord_summ);
                a.ord_payment = JSON.parse(a.ord_payment);
                return a;
            });
            res.json({
                data: results[0],
                total: results[1][0].total
            });
            res.status(200).end();
        }
    });
});
router.post('/changeState', authenticateJWT, (req, res) => {
    localPool.query('UPDATE orders SET state = ? WHERE ord_id = ?', [req.body.newState, req.body.ordId], (err) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});
router.post('/updateStock', authenticateJWT, (req, res) => {
    const failed = [];
    (async() => {
        for (const v of req.body.products) {
            try {
                await new Promise((resolve) => {
                    localPool.query('UPDATE products SET prod_stock = prod_stock - ? WHERE prod_id = ? AND prod_stock > ?', [v.count, v.prod_id, v.count], (err, results) => {
                        if (err) {
                            failed.push(v);
                        } else {
                            if (results.affectedRows !== 1) {
                                failed.push(v);
                            }
                        }
                        resolve();
                    });
                });
            } catch (e) {
                failed.push(v);
            }
        }
        if (failed.length === 0) {
            res.json({ status: true, failed: [] });
            res.status(200).end();
        } else {
            res.json({ status: false, failed });
            res.status(200).end();
        }
    })();
});
module.exports = router;
