const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const url = require('url');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
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
router.get('/get', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT * FROM products ORDER BY ? ? limit ? OFFSET ?', [req.body.sortBy, req.body.dir, req.body.pageSize, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/search', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query(`SELECT * FROM products WHERE prod_name LIKE ? ORDER BY ${req.body.sortBy} ${req.body.dir} limit ${req.body.pageSize} OFFSET ?`, [`%${req.body.search}%`, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/browse', (req, res) => {
    req.body = url.parse(req.url, true).query;
    req.body.page = parseInt(req.body.page, 10);
    req.body.pageSize = parseInt(req.body.pageSize, 10);
    localPool.query('SELECT * FROM products  ORDER BY RAND() limit ? OFFSET ?', [ req.body.pageSize, req.body.page * req.body.pageSize], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/predictSearch', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT * FROM products  WHERE prod_name LIKE ? LIMIT 5;', [`%${req.body.search}%`], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    });
});
router.get('/byId', (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT * FROM products WHERE prod_id IN (?)', [req.body.ids], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.json(results);
            res.status(200).end();
        }
    })
});
module.exports = router;
