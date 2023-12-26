const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouter = require('./src/routes/product');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', productRouter);

mongoose.connect('mongodb://localhost:27017/ptz_burgers')
    .then(result => {
        app.listen(3030);
    })
    .catch(err => {
        console.log(err);
    });



