const express = require('express');
const { authenticateToken, verifyUser } = require('./auth/verifyToken');
const controller = require('./controller');
const routers = require('./controller/auth');
const firstYear = require('./controller/FirstYear');
const secondYear = require('./controller/SecondYear');
const thirdYear = require('./controller/ThirdYear');
const fourthYear = require('./controller/FourthYear');
const router = express.Router();


router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser', controller.calculateGPA);
router.post('/createUser', routers.register);
router.post('/login', routers.login);


router.put('/secondyearfirst', secondYear.secondyearfirst);
router.put('/secondyearsecond', secondYear.secondyearsecond);
router.put('/thirdyearfirst', thirdYear.thirdyearfirst);
router.put('/thirdyearsecond', thirdYear.thirdyearsecond);
router.put('/fourthyearfirst', fourthYear.fourthyearfirst);
router.put('/fourthyearsecond', fourthYear.fourthyearsecond);

router.put('/firstyearfirst', firstYear.firstyearfirst);
router.put('/firstyearsecond', firstYear.firstyearsecond);

router.get('/user',authenticateToken, verifyUser);

module.exports = router;
