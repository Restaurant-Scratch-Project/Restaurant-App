const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const restaurants = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
// mongoose.createConnection(restaurants);

const restaurantProfile = new Schema ({
  name: String,
  phoneNumber: Number,
  address: String,
})

const restaurantsSchema = new Schema({
  username: String,
  password: String,
  restaurantInfo: [restaurantProfile],
  waitTime: Number,
});


module.exports = mongoose.model('Restaurants', restaurantsSchema);
