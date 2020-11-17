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
function format(seconds) {
    function pad(s){
        return (s < 10 ? '0' : '') + s;
    }
    let hours = Math.floor(seconds / (60*60));
    let minutes = Math.floor(seconds % (60*60) / 60);
    let second = Math.floor(seconds % 60);
    return pad(hours) + ':' + pad(minutes) + ':' + pad(second);
}
const formatDate = (date) => {
    let month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
};
const toMysqlFormat = (date) => {
    return formatDate(date) + ' ' + date.toTimeString().split(' ')[0];
};
router.get('/', authenticateJWT, (req, res) => {
    const uptime = format(process.uptime());
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    localPool.query(`SELECT count(cust_dob) as total FROM customer; SELECT count(emp_dob) as total FROM employee; SELECT count(ord_prod) as total from orders; select count(prod_stock) as total from products; SELECT SUM(ord_summ->'$.total') as total from orders where ord_date >= '${toMysqlFormat(yesterday)}'`, (err, results) => {
        console.log(results);
        res.json({
            uptime,
            customers: results[0][0].total,
            employees: results[1][0].total,
            orders: results[2][0].total,
            products: results[3][0].total,
            revenue: results[4][0].total === null ? 0 : results[4][0].total
        });
        res.status(200).end();
    });
});
module.exports = router;
