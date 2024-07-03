const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sem=new Schema({
  credit:{type:Number},
  semester:{type: String} ,
  numofcourses: {type:Number}, 
});


const semesterSchema = new Schema(
    {
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
   
    }
)


module.exports = mongoose.model('semester', semesterSchema);
