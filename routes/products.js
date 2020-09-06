const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const publicKey = fs.readFileSync(path.join(__dirname, '/../public.cert'));
const localPool = mysql.createPool({
    connectionLimit: 1000000000,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatments: 'true'
});
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
router.get('/get', authenticateJWT, (req, res) => {
    localPool.query('SELECT * FROM products ORDER BY ? ? limit ? OFFSET ?', [req.body.sortBy, req.body.dir, req.body.pageSize, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/search', authenticateJWT, (req, res) => {
    localPool.query('SELECT * FROM products WHERE prod_name LIKE ? ORDER BY ? ? limit ? OFFSET ?', [`%${req.body.search}%`, req.body.sortBy, req.body.dir, req.body.pageSize, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
module.exports = router;