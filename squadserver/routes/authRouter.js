const router = require('express').Router();
const authController = require('../controllers/authController')

//Route used to create an user
router.post('/createUser',authController.createUser)

//Route used to signin an user
router.post('/signin',authController.signin)

module.exports = router