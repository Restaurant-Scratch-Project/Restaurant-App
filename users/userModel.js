const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const users = 'mongodb://localhost/users';
// mongoose.connect(users);

const favoritesSchema = new Schema ({
  restaurant: String,
  phoneNumber: Number,
});

const usersSchema = new Schema({
  username: {type: String, required: true, unique: true},
  phoneNumber: Number,
  favoritesList: [favoritesSchema],
});


module.exports = mongoose.model('Users', usersSchema);
