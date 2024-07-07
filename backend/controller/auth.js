const User = require('../models/UserSchema');
const Admin = require('../models/AdminSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = process.env.JWT_SECRET_KEY || crypto.randomBytes(64).toString('hex');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, secretKey, {
    expiresIn: '15d',
  });
};

const register = async (req, res) => {
  const { email, password, name, role, id } = req.body;

  try {
    let user = null;
    if (role === 'viewer') {
      user = await User.findOne({ email });
    } else if (role === 'admin') {
      user = await Admin.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === 'viewer') {
      user = new User({
        name,
        email,
        password: hashPassword,
        role,
        id,
      });
    } else if (role === 'admin') {
      user = new Admin({
        name,
        email,
        password: hashPassword,
        role,
        id,
      });
    }

    await user.save();
    res.status(200).json({ success: true, message: 'User successfully created' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Internal server error, Please try again' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = null;
    const viewer = await User.findOne({ email });
    const admin = await Admin.findOne({ email });

    if (viewer) {
      user = viewer;
    }
    if (admin) {
      user = admin;
    }

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    const { password: pwd, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: 'Successfully logged in',
      token,
      data: { ...rest },
      role,
    });

  } catch (err) {
    console.error(err.message);
    const errorMessage = err instanceof Error ? err.message : 'Internal server error, Please try again !';
    res.status(500).json({ success: false, message: errorMessage });
  }
};
module.exports = {
  register,
  login,
};
