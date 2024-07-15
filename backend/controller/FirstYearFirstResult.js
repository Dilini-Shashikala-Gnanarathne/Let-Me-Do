const User = require('../models/UserSchema');

const getSemester = async (req, res) => {
  const { email } = req.body; // Use req.body for POST requests

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email });
console.log(`hi dilini${record}`);
console.log(5);
    if (record) {
      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: record,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Record not found',
      });
    }

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error', err: err.message });
  }
};

const getfirstyearfirst = (req, res) => getSemester(req, res);

module.exports = {
  getfirstyearfirst,
};
