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
    localPool.query('select customer.cust_email, customer.cust_dob, customer.cust_name, customer.cust_phone, customer_address_pincode.pincode as cust_pincode, customer_address_pincode.city as cust_city, customer_address_pincode.address as cust_address,\n' +
        'city_region.region as cust_region, region_country.country as cust_country\n' +
        'from customer inner join customer_address_pincode on customer.cust_id = customer_address_pincode.cust_id left join city_region\n' +
        'on customer_address_pincode.city = city_region.city left join region_country on city_region.region = region_country.region WHERE customer.cust_id = ?', [req.tokenData.data.id], (err, results) => {
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
        'SET cust_name = ?, cust_phone = ?, ' +
        'cust_email = ?, cust_dob = ? ' +
        'WHERE cust_id = ?; ' +
        'UPDATE customer_address_pincode ' +
        'SET pincode = ?, city = ?, address = ? WHERE cust_id = ? ; INSERT IGNORE INTO city_region VALUES(?, ?); ',
        [
            req.body.details.name,
            req.body.details.phone,
            req.body.details.email,
            req.body.details.dob,
            req.tokenData.data.id,
            req.body.details.address.pinCode,
            req.body.details.address.city,
            req.body.details.address.address,
            req.tokenData.data.id,
            req.body.details.address.city,
            req.body.details.address.region,
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
