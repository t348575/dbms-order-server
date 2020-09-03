const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
router.post('/login', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'test') {
        res.json({ status: true, token: crypto.randomBytes(32).toString('hex') });
        res.status(200).end();
    } else {
        res.json({ status: false, token: '' });
        res.status(200).end();
    }
});
router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ status: true });
    res.status(200).end();
});
module.exports = router;
