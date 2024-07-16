const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
  subject: { type: String },
  grade: { type: String },
  subjectcredit: { type: Number, min: 0, max: 7 }
});

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String },
  id: { type: String, required: true, unique: true },
  firstyearfirst: [semesterSchema],
  firstyearsecond: [semesterSchema],
  secondyearfirst: [semesterSchema],
  secondyearsecond: [semesterSchema],
  thirdyearfirst: [semesterSchema],
  thirdyearsecond: [semesterSchema],
  fourthyearfirst: [semesterSchema],
  fourthyearsecond: [semesterSchema],
  firstyearfirstGPA: { type: Number },
  firstyearsecondGPA: { type: Number },
  secondyearfirstGPA: { type: Number },
  secondyearsecondGPA: { type: Number },
  thirdyearfirstGPA: { type: Number },
  thirdyearsecondGPA: { type: Number },
  fourthyearfirstGPA: { type: Number },
  fourthyearsecondGPA: { type: Number },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
