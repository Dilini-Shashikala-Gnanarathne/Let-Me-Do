const User = require('./models/semester');

const getAllUsers = (req,res,next) => {
    User.find()
   .then(response => {
    res.json({response})
    })
    .catch(err => {
        res.json({err: err});
    });

   }

   const addUser = async (req, res, next) => {
    try {
        console.log('Received request to add course with ID:', req.body.id);

        const existingUser = await User.findOne({ id: req.body.id });
        if (existingUser) {
            console.log('Course code already exists. Please Enter new values:', req.body.id);
            return res.status(400).json({ error: "Course code already exists. Please Enter new values" });
        }

        const user = new User({
            id: req.body.id,
            name: req.body.name,
            credit: req.body.credit,
            semester:req.body.semester,
            numofcourses:req.body.numofcourses,
        });
        console.log('Creating new course:', user);

        const response = await user.save();
        console.log('Course saved successfully:', response);

        res.json({ response });
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: err.message });
    }
};


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

