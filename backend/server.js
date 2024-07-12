const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use environment variable for port

app.use(cors());
app.use(express.json());

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err);
        process.exit(1); // Exit process with failure
    }
};

// Start the server
const startServer = async () => {
    await connectDB(); // Ensure DB connection before starting server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Use the router for API endpoints
app.use('/api', router);

// Start the application
startServer();
