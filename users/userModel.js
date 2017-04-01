const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connectionOne = require('./connectionOne');


// const users = 'mongodb://localhost/users';
// mongoose.connect(users);

const usersSchema = new Schema({
  name: String,
  cell: Number
});


module.exports = connectionOne.model('Users', usersSchema);
