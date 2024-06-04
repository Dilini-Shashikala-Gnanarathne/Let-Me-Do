const express = require('express');
const app = express();
const cors = require('cors');
const port =3001;
const host= '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.urlencoded());

const uri= 'mongodb+srv://shashikaladilini11:shashikalanisal@cluster0.s5cehoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect= async () =>{
    try{
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to database');
      
    }catch(err){
        console.log(err);
    }
}

const server=app.listen(port, host, () => {
    console.log(`Server is running on ${server.address().port}`);
});

connect();