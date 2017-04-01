const Users = require('./userModel');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const usersController = {};

//getting all users
usersController.getAllUsers = (next) => {
  Users.find({}, next);
};

// creating user in db
usersController.createUser = (req, res, next) => {
  // console.log('========',req.body);
		console.log( 'ths is the body object', req.body);
	Users.create({
				name: req.body.name,
				cell: req.body.cell
				}, (error, doc) => {
              // console.log('8767678678');
						
							if (error) console.log('error:', error);
							else {
                return next();
              }
				});
};

//removing user from db
usersController.removeUser = (req, res, next) => {
  Users.find({ name: req.body.name }).remove().exec()
};

module.exports = usersController;
