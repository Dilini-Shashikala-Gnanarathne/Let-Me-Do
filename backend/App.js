const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
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



// app.get('/user', (req,res) => {
//     const id=req.query.id;
//     controller.getUser(id,user=>{
//         res.send(user);  
// })
// });



module.exports =app;