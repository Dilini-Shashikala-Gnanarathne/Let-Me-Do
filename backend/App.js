const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.get('/users', (req,res) => {
    controller.getAllUsers(users=>{
        res.send(users);  
})});
app.get('/user', (req,res) => {
    const id=req.query.id;
    controller.getUser(id,user=>{
        res.send(user);  
})
});
module.exports =app;