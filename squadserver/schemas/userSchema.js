const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "UserName is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
    },
    phno: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
        ]
    },
    role: {
        type: String,
        default: 'Member',
    }
}, { timestamps: true }
)

UserSchema.pre('save', async function (next) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(this.password, salt);
  
      // Replace the plain password with the hashed password
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

  UserSchema.methods.comparePassword = async function (password) {
    try {
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, this.password);
      return isMatch;
    } catch (error) {
      throw error;
    }
  };

module.exports = mongoose.model('Users', UserSchema)