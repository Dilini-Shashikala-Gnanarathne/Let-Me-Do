const User = require('../models/UserSchema');

const getSemester = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

const getfirstyearfirst = async (req, res) => {
  try {
    const email = req.body.email; // Assuming the email is sent in the request body
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    const user = await getSemester(email);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getfirstyearfirst,
};
