var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Restaurants = require('./restaurant');

var foodSchema = new Schema({
	name: String,
	price: String,
	expired_date: Date,
	available_at: [{type: Schema.Types.ObjectId, ref:'Restaurants'}]
});

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;