const express = require('express');
const router = express.Router();

const controller = require('./controller');
const routers= require('./controller/auth');
const first= require('./controller/firstyearfirst');
const second= require('./controller/secondyearsecond');


router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser' , controller.calculateGPA);
router.post('/createUser', routers.register);
router.post('/login', routers.login);
router.put('/firstyearfirst',first.firstyearfirst);
router.put('/firstyearsecond',second.firstyearsecond);

module.exports = router;