const jwt = require('jsonwebtoken')
const UserSchema = require("../schemas/userSchema")
const CryptoJS = require('crypto-js');
const { STATUS_CODES } = require('../services/statusCodeService');
const { CUSTOM_ERRORS } = require('../services/errorService')

//Function to delete a user from the user collection
const createUser = async (req, res) => {
    await UserSchema.create(req.body).then(() => {
        res.status(STATUS_CODES.OK).json(CUSTOM_ERRORS.USER_CREATED)
    }).catch((err) => {
        res.status(STATUS_CODES.UNPROCESSABLE_ENTITY).json({ message: err })
    })
}

module.exports.createUser = createUser

// Function to signin an user
const signin = async (req, res) => {

    try {
        const { mail, password } = req.body;

        const decryptedPassword = CryptoJS.AES.decrypt(password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8);

        let userInfo = await UserSchema.findOne({ email: mail })

        if (userInfo) {
            const isPasswordMatch = await userInfo.comparePassword(decryptedPassword);
            userInfo = userInfo.toJSON();
            if (isPasswordMatch) {
                delete userInfo.password;
                // Generating the JWT Token for authorization
                const userToken = jwt.sign({
                    id: userInfo._id,
                    name: userInfo.name,
                    email: userInfo.email,
                    phno: userInfo.phno,
                    role: userInfo.role
                }, process.env.JWT_KEY, { expiresIn: "1d" })
                const userResponse = {
                    userDetails: userInfo,
                    token: userToken
                }

                res.status(STATUS_CODES.OK).json(userResponse)
            }
            else {
                res.status(STATUS_CODES.NOT_ACCEPTABLE).json(CUSTOM_ERRORS.PASSPORT_MISMATCH)
            }
        }
        else {
            res.status(STATUS_CODES.NOT_ACCEPTABLE).json(CUSTOM_ERRORS.USER_NOT_FOUND)
        }
    }

    catch (err) {
        console.log('Error in signin', err);
        res.status(STATUS_CODES.UNPROCESSABLE_ENTITY).json(err)
    }

}

module.exports.signin = signin

