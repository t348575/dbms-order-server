const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');
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
            res.json({ status: true, token: crypto.randomBytes(32).toString('hex') });

        } else {
            res.json({ status: false, token: '' });
        }
        res.status(200).end();
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
