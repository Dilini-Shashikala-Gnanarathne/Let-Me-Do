const User = require('../models/UserSchema');

const calculateGPA = (req, res, next) => {
    User.find()
      .then(response => {
        let totalWeightedGrades = 0;
        let totalCredits = 0;
  
        response.forEach(user => {
          let grade = 0;
  
          switch (user.name) {
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
              return;
          }
  
          totalWeightedGrades += grade * user.credit;
          totalCredits += user.credit;
          console.log(totalWeightedGrades,totalCredits);
        });
  
        const gpa = totalCredits ? (totalWeightedGrades / totalCredits) : 0;
  
        res.json({ gpa });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };