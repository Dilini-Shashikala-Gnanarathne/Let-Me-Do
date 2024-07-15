const express = require('express');
const { authenticateToken, verifyUser } = require('./auth/verifyToken');
const controller = require('./controller');
const routers = require('./controller/auth');
const yearSem= require('./controller/YearAndSemester');
const router = express.Router();
const getSem= require('./controller/FirstYearFirstResult');

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

router.get('/getfirstyearfirst', getSem.getfirstyearfirst);



router.get('/user',authenticateToken, verifyUser);

module.exports = router;
