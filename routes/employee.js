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
router.post('/login', (req, res) => {
    console.log(req.body);
    localPool.query('SELECT * FROM employee WHERE emp_phone = ?', [req.body.username],(err, result) => {
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
                            data: { username: req.body.username, role: result[0].emp_type },
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
router.post('/addEmployees', authenticateJWT, (req, res) => {
    if (req.tokenData.data.role === 'admin' || req.tokenData.data.role === 'supervisor') {
        (async() => {
            const skip = [];
            const errList = [];
            for (const [idx, v] of req.body.users.entries()) {
                await new Promise((resolve, reject) => {
                    bcrypt.hash(req.body.password, 10, function(err, hash) {
                        if (err) {
                            skip.push(idx);
                            errList.push({ entry: req.body.users[idx], message: 'Improper password' });
                        } else {
                            req.body.users[idx].password = hash;
                        }
                        resolve();
                    });
                });
                if (skip[skip.length - 1] !== idx) {
                    req.body.users[idx].emp_id = crypto.randomBytes(32).toString('hex');
                    req.body.users[idx].hours = 0;
                    req.body.users[idx].token = '';
                }
            }
            let count = 0;
            for (const v of skip) {
                req.body.users.splice(v - count, 1);
                count++;
            }
            localPool.query('INSERT INTO employee(emp_id, emp_type, emp_name, emp_job_title, emp_dob, emp_salary, emp_hours, emp_phone, emp_passwd, emp_token) VALUES(?)', [req.body.users], (err) => {
                if (err) {
                    console.log(err);
                    res.json({ error: err });
                }
                res.json({ errList });
                res.status(200).end();
            });
        })();
    } else {
        res.json({ status: false, message: 'Improper role!'});
        res.status(200).end();
    }
});
module.exports = router;
