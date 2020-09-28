const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const employeeRouter = require('./routes/employee');
const cartRouter = require('./routes/cart');
const userDataRouter = require('./routes/userData');
const orderRouter = require('./routes/order');
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => { res.redirect('/client'); });
// app.use('/', indexRouter)
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/employee', employeeRouter);
app.use('/cart', cartRouter);
app.use('/userData', userDataRouter);
app.use('/order', orderRouter);
app.get('/client/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/index.html'));
});
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});
module.exports = app;
