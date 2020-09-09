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
    multipleStatments: 'true'
});
function getDate(date) {
    const newDate = new Date(date);
    return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
}
router.post('/login', (req, res) => {
    console.log(req.body);
    localPool.query('SELECT emp_phone, emp_passwd FROM employee WHERE emp_phone = ?', [req.body.username],(err, result) => {
        if (err) {
            console.log(err);
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        } else if (result.length === 1) {
            bcrypt.compare(req.body.password, result[0].emp_passwd, function(err, hashResults) {
                if (err) {
                    console.log(err);
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    res.status(200).end();
                } else {
                    if (hashResults) {
                        jwt.sign({
                            data: { username: req.body.username },
                            iat: Math.floor(Date.now() / 1000),
                            exp: Math.floor(Date.now() / 1000) + 1800
                        }, key, { algorithm: 'RS256' }, function(err1, jwtToken) {
                            if (err1) {
                                console.log(err1);
                                res.json({ status: false, apiToken: '', loginToken: '' });
                                res.status(200).end();
                            } else {
                                const loginToken = crypto.randomBytes(32).toString('hex');
                                localPool.query('UPDATE employee SET emp_token = ? WHERE emp_phone = ?', [loginToken, req.body.username], (err2) => {
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
});
router.post('/logout', (req, res) => {
    jwt.verify(req.body.apiToken, publicKey, { ignoreExpiration: true },(err, data) => {
        req.tokenData = data;
        req.body.username = data.data.username;
        if (req.body.username === undefined || req.body.username === null) {
            res.json({ status: false, message: 'Invalid logout!' });
            res.status(200).end();
        } else {
            localPool.query('SELECT * FROM employee WHERE emp_token = ? AND emp_phone = ?', [req.body.loginToken, req.body.username], (err) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, message: 'Invalid logout!' });
                    res.status(200).end();
                } else {
                    localPool.query('UPDATE employee SET emp_token = ? WHERE emp_phone = ?', ['', req.body.username], (err) => {
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
