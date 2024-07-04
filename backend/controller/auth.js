const User = require('../models/UserSchema'); // Adjust the path as per your project structure
const Admin = require('../models/AdminSchema'); // Adjust the path as per your project structure
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { email, password, name, role,id } = req.body;

    try {
        // Check if user already exists based on role
        let user = null;
        if (role === 'viewer') {
            user = await User.findOne({ email });
        } else if (role === 'admin') {
            user = await Admin.findOne({ email });
        }

        // If user already exists, return error response
        if (user) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user instance based on role
        if (role === 'viewer') {
            user = new User({
                name,
                email,
                password: hashPassword,
                role,id
            });
        } else if (role === 'admin') {
            user = new Admin({
                name,
                email,
                password: hashPassword,
                role,id
            });
        }

        // Save user to database
        await user.save();

        // Return success response
        res.status(200).json({ success: true, message: 'User successfully created' });

    } catch (err) {
        // Handle errors
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Internal server error, Please try again' });
    }
};

module.exports = {
    register
};
