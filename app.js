var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var routes = require('./routes/index');

var app = express();

app.use('/', routes);

app.listen(3000);

module.exports = app;