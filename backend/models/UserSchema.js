const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the semester schema once and reuse it
const semesterSchema = new Schema({
  subject: { type: String },
  grade: { type: String },
  gpa: { type: Number }
});

// Define the user schema
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
  totalgpa: { type: Number }
});

// Pre-save hook to calculate total GPA
userSchema.pre('save', function(next) {
  let totalGpa = 0;
  let semesters = [
    ...this.firstyearfirst,
    ...this.firstyearsecond,
    ...this.secondyearfirst,
    ...this.secondyearsecond,
    ...this.thirdyearfirst,
    ...this.thirdyearsecond,
    ...this.fourthyearfirst,
    ...this.fourthyearsecond
  ];
  if (semesters.length > 0) {
    totalGpa = semesters.reduce((acc, sem) => acc + sem.gpa, 0) / semesters.length;
  }
  this.totalgpa = totalGpa;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
