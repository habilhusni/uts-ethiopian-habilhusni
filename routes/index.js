var express = require('express');
var router = express.Router();
var contr

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/foods', )