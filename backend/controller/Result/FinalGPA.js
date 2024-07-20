const User = require('../../models/UserSchema');

const finalGPA = async (req, res) => {
  const { email } = req.body;

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email });
    if (record) {
      const totalValue = parseFloat(record.firstyearfirstGPA || 0)
      + parseFloat(record.firstyearsecondGPA || 0)
      + parseFloat(record.secondyearfirstGPA || 0)
      + parseFloat(record.secondyearsecondGPA || 0)
      + parseFloat(record.thirdyearfirstGPA || 0)
      + parseFloat(record.thirdyearsecondGPA || 0)
      + parseFloat(record.fourthyearfirstGPA || 0)
      + parseFloat(record.fourthyearsecondGPA || 0);
                        
      const finalgpa = totalValue / 8;

      record.finalGPA = parseFloat(finalgpa.toFixed(2));

      await record.save();

      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: record.finalGPA,
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

const finalGPACal = (req, res) => finalGPA(req, res);

module.exports = {
  finalGPACal,
};
