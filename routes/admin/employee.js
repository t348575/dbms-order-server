const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const url = require('url');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
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
router.get('/getEmployees', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    const page = parseInt(req.body.page, 10);
    const pageSize = parseInt(req.body.pageSize, 10);
    let query = '';
    let jobTitle = false;
    if (req.body.jobTitle !== 'Any Job Title') {
        query += `WHERE emp_job_title = '${req.body.jobTitle}'`;
        jobTitle = true;
    }
    if (req.body.search) {
        if (jobTitle) {
            query += ' AND ';
        } else {
            query += 'WHERE ';
        }
        query += ` (emp_id like '%${req.body.search}%' or emp_name like '%${req.body.search}%')`;
    }
    localPool.query(`SELECT * FROM employee ${query} ORDER BY ${req.body.sortBy} ${req.body.dir} LIMIT ? OFFSET ?; SELECT COUNT(emp_phone) AS total FROM employee ${query}`,
        [pageSize, page * pageSize], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            } else {
                results[0] = results[0].map(a => {
                    a.emp_payment = JSON.parse(a.emp_payment);
                    return a;
                });
                res.json({
                    data: results[0],
                    total: results[1][0].total
                });
                res.status(200).end();
            }
        });
});
module.exports = router;

