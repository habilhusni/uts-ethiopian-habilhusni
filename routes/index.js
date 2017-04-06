'use strict'
var express = require('express');
var router = express.Router();
var control = require('../controller/allController');
var Foods = require('../models/food');
var Restaurants = require('../models/restaurant');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/foods', control.getFoods)

router.get('/foods/:name', control.getOneFood)

router.post('/foods', control.createFoods)

router.delete('/foods', control.delFoods)

router.put('/foods', control.updateFoods)

router.get('/restaurants', control.getRestaurants)

router.get('/restaurants/:name', control.getOneRestaurant)

router.post('/restaurants', control.createRestaurants)

router.delete('/restaurants', control.delRestaurants)

router.put('/restaurants', control.updateRestaurants)

module.exports = router;