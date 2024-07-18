const User = require('../../models/UserSchema');

const getSemester = async (req, res) => {
  const { email } = req.body;

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email });
    if (record) {
      let totalWeightedGrades = 0;
      let totalCredits = 0;

      for (let i = 0; i < record.fourthyearfirst.length; i++) {
        let user = record.fourthyearfirst[i].grade; 
        let credit = record.fourthyearfirst[i].subjectcredit;
        console.log(user);

        let grade = 0;
        if (['A', 'A+', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'].includes(user)) {
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
              break;
          }

          console.log(grade);
          console.log(credit);
          totalWeightedGrades += grade * credit;
          console.log(totalWeightedGrades);
          totalCredits += credit;
          console.log(totalWeightedGrades, totalCredits);
        }
      }

      const fourthyearfirstGPA = totalCredits ? (totalWeightedGrades / totalCredits) : 0;
      console.log(fourthyearfirstGPA);
      
      record.fourthyearfirstGPA = fourthyearfirstGPA;
      await record.save();

      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: fourthyearfirstGPA,
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

const getFourthYearFirstSemesterGPA = (req, res) => getSemester(req, res);

module.exports = {
  getFourthYearFirstSemesterGPA,
};
