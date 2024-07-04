const express = require('express');
const router = express.Router();

const controller = require('./controller');
const routers= require('./controller/auth')

router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser' , controller.calculateGPA);
router.post('/createUser', routers.register);
router.post('/login', routers.login);

module.exports = router;