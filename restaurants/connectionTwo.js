var mongoose = require('mongoose'),
    mongoURI = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
module.exports = connectionTwo = mongoose.createConnection(mongoURI);

connectionOne.on('connected', function() {
  console.log('Mongoose connected to connectionTwo');
});

require('./restaurantModel')
