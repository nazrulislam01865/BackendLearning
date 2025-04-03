const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
});
module.exports = mongoose.model('User', userSchema);