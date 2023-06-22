const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "email is required"]
    },
    email: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "Email already exists"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
    },
    phno: {
        type: Number,
        required: true,
        min: [10, 'Invalid phone number'],
        max: [10, 'Invalid phone number'],
        match: [/^\d{10}/, 'Invalid phone number']
    },
    password: {
        type: String,
        required: [true, "password is required"],
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

module.exports = mongoose.model('Users', UserSchema)