const User = require('../models/UserSchema');

const getSemester = async (req, res) => {
  const { email } = req.body;

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email });
    if (record) {
      for(let i = 0; i < record.firstyearfirst.length; i++) {
      let user = record.firstyearfirst[i].grade; 
      console.log(user);
      let totalWeightedGrades = 0;
      let totalCredits = 0;
        let grade = 0;


        switch (user) {
          case 'A':
          case 'A+':
            grade = 4.0;
            break;
          case 'A-':
            grade = 3.7;
            break;
          case 'B+':
            grade = 3.3;
            break;
          case 'B':
            grade = 3.0;
            break;
          case 'B-':
            grade = 2.7;
            break;
          case 'C+':
            grade = 2.3;
            break;
          case 'C':
            grade = 2.0;
            break;
          case 'C-':
            grade = 1.7;
            break;
          default:
            console.log("Invalid grade");
            return;}
            console.log(grade);
        totalWeightedGrades += grade * user;
        console.log(totalWeightedGrades);
        totalCredits += user;
        console.log(totalWeightedGrades, totalCredits);

      const gpa = totalCredits ? (totalWeightedGrades / totalCredits) : 0;
      console.log(gpa);
      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: gpa,
      });}
    } else {
      return res.status(404).json({
        success: false,
        message: 'Record not found',
      });
    }

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error', err: err.message });
  }
};

const getfirstyearfirst = (req, res) => getSemester(req, res);

module.exports = {
  getfirstyearfirst,
};
