const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/users', controller.getAllUsers);
router.post('/create', controller.addUser);
router.delete('/usersdelete', controller.deleteUser);
router.put('/usersupdate', controller.updateOneUser);

module.exports = router;