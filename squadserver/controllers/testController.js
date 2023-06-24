
//Function to test a controller call
const testController = async (req, res) => {
    // console.log('testController being called', req.headers, req.rawHeaders)
    res.status(200).json('TestController called')
}

module.exports.testController = testController

//Function to test authentication using passport
const passportMemberCheck = async (req, res) => {
    console.log('passportMemberCheck Success', req.user)
    res.status(200).json('Member passport verified')
}

module.exports.passportMemberCheck = passportMemberCheck

//Function to test authentication using passport
const passportAdminCheck = async (req, res) => {
    console.log('passportAdminCheck Success', req.user)
    res.status(200).json('Admin passport verified')
}

module.exports.passportAdminCheck = passportAdminCheck

