const User = require('./userModel');
const mongoose = require('mongoose');
const userController = {};

userController.createUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    phoneNumber: req.body.phoneNumber,
  }, (err, result) => {
    if (err) res.status(400).json('Error')
    else {
      return res.status(200).json(result);
    }
  });
};

userController.findAll = (req, res, next) => {
  Users.find({}, (err, result) => {
    console.log(users);
    if (err) res.status(400).json('Error')
    else {
      return res.status(200).json(result);
    }
  });
};

userController.removeUser = (req, res, next) => {
  User.find({ name: req.body.name }).remove().exec();
  res.status(200).json('Successfully removed user');
};

module.exports = userController;