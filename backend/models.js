const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  credit:{type:Number},
  semester:{type: String}     
    }
)

const User= mongoose.model('User', userSchema);

module.exports = User;
