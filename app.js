var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var app = express();

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

var index = require('./routes/index');
app.use('/', index);

// app.use('/', (req, res, next) => {
// 	res.send('connect');
// })

app.listen(3000);

module.exports = app;