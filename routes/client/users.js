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
function login(req, res) {
    jwt.sign({
        data: { username: req.body.username, id: req.body.id },
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 3600
    }, key, { algorithm: 'RS256' }, function(err1, jwtToken) {
        if (err1) {
            console.log(err1);
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        } else {
            const loginToken = crypto.randomBytes(32).toString('hex');
            localPool.query('UPDATE customer SET cust_token = ? WHERE cust_id = ?', [loginToken, req.body.id], (err2) => {
                if (err2) {
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    console.log(err2);
                } else {
                    res.json({ status: true, apiToken: jwtToken, loginToken });
                }
                res.status(200).end();
            });
        }
    });
}
router.post('/autoLogin', (req, res, next) => {
    jwt.verify(req.body.apiToken, publicKey, { ignoreExpiration: true },(err, data) => {
        req.tokenData = data;
        req.body.id = data.data.id;
        if (req.body.id === undefined || req.body.id === null) {
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        } else {
            localPool.query('SELECT * FROM customer WHERE cust_token = ? AND cust_id = ?', [req.body.loginToken, req.body.id], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    res.status(200).end();
                } else if (result.length === 1) {
                    req.body.id = result[0].cust_id;
                    next();
                } else {
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    res.status(200).end();
                }
            });
        }
    });
}, login);
router.post('/login', (req, res, next) => {
    localPool.query('SELECT cust_email, cust_passwd, cust_id FROM customer WHERE cust_email = ? OR cust_phone = ?', [req.body.username, req.body.username],(err, result) => {
        if (err) {
            console.log(err);
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        } else if (result.length === 1) {
            bcrypt.compare(req.body.password, result[0].cust_passwd, function(err, hashResults) {
                if (err) {
                    console.log(err);
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    res.status(200).end();
                } else {
                    if (hashResults) {
                        req.body.id = result[0].cust_id;
                        next();
                    } else {
                        res.json({ status: false, apiToken: '', loginToken: '' });
                        res.status(200).end();
                    }
                }
            });
        } else {
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        }
    });
}, login);
router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
            console.log(err);
            res.json({ status: false, message: 'Improper password format!' });
            res.status(200).end();
        } else {
            const id = crypto.randomBytes(32).toString('hex');
            localPool.query('INSERT INTO customer VALUES (?,?,?,?,?,?,?,?);' +
                ' INSERT INTO customer_address_pincode VALUES (?, ?, ?, ?); ' +
                ' INSERT IGNORE INTO city_region VALUES (?, ?);' +
                ' CALL add_customer_care(?)',
                [
                    id,
                    req.body.email,
                    hash,
                    '',
                    req.body.name,
                    req.body.dob,
                    req.body.phone,
                    '[]',
                    id,
                    req.body.pinCode,
                    req.body.city,
                    req.body.address,
                    req.body.city,
                    req.body.region,
                    id
                ], (err) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, message: 'Account under this email or phone already exists!' });
                } else {
                    res.json({ status: true, message: 'Account creation successful!' });
                }
                res.status(200).end();
            });
        }
    });
});
router.post('/logout', (req, res) => {
    jwt.verify(req.body.apiToken, publicKey, { ignoreExpiration: true },(err, data) => {
        req.tokenData = data;
        req.body.id = data.data.id;
        if (req.body.id === undefined || req.body.id === null) {
            res.json({ status: false, message: 'Invalid logout!' });
            res.status(200).end();
        } else {
            localPool.query('SELECT * FROM customer WHERE cust_token = ? AND cust_id = ?', [req.body.loginToken, req.body.id], (err) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, message: 'Invalid logout!' });
                    res.status(200).end();
                } else {
                    localPool.query('UPDATE customer SET cust_token = ? WHERE cust_email = ?', ['', req.body.username], (err) => {
                        if (err) {
                            console.log(err);
                            res.json({ status: false, message: 'Could not logout!' });
                            res.status(200).end();
                        } else {
                            res.json({ status: true, message: 'Successful logout!' });
                            res.status(200).end();
                        }
                    });
                }
            });
        }
    });
});
module.exports = router;
