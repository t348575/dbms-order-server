const express = require('express');
const router = express.Router();
const crypto = require('crypto');
router.post('/login', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'test') {
        res.json({ status: true, token: crypto.randomBytes(32).toString('hex') });
        res.status(200).end();
    } else {
        res.json({ status: false, token: '' });
        res.status(200).end();
    }
});
module.exports = router;
