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
        data: { username: req.body.username, id: req.body.id, role: req.body.role },
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 3600
    }, key, { algorithm: 'RS256' }, function(err1, jwtToken) {
        if (err1) {
            console.log(err1);
            res.json({ status: false, apiToken: '', loginToken: '' });
            res.status(200).end();
        } else {
            const loginToken = crypto.randomBytes(32).toString('hex');
            localPool.query('UPDATE employee SET emp_token = ? WHERE emp_id = ?', [loginToken, req.body.id], (err2) => {
                if (err2) {
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    console.log(err2);
                } else {
                    res.json({ status: true, apiToken: jwtToken, loginToken, role: req.body.role });
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
            localPool.query('SELECT * FROM employee WHERE emp_token = ? AND emp_id = ?', [req.body.loginToken, req.body.id], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, apiToken: '', loginToken: '' });
                    res.status(200).end();
                } else if (result.length === 1) {
                    req.body.id = result[0].emp_id;
                    req.body.role = result[0].emp_job_title;
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
    localPool.query('SELECT emp_email, emp_passwd, emp_id, emp_job_title FROM employee WHERE emp_email = ? OR emp_phone = ?', [req.body.username, req.body.username],(err, result) => {
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
                        req.body.id = result[0].emp_id;
                        req.body.role = result[0].emp_job_title;
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
router.post('/logout', (req, res) => {
    jwt.verify(req.body.apiToken, publicKey, { ignoreExpiration: true },(err, data) => {
        req.tokenData = data;
        req.body.id = data.data.id;
        if (req.body.id === undefined || req.body.id === null) {
            res.json({ status: false, message: 'Invalid logout!' });
            res.status(200).end();
        } else {
            localPool.query('SELECT * FROM employee WHERE emp_token = ? AND emp_id = ?', [req.body.loginToken, req.body.id], (err) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, message: 'Invalid logout!' });
                    res.status(200).end();
                } else {
                    localPool.query('UPDATE employee SET emp_token = ? WHERE emp_email = ?', ['', req.body.username], (err) => {
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
