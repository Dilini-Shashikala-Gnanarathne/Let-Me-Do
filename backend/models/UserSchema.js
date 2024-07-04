const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: {
    type: String,
  },
  id:{
    type: String,
    required: true,
    unique: true,
  }

});


const User= mongoose.model('User', userSchema);

module.exports = User;
