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
    localPool.query('SELECT cust_email, cust_dob, cust_name, cust_phone, cust_address, cust_country, cust_region, cust_city, cust_pincode FROM customer WHERE cust_id = ?', req.tokenData.data.id, (err, results) => {
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
                pinCode: results[0].cust_pincode,
                dob: results[0].cust_dob,
                email: results[0].cust_email
            });
            res.status(200).end();
        }
    });
});
router.post('/changePass', authenticateJWT, (req, res) => {
    localPool.query('SELECT cust_passwd FROM customer WHERE cust_id = ?', [req.tokenData.data.id], (err, results) => {
        if (err) {
            res.json({ status: false, message: 'Server error!' });
            res.status(200).end();
        } else {
            bcrypt.compare(req.body.oldPass, results[0].cust_passwd, (err, hashResults) => {
                if (err) {
                    res.json({ status: false, message: 'Old password incorrect!' });
                    res.status(200).end();
                } else if (hashResults) {
                    bcrypt.hash(req.body.newPass, 10, (err, hash) => {
                        if (err) {
                            res.json({ status: false, message: 'Server error!' });
                            res.status(200).end();
                        } else {
                            localPool.query('UPDATE customer SET cust_passwd = ? WHERE cust_id = ?', [hash, req.tokenData.data.id], (err) => {
                                if (err) {
                                    res.json({ status: false, message: 'Server error!' });
                                } else{
                                    res.json({ status: true, message: '' });
                                }
                                res.status(200).end();
                            });
                        }
                    });
                } else {
                    res.json({ status: false, message: 'Old password incorrect!' });
                    res.status(200).end();
                }
            });
        }
    });
});
router.post('/updateBasic', authenticateJWT, (req, res) => {
    localPool.query('UPDATE customer ' +
        'SET cust_name = ?, cust_phone = ?, cust_address = ?, cust_city = ?,' +
        'cust_region = ?, cust_country = ?, cust_pincode = ?, cust_email = ?, cust_dob = ? ' +
        'WHERE cust_id = ?',
        [
            req.body.details.name,
            req.body.details.phone,
            req.body.details.address.address,
            req.body.details.address.city,
            req.body.details.address.region,
            req.body.details.address.country,
            req.body.details.address.pinCode,
            req.body.details.email,
            req.body.details.dob,
            req.tokenData.data.id
        ],
        (err) => {
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
