const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Check if the environment variable is loaded correctly
console.log('MongoDB URI:', process.env.Mongo_URL);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err);
        process.exit(1); 
    }
};

const startServer = async () => {
    await connectDB(); 
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

app.use('/api', router);

startServer();
