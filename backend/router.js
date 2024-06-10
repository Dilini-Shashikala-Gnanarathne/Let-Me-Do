const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.post('/deleteUser', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);
router.get('/getUser' , controller.calculateGPA);
module.exports = router;