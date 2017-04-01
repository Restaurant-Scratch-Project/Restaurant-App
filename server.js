var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const usersController = require('./users/usersController');
const restController = require('./restaurants/restController');
// const autoIncrement = require('mongoose-auto-increment');
const Users = require('./users/userModel');
const cors = require('cors');
// const Restaurants = require('./restaurants/restaurantModel');
//
// const restaurants = 'mongodb://localhost/restaurants';
// const resConnection = mongoose.createConnection(restaurants);
//console.log('connection status:', resConnection);
//mongoose.connect(restaurants);
//
// const users = 'mongodb://localhost/users';
// const usersConnection = mongoose.createConnection(users);
//console.log('connection status:', usersConnection);
//mongoose.connect(users);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


// route for wait time check page when user want to check that from home
app.get('/wait-time-check/:restaurantId', (req, res) => {
    var restaurant1 = 10;
    var restaurant2 = 20;
    var time = null;

    if (req.params.restaurantId == 2) {
        time = restaurant2;
        // res.send('You need to wait ' + time + ' minutes to go inside.');
        res.json({waitTime: time});
    } else if (req.params.restaurantId == 1) {
        time = restaurant1;
        // res.send('You need to wait ' + time + ' minutes to go inside.');
        res.json({waitTime: time});
    } else {
        res.send(';(');
    }
});


// post request when user enter name and phone number --> sending infos to db
app.post('/users', usersController.createUser, (req, res) => {
  // console.log('----------------');
  res.status(200).send();
});

// getting list of all users
app.get('/usersList', (req,res) => {
  Users.find({}, function(err, users) {

    var userMap = users.map((user) => {
      return {name: user.name, cell: user.cell};
    });

    res.send(userMap);
  });

});


// get to removingUser
app.get('/removeOne', usersController.removeUser);


// post req when restaurant login --> send info to db
app.post('/restaurants', restController.createRest, (req, res) => {
  res.status(200).send();
});

// app.get('/restaurantsList', (req, res) => {
//   Restaurants.find({}, (err, rest) => {
//     var restMap = restaurants.map((rest) => {
//       return {username: rest.username};
//     });
//     res.send(restMap);
//   })
// })

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});

 module.exports = app;
