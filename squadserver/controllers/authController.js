const jwt = require('jsonwebtoken')
const UserSchema = require("../schemas/userSchema")

//Function to delete a user from the user collection
const createUser = async (req, res) => {

    console.log('createUser being called', req.body)
    await UserSchema.create(req.body).then((userRes) => {
        console.log('user created successfully')
        res.status(200).json('User created successfully')
    }).catch((err) => {
        console.log('something wrong happened', err.message)
        res.status(422).json({message : err})
    })
}

module.exports.createUser = createUser

// Function to signin an user

const signin = async (req, res) => {
    await UserSchema.findById(req.body.userId).then((userRes) => {
        console.log('user created successfully', userRes)

        delete userRes.password;
        const userToken = jwt.sign({
            id: userRes._id,
            name: userRes.name,
            email: userRes.email,
            phno: userRes.phno,
            role: userRes.role
        }, process.env.JWT_KEY, { expiresIn: "1d" })

        const userResponse = {
            userDetails: userRes,
            token:userToken
        }
        
        res.status(200).json(userResponse)
    }).catch((err) => {
        console.log('something wrong happened', err.message)
    })
}

module.exports.signin = signin

