const User = require('../models/user');


const registerView = async (req, res) => {

     try {
        res.render('register');
     } catch (error) {
        console.log(error.message);
        
     }
}

const register = async (req, res) => {
    try {
        const { email, password , name } = req.body;
        // Check if the user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        // Create a new user
        const newUser = new User({ email, password,name });
        await newUser.save();
        res.render('page_integration');
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Check password
        if (user.password !== password) {
          return res.status(401).json({ message: 'Invalid password' });
        }
         res.render('page_integration');
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


module.exports = {
    register,
    registerView,
    login,
}
