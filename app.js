const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouter = require('./src/routes/product');
const categoryRouter = require('./src/routes/category');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/products', productRouter);
app.use('/categories', categoryRouter);

mongoose.connect('mongodb://localhost:27017/ptz_burgers')
    .then(result => {
        app.listen(3030);
    })
    .catch(err => {
        console.log(err);
    });



