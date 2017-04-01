// I was having some problems with creating multiple collections
// and I solve that in this way


var mongoose = require('mongoose'),
    mongoURI = 'mongodb://localhost/users';

mongoose.Promise = global.Promise;
module.exports = connectionOne = mongoose.createConnection(mongoURI);

connectionOne.on('connected', function() {
  console.log('Mongoose connected to connectionOne');
});

require('./userModel')
