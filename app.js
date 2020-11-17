const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// client routers
const clUsersRouter = require('./routes/client/users');
const clProductsRouter = require('./routes/client/products');
const clCartRouter = require('./routes/client/cart');
const clUserDataRouter = require('./routes/client/userData');
const clOrderRouter = require('./routes/client/order');

// admin routers
const adUsersRouter = require('./routes/admin/users');
const adOrderRouter = require('./routes/admin/order');
const adShippingRouter = require('./routes/admin/shipping');
const adEmployeeRouter = require('./routes/admin/employee');
const adHomeRouter = require('./routes/admin/home');
const app = express();

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(['/client/cl/images', '/admin/cl/images'], express.static(path.join(__dirname, 'public/images')));

// client routes
app.get('/', (req, res) => { res.redirect('/client'); });
app.use('/client/cl/users', clUsersRouter);
app.use('/client/cl/cart', clCartRouter);
app.use('/client/cl/userData', clUserDataRouter);
app.use('/client/cl/order', clOrderRouter);

// admin routes
app.use('/admin/ad/users', adUsersRouter);
app.use('/admin/ad/order', adOrderRouter);
app.use('/admin/ad/shipping', adShippingRouter);
app.use('/admin/ad/employee', adEmployeeRouter);
app.use('/admin/ad/home', adHomeRouter);

// common routes
app.use(['/client/cl/products', '/admin/ad/products'], clProductsRouter);

// forward to client ui
app.get('/client/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/index.html'));
});

// forward to admin ui
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});
module.exports = app;
