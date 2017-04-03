var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const usersController = require('./users/usersController');
const restController = require('./restaurants/restController');
const Users = require('./users/userModel');
const Restaurants = require('./restaurants/restaurantModel');
const cors = require('cors');
const path = require('path');

mongoose.connect('mongodb://codesmith13:1Lovetesting@ds149800.mlab.com:49800/codesmith13');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.static(path.join(__dirname, './')));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// const Restaurants = require('./restaurants/restaurantModel');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/styles.css', (req, res) => {
//   res.sendFile(__dirname + '/styles.css');
// });
//
// app.get('/build/webpack-bundle.js', (req, res) => {
//   res.sendFile(__dirname + '/build/webpack-bundle.js');
// });
// route for wait time check page when user want to check that from home
app.get('/wait-time-check', usersController.time,  (req, res) => {
  res.status(200).send();
});


// post request when user enter name and phone number --> sending infos to db
app.post('/users', usersController.createUser, (req, res) => {
  // console.log('----------------');
  res.status(200).send();
});

// getting list of all users and checking cookie
// if user enter correct username and password it will go on usersList
// if it's not go to 401 indicating that the request requires authentication
app.get('/usersList', (req,res) => {
  // if (req.cookies.username) {

    Users.find({}, function(err, users) {
      console.log(users);
      let userArr = users.map((user) => {
        return {username: user.username, phoneNumber: user.phoneNumber};
      });
      res.send(userArr);
    });
  // } else {
  //   res.status(401).send();
  // }

});

app.get('/restaurantsList', (req, res) => {
  Restaurants.find({}, (err, restaurants) => {
    if (err) return res.status(400).json("Request was terrible");
    res.status(200).json(restaurants);
  })
});

// login for restaurants
app.post('/login', restController.login);


// get to removingUser
app.post('/removeOne', usersController.removeUser);


// post req when restaurant login --> send info to db
app.post('/restaurants', restController.createRest, (req, res) => {
  res.status(200).send();
});


app.listen(3000, function () {
  console.log('App listening on port 3000!')
});

 module.exports = app;
