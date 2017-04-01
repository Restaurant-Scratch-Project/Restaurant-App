const Restaurants = require('./restaurantModel');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const restController = {};

restController.createRest = (req, res, next) => {
  console.log('REST------',req.body);
	Restaurants.create({
				username: req.body.username,
				password: req.body.password,
				}, (error, doc) => {
							if (error) console.log('error:', error);
							else {
                return next();
              }
				});
};

module.exports = restController;
