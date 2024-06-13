const User = require('./models');

const getAllUsers = (req,res,next) => {
    User.find()
   .then(response => {
    res.json({response})
    })
    .catch(err => {
        res.json({err: err});
    });

   }


const addUser = (req, res, next) => {
    const user = new User({
    id:req.body.id,
    name:req.body.name,
    credit:req.body.credit,
   
    });
    user.save()
   .then(response => {
    res.json({response})
    })
   .catch(err => {
        res.json({err: err});
        console.log(1);
    });
}

const updateOneUser = (req, res, next) => {
    const { id, name } = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ response });
        })
        .catch(err => {
            res.json({ err: err });
        });
}


const deleteUser = (req, res, next) => {
    const id=req.body.id;
    User.deleteOne({id:id})
    .then(response => {
        res.json({response})
        })
       .catch(err => {
            res.json({err: err});
        })
    }

    // const calculateGPA = (req, res, next) => {
    //     User.find()
    //         .then(response => {
    //             let count = {
    //                 A: 0,
    //                 B: 0,
    //                 C: 0,
    //                 D: 0
    //             };
    
    //             response.forEach(user => {
    //                 if (user.name === 'A') {
    //                     count.A++;
    //                 } else if (user.name === 'B') {
    //                     count.B++;
    //                 } else if (user.name === 'C') {
    //                     count.C++;
    //                 } else if (user.name === 'D') {
    //                     count.D++;
    //                 }
    //             });
    
    //             res.json({ count });
    //         })
    //         .catch(err => {
    //             res.status(500).json({ error: err.message });
    //         });
    // };


//     const calculateGPA = (req, res, next) => {
//         User.find()
//           .then(response => {
//             let count = {
//               A: 0,
//               B: 0,
//               C: 0,
//               D: 0
//             };      
//             response.forEach(user => {
//               if (user.name === 'A') {
//                 count.A++;
//               } else if (user.name === 'B') {
//                 count.B++;
//               } else if (user.name === 'C') {
//                 count.C++;
//               } else if (user.name === 'D') {
//                 count.D++;
//               }
//             });
//             res.json({ count });
//           })
//           .catch(err => {
//             res.status(500).json({ error: err.message });
//           });
// };
    
// const calculateGPA = (req, res, next) => {
//   User.find()
//     .then(response => {
//       let count = {
//         A: 0,
//         B: 0,
//         C: 0,
//         S: 0,
//         D: 0,
//         E: 0,
//         'A-': 0,
//         'B-': 0,
//         'C-': 0,
//         'D-': 0,
//         'A+': 0,
//         'B+': 0,
//         'C+': 0,
//         'D+': 0,
//       };
//       let credit=0;
//       response.forEach(user => {
//         if (count.hasOwnProperty(user.name)) {
//           count[user.name]++;
//         }
//       });

//       const totalCredits = 
//         4 * count['A+'] + 4 * count.A + 3.7 * count['A-'] + 
//         3.3 * count.B + 3 * count['B+'] + 2.7 * count['B-'] + 
//         2.3 * count.C + 2 * count['C+'] + 1.7 * count['C-'] + 
//         1 * count.D + 0 * count.E;

//       const totalGrades = 
//         count['A+'] + count.A + count['A-'] + count.B + count['B+'] + 
//         count['B-'] + count.C + count['C+'] + count['C-'] + count.D + count.E;

//       const gpa = totalGrades ? (totalCredits / totalGrades) : 0;

//       res.json({ gpa });
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message });
//     });
// };

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



      
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.updateOneUser = updateOneUser;
exports.calculateGPA = calculateGPA;

