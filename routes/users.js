const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const key = fs.readFileSync(path.join(__dirname, '/../private.cert'));
const localPool = mysql.createPool({
    connectionLimit: 1000000000,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kanichai',
    database: 'order_mgmt',
    multipleStatments: 'true'
});
function getDate(date) {
    const newDate = new Date(date);
    return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
}
router.post('/login', (req, res) => {
    localPool.query('SELECT cust_email FROM customer WHERE (cust_email=? AND cust_passwd=?) OR (cust_phone=? AND cust_passwd=?)', [req.body.username, req.body.password, req.body.username, req.body.password],(err, result) => {
        if (err) {
            console.log(err);
            res.json({ status: false, token: '' });
        } else if (result.length === 1) {
            jwt.sign({
                data: { username: result[0].cust_email },
                iat: Math.floor(Date.now() / 1000) - 30
            }, key, { algorithm: 'RS256' }, function(err1, jwtToken) {
                if (err1) {
                    res.json({ status: false, token: '' });
                } else {
                    res.json({ status: true, token: jwtToken });
                }
                res.status(200).end();
            });

        } else {
            res.json({ status: false, token: '' });
            res.status(200).end();
        }
    });
});
router.post('/register', (req, res) => {
    localPool.query('INSERT INTO customer VALUES(?,?,?,?,?,?,?)', [crypto.randomBytes(32).toString('hex'), req.body.email, req.body.password, req.body.name, getDate(req.body.dob), req.body.phone, req.body.address], (err) => {
        if (err) {
            console.log(err);
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
        res.status(200).end();
    });
});
module.exports = router;
