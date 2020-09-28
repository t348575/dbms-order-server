const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const key = fs.readFileSync(path.join(__dirname, '/../private.cert'));
const publicKey = fs.readFileSync(path.join(__dirname, '/../public.cert'));
const localPool = mysql.createPool({
    connectionLimit: 1000000000,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatements: 'true'
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
router.get('/basic', authenticateJWT, (req, res) => {
    localPool.query('SELECT cust_name, cust_phone, cust_address, cust_country, cust_region, cust_city, cust_pincode FROM customer WHERE cust_id = ?', req.tokenData.data.id, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json({
                name: results[0].cust_name,
                phone: results[0].cust_phone,
                address: results[0].cust_address,
                country: results[0].cust_country,
                region: results[0].cust_region,
                city: results[0].cust_city,
                pinCode: results[0].cust_pincode
            });
            res.status(200).end();
        }
    });
});
module.exports = router;
