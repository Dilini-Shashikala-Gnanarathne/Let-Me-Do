const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const router = express.Router();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  try {
    console.log('Token:', token); // Log the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_key);
    console.log('Decoded Token:', decoded); // Log the decoded token details

    const foundUser = await User.findOne({ email: decoded.email });
    if (!foundUser) {
      return res.sendStatus(404); // User not found
    }

    req.user = foundUser;
    console.log('Authenticated User:', req.user.email); // Debugging line
    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    res.status(403).json({ success: false, message: 'Forbidden', error: error.message });
  }
};



// Controller for verifying user
const verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    console.log(1);
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Exporting the middleware and controller
module.exports = {
  authenticateToken,
  verifyUser
};
