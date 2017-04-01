const Restaurants = require('./restaurantModel');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const restController = {};

// creating restorant account
restController.createRest = (req, res, next) => {
  // console.log('REST------',req.body);
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

// login
restController.login = (req, res, next) => {
	Restaurants.find({
				username: req.body.username,
				password: req.body.password,
				}, (error, doc) => {

							if (error) console.log('error:', error);
							else {
                if (doc.length > 0) {
                  res.cookie('username', req.body.username).send();
                } else {
                  res.status(204).send();
                }

                return next();
              }
				});
};

module.exports = restController;
