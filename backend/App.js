const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
const verify = require('./auth/verifyToken');

app.use(cors());
app.use(express.urlencoded({
    extended: true,}
));
app.use(express.json());
app.get('/users', (req,res) => {
    controller.getAllUsers((req,res,next)=>{
        res.send();}
    )
});
app.put('/usersupdate', (req,res) => {
    controller.updateOneUser(req.body,(callbak)=>{
        res.send(callbak);}
    )
});

app.post('/create', (req,res) => {
    controller.addUser(req.body,(callbak)=>{
        res.send();}
    )
});
app.post('/deleteUser', (req,res) => {
    controller.deleteUser(req.body,(callbak)=>{
        res.send(callbak);}
    )
});

app.get('/getUser', (req,res) => {
    controller.deleteUser(req.body,(callbak)=>{
        res.send(callbak);}
    )
});




module.exports =app;