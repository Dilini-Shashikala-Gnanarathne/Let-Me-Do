const User = require('../models/UserSchema');

const seconyearsecond = async (req, res) => {
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

        const semesterSubjects = [
            'IS1001', 'IS1002', 'IS1003', 'IS1004', 'IS1005', 'IS1006', 'IS1007', 'IS1008', 'IS1009',
        ];

        if (record) {
            if (!record.seconyearsecond) {
                record.seconyearsecond = [];
            }

            for (const update of updates) {
                const {  subjectname, grade, gpa } = update;

                

                record.seconyearsecond.push({ subject: subjectname, grade, gpa });
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
        return res.status(500).json({ success: false, err: err.message });
    }
};

module.exports = {
    seconyearsecond,
};
