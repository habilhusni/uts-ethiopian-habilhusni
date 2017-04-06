'use strict'
var express = require('express');
var router = express.Router();
var Foods = require('../models/food');
var Restaurants = require('../models/restaurant');

let getFoods = (req, res) => {

	Foods.find(function (err, foods) {
  		if (err) return console.error(err);
  		res.send(foods);
	})

}

let createFoods = (req, res) => {

	let food = new Foods(
		{ 
			name: req.body.name, 
			price: req.body.price,
			expired_date: req.body.expired_date
		});

	food.save(function (err) {
  	if (err) return console.error(err);
	});

	res.send(food);

}

let delFoods = (req, res) => {
	
	Foods.remove(
		{
			name: req.body.name
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Food Removed!')
}

let updateFoods = (req, res) => {

	Foods.findOneAndUpdate(
		{
			name: req.body.oldName
		},
		{
			name: req.body.name,
			price: req.body.price,
			expired_date: req.body.expired_date
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Food Updated')

}

let getRestaurants = (req, res) => {

	Restaurants.find(function (err, restaurants) {
  		if (err) return console.error(err);
  		res.send(restaurants);
	})

}

let createRestaurants = (req, res) => {

	let restaurant = new Restaurants(
		{ 
			name: req.body.name,
			order: req.body.order,
			address: req.body.address,
			open_status: req.body.open_status
		});

	restaurant.save(function (err) {
  	if (err) return console.error(err);
	});

	res.send(restaurant);

}

let delRestaurants = (req, res) => {
	
	Restaurants.remove(
		{
			name: req.body.name
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Restaurant Removed!')
}

let updateRestaurants = (req, res) => {

	Restaurants.findOneAndUpdate(
		{
			name: req.body.oldName
		},
		{
			name: req.body.name,
			order: req.body.order,
			address: req.body.address,
			open_status: req.body.open_status
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Restaurant Updated')

}

module.exports = {
	getFoods,
	createFoods,
	delFoods,
	updateFoods,
	getRestaurants,
	createRestaurants,
	delRestaurants,
	updateRestaurants
}