const User = require('../models/UserSchema');

const updateSemester = async (req, res, semesterField) => {
  const { email, updates } = req.body;

  try {
    console.log('Request Body:', req.body);

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

        const existingSubject = record[semesterField].find(
          (subject) => subject.subject === subjectname
        );

        if (existingSubject) {
          existingSubject.grade = grade;
          existingSubject.gpa = gpa;
        } else {
          record[semesterField].push({ subject: subjectname, grade, gpa });
        }
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


const firstyearfirst = (req, res) => updateSemester(req, res, 'firstyearfirst');
const firstyearsecond = (req, res) => updateSemester(req, res, 'firstyearsecond');
const secondyearfirst = (req, res) => updateSemester(req, res, 'secondyearfirst');
const secondyearsecond = (req, res) => updateSemester(req, res, 'secondyearsecond');
const thirdyearfirst = (req, res) => updateSemester(req, res, 'thirdyearfirst');
const thirdyearsecond = (req, res) => updateSemester(req, res, 'thirdyearsecond');
const fourthyearfirst = (req, res) => updateSemester(req, res, 'fourthyearfirst');
const fourthyearsecond = (req, res) => updateSemester(req, res, 'fourthyearsecond');
module.exports = {
  firstyearfirst,
  firstyearsecond,
  secondyearfirst,
  secondyearsecond,
  thirdyearfirst,
  thirdyearsecond,
  fourthyearfirst,
  fourthyearsecond
};
