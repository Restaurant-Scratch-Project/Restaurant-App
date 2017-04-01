const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const autoIncrement = require('mongoose-auto-increment');
const connectionTwo = require('./connectionTwo');

// const restaurants = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
// mongoose.createConnection(restaurants);

const restaurantsSchema = new Schema({
  username: String,
  password: String
});


module.exports = connectionTwo.model('Restaurants', restaurantsSchema);
