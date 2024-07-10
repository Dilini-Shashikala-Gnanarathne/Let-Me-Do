const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const firstsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const secondsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const thirdsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const fourthsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const fifthsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const sixthsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const seventhsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
const eighthsem= new Schema({
  subject:{type:String, },
  grade:{type:String},
  gpa:{type:Number}
})
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
  },
  firstyearfirst:[firstsem],
  firstyearsecond:[secondsem],
  secondyearfirst:[thirdsem],
  secondyearsecond:[fourthsem],
  thirdyearfirst:[fifthsem],
  thirdyearsecond:[sixthsem],
  fourthyearfirst:[seventhsem],
  fourthyearsecond:[eighthsem],
  totalgpa:{
    type: Number
  }


});


const User= mongoose.model('User', userSchema);

module.exports = User;
