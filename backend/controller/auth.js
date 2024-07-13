const User = require('../models/UserSchema');
const Admin = require('../models/AdminSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = user => {
  return jwt.sign({ id: user._id, role: user.role, email:user.email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d' 
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

    const userData = { name, email, password: hashPassword, role, id };
    
    if (role === 'viewer') {
      user = new User(userData);
    } else if (role === 'admin') {
      user = new Admin(userData);
    }

    await user.save();
    res.status(201).json({ success: true, message: 'User successfully created' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Internal server error, please try again' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }) || await Admin.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    console.log(`Generate: ${token}`);
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({
      success: true,
      message: 'Successfully logged in',
      token,
      data: userData,
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Internal server error, please try again' });
  }
};

module.exports = {
  register,
  login,
};
