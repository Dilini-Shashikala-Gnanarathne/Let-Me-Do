const express = require('express');
const { authenticateToken, verifyUser } = require('./auth/verifyToken');
const controller = require('./controller');
const routers = require('./controller/auth');
const yearSem= require('./controller/YearAndSemester');
const router = express.Router();
const getSem1= require('./controller/Result/FirstYearFirstResult');
const getSem2= require('./controller/Result/FirstYearSecondResult');
const getSem3= require('./controller/Result/SecondYearFirstResult');
const getSem4= require('./controller/Result/SecondYearSecondResult');
const getSem5= require('./controller/Result/ThirdYearFirstResult ');
const getSem6= require('./controller/Result/ThirdYearSecondResult');
const getSem7= require('./controller/Result/FourthYearFirstResult');
const getSem8= require('./controller/Result/FourthYearSecondResult');
const finalgpa= require('./controller/Result/FinalGPA');
const getTry= require('./controller/TryEmailResult')
router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser', controller.calculateGPA);

router.post('/createUser', routers.register);
router.post('/login', routers.login);

router.put('/firstyearfirst', yearSem.firstyearfirst);
router.put('/firstyearsecond', yearSem.firstyearsecond);
router.put('/secondyearfirst', yearSem.secondyearfirst);
router.put('/secondyearsecond', yearSem.secondyearsecond);
router.put('/thirdyearfirst', yearSem.thirdyearfirst);
router.put('/thirdyearsecond', yearSem.thirdyearsecond);
router.put('/fourthyearfirst', yearSem.fourthyearfirst);
router.put('/fourthyearsecond', yearSem.fourthyearsecond);


router.post('/getfirstyearfirstGPA', getSem1.getFirstYearFirstSemesterGPA); 
router.post('/getfirstyearsecondGPA', getSem2.getFirstYearSecondSemesterGPA);
router.post('/getsecondyearfirstGPA', getSem3.getSecondYearFirstSemesterGPA);
router.post('/getsecondyearsecondGPA', getSem4.getSecondYearSecondSemesterGPA);
router.post('/getthirdyearfirstGPA', getSem5.getThirdYearFirstSemesterGPA);
router.post('/getthirdyearsecondGPA', getSem6.getThirdYearSecondSemesterGPA);
router.post('/getfourthyearfirstGPA', getSem7.getFourthYearFirstSemesterGPA);
router.post('/getfourthyearsecondGPA', getSem8.getFourthYearSecondSemesterGPA);

router.post('/finalgpa', finalgpa.finalGPACal);


router.get('/gettryfirstyearfirst',getTry.gettryfirstyearfirst );

router.get('/user',authenticateToken, verifyUser);

module.exports = router;
