const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const key = fs.readFileSync(path.join(__dirname, '/../../private.cert'));
const publicKey = fs.readFileSync(path.join(__dirname, '/../../public.cert'));
const localPool = mysql.createPool({
    connectionLimit: 1000000000,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatements: 'true'
});
function getDate(date) {
    const newDate = new Date(date);
    return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
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
router.get('/getCart', authenticateJWT, (req, res) => {
    localPool.query('CALL get_cart(?)', [req.tokenData.data.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            if (result.length > 1) {
                result = result.splice(0, result.length - 1);
                result = result.map(a => {
                    const temp = a[0];
                    const count = a[0].count;
                    delete a[0].count;
                    return { product: temp, count };
                });
                res.json(result);
                res.status(200).end();
            } else {
                res.json([]);
                res.status(200).end();
            }
        }
    });
});
router.post('/updateCart', authenticateJWT, (req, res) => {
    localPool.query('UPDATE customer SET cust_cart = ? WHERE cust_id = ?', [JSON.stringify(req.body.cart), req.tokenData.data.id], (err) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;
