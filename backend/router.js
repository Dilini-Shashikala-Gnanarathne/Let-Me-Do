const express = require('express');
const {getAllUsers,createUser,deleteUser,updateUser} = require('controller');
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/userscreate', createUser);
router.get('/usersdelete', deleteUser);
router.get('/usersupdate', updateUser);