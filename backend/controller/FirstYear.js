const User = require('../models/UserSchema');

// Helper function to update semester records
const updateSemester = async (req, res, semesterField) => {
  const { updates } = req.body;
  const email = req.user.email; // Accessing logged-in user's email

  try {
    console.log('Request Body:', req.body);
    console.log('User Email:', email);
    if (!Array.isArray(updates)) {
      return res.status(400).json({
        success: false,
        message: 'Updates must be an array',
      });
    }

    let record = await User.findOne({ email });

    if (record) {
      if (!record[semesterField]) {
        record[semesterField] = [];
      }

      for (const update of updates) {
        const { subjectname, grade, gpa } = update;
        record[semesterField].push({ subject: subjectname, grade, gpa });
      }

      await record.save();

      return res.status(200).json({
        success: true,
        message: 'Successfully updated',
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

// Controller functions
const firstyearfirst = (req, res) => updateSemester(req, res, 'firstyearfirst');
const firstyearsecond = (req, res) => updateSemester(req, res, 'firstyearsecond');

module.exports = {
  firstyearfirst,
  firstyearsecond,
};
