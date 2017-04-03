const Users = require('./userModel');
const mongoose = require('mongoose');
const usersController = {};

// Twilio Credentials
const accountSid = 'ACe593550f91fe0fd1dff10bb9b18bf0aa';
const authToken = '7087f8e568a55a99474b72fe4ce4f380';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


// creating user in db
usersController.createUser = (req, res, next) => {
  console.log('========',req.body);
	Users.create({
				username: req.body.username,
				phoneNumber: req.body.phoneNumber,
        favoritesList: req.body.favoritesList,
				}, (error, doc) => {
              // console.log('8767678678');
							if (error) console.log('error:', error);
							else {
                console.log('POSTED')
                //Twilio script
                // client.messages
                //   .create({
                //     to: req.body.cell,
                //     from: '+18033849413', //This is a number we got from Twilio.
                //     body: 'Your table is ready!',
                //   })
                //   .then((message) => console.log(message.sid));

                return next();
              }
              
				});
};

//removing user from db
usersController.removeUser = (req, res, next) => {
  Users.find({ name: req.body.name }).remove().exec();
  res.send();
};

//checking time waiting (I'm setting that in a way that is 5 min per person)
usersController.time = (req, res) => {
  Users.find({}, function(err, users) {
    res.json({waitTime: users.length * 5});
  });
};

module.exports = usersController;
