const User = require('../models/UserSchema');

const getSemester = async (req, res) => {
  const { email } = req.body;

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email });
    if (record) {
      let user = record.firstyearfirst[0].grade; 
      console.log(user);
      let totalWeightedGrades = 0;
      let totalCredits = 0;

      user.forEach(subject => {
        let grade = 0;
        totalWeightedGrades += grade * subject.credit;
        totalCredits += subject.credit;
        console.log(totalWeightedGrades, totalCredits);
      });

      const gpa = totalCredits ? (totalWeightedGrades / totalCredits) : 0;
console.log(gpa);
      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: gpa,
      });
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
