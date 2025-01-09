const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://shashikaladilini11:qwerty123@cluster0.hciqlrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to database');
    } catch (err) {
        console.error('Connection to database failed:', err);
        process.exit(1); // Exit process on connection failure
    }
};

connect();

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api', router);
