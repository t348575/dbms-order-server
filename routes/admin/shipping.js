const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mysql = require('mysql');
const url = require('url');
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
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
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
router.post('/addShipment', authenticateJWT, (req, res) => {
    try {
        (async() => {
            const ship_id = crypto.randomBytes(32).toString('hex');
            const estDate = new Date();
            estDate.setDate(estDate.getDate() + between(1, 30));
            const order = await new Promise((resolve, reject) => {
                localPool.query('SELECT * FROM orders WHERE ord_id = ?', [req.body.ordId], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0]);
                    }
                });
            });
            order.ord_prod = JSON.parse(order.ord_prod);
            order.ord_summ = JSON.parse(order.ord_summ);
            order.ord_payment = JSON.parse(order.ord_payment);
            const bill = {
                items: [],
                total: order.ord_summ.total,
                payment: {
                    card: order.ord_payment.card,
                    name: order.ord_payment.name
                },
                ord_date: order.ord_date
            };
            for (const v of order.ord_prod) {
                const { prod_name, prod_price } = await new Promise((resolve, reject) => {
                    localPool.query('SELECT prod_name, prod_price FROM products WHERE prod_id = ?', [v.product.prod_id], (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results[0]);
                        }
                    });
                });
                bill.items.push({ prod_name, prod_price, count: v.count });
            }
            const emp_assign = await new Promise((resolve, reject) => {
                localPool.query('CALL get_delivery_emp()', (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0][0].emp_id);
                    }
                });
            });
            localPool.query('INSERT INTO shipping VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [ship_id, req.body.ordId, req.tokenData.data.id, emp_assign,
                    JSON.stringify([{ time: toMysqlFormat(new Date()), value: 'Package shipped!'}]),
                    JSON.stringify(order.ord_summ.details.address),
                    toMysqlFormat(estDate),
                    JSON.stringify(bill)
                ],
                (err) => {
                    if (err) {
                        res.json({ status: false });
                    } else {
                        res.json({ status: true });
                    }
                    res.status(200).end();
                });
        })();
    } catch (e) {
        res.json({ status: false });
        res.status(500).end();
    }
});
router.get('/getShipments', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    const page = parseInt(req.body.page, 10);
    const pageSize = parseInt(req.body.pageSize, 10);
    let query = '';
    let dateQuery = '';
    if (req.body.search.length > 0) {
        query = `WHERE ship_id LIKE '%${req.body.search}%'`;
    }
    if (req.body.startDate && req.body.endDate) {
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        dateQuery = `${query.length > 0 ? 'AND' : ''} ord_date >= '${toMysqlFormat(startDate)}' AND ord_date <= '${toMysqlFormat(endDate)}'`;
    } else if (req.body.startDate) {
        const startDate = new Date(req.body.startDate);
        startDate.setHours(0, 0, 0, 0);
        dateQuery = `${query.length > 0 ? 'AND' : ''} ord_date >= '${toMysqlFormat(startDate)}'`;
    } else if (req.body.endDate) {
        const endDate = new Date(req.body.endDate);
        endDate.setHours(0, 0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        dateQuery = `${query.length > 0 ? 'AND' : ''} ord_date <= '${toMysqlFormat(endDate)}'`;
    }
    if (query.length === 0 && dateQuery.length > 0) {
        query = 'WHERE';
    }
    localPool.query(`SELECT shipping.*, orders.ord_date, orders.state, employee.emp_phone, employee.emp_email FROM shipping
INNER JOIN orders ON orders.ord_id = shipping.ord_id INNER JOIN employee on shipping.emp_id = employee.emp_id
${query} ${dateQuery}
ORDER BY ord_date DESC LIMIT ? OFFSET ?;
SELECT COUNT(orders.state) AS total FROM shipping
INNER JOIN orders ON orders.ord_id = shipping.ord_id INNER JOIN employee on shipping.emp_id = employee.emp_id
${query} ${dateQuery};`,
        [pageSize, page * pageSize], (err, results) => {
            if (err) {
                res.status(500).end();
            } else {
                results[0] = results[0].map(a => {
                    a.ship_status = JSON.parse(a.ship_status);
                    a.ship_address = JSON.parse(a.ship_address);
                    a.ship_bill = JSON.parse(a.ship_bill);
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
router.get('/getShipment', authenticateJWT, (req, res) => {
    req.body = url.parse(req.url, true).query;
    localPool.query('SELECT shipping.*, orders.ord_date, orders.state, employee.emp_phone, employee.emp_email FROM shipping' +
        ' INNER JOIN orders ON orders.ord_id = shipping.ord_id INNER JOIN employee on shipping.emp_id = employee.emp_id ' +
        'WHERE shipping.ship_id = ?',
        [req.body.shipId], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            } else {
                results[0].ship_status = JSON.parse(results[0].ship_status);
                results[0].ship_address = JSON.parse(results[0].ship_address);
                results[0].ship_bill = JSON.parse(results[0].ship_bill);
                res.json(results[0]);
                res.status(200).end();
            }
        });
});
router.post('/addStatus', authenticateJWT, (req, res) => {
    localPool.query(`UPDATE shipping SET ship_status = JSON_ARRAY_APPEND(ship_status, '$', JSON_OBJECT('time', '${req.body.status.time}', 'value', '${req.body.status.value}')) WHERE ship_id = '${req.body.shipId}'`, (err) => {
            if (err) {
                console.log(err);
                res.status(500).end();
            } else {
                if (req.body.updateOrder) {
                    localPool.query('UPDATE orders SET state = ? WHERE ord_id = ?',
                        [req.body.state, req.body.ordId], (err) => {
                            if (err) {
                                res.status(500).end();
                            } else {
                                res.status(200).end();
                            }
                        });
                } else {
                    res.status(200).end();
                }
            }
        });
});
router.post('/removeStatus', authenticateJWT, (req, res) => {
    req.body.index = `$[${req.body.index}]`;
    localPool.query('UPDATE shipping SET ship_status = JSON_REMOVE(ship_status, ?) WHERE ship_id = ?',
        [req.body.index, req.body.shipId],
        (err) => {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
});
module.exports = router;
