const express = require('express');
const router = express.Router();

const controller = require('./controller');
const routers= require('./controller/auth');
const first= require('./controller/FirstYear');
const second= require('./controller/SecondYear');
const third= require('./controller/ThirdYear');
router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser' , controller.calculateGPA);
router.post('/createUser', routers.register);
router.post('/login', routers.login);
router.put('/firstyearfirst',first.firstyearfirst);
router.put('/firstyearsecond',first.firstyearsecond);
router.put('/secondyearfirst',second.secondyearfirst);
router.put('/secondyearsecond',second.secondyearsecond);
router.put('/thirdyearfirst',third.thirdyearfirst);
router.put('/thirdyearsecond',third.thirdyearsecond);

module.exports = router;