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
    
const calculateGPA = (req, res, next) => {
    User.find()
      .then(response => {
        let count = {
          A: 0,
          B: 0,
          C: 0,
          S: 0,
          D:0,
          E:0,
          'A-':0,
          'B-':0,
          'C-':0,
          'D-':0,
          'A+':0,
          'B+':0,
          'C+':0,
          'D+':0,
         
        };
        let counts=0;
        response.forEach(user => {
          if (user.name === 'A') {
            count.A++;
          } else if (user.name === 'B') {
            count.B++;
          } else if (user.name === 'C') {
            count.C++;
          } else if (user.name === 'D') {  
            count.D++;
          } else if (user.name === 'A+') {
            count['A+']++;
          }else if (user.name === 'B+') {
            count['B+']++;
          } else if (user.name === 'C+') {
            count['C+']++;
          } else if (user.name === 'D+') {  
            count['D+']++;
          }  else if (user.name === 'A-') {
            count['A-']++;
          }else if (user.name === 'B-') {
            count['B-']++;
          } else if (user.name === 'C-') {
            count['C-']++;
          } else if (user.name === 'D-') {  
            count['D-']++;
            }  else if (user.name === 'E') {  
            count.D++;
          }
        });
        counts=4*count['A+']+count.A*4+count['A-']*3.7+count.B*3.3+count['B+']*3.0+count['B-']*2.7+count.C*2.3+count['C+']*2+count['C-']*1.7;
        res.json({counts} );
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

