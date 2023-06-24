const router = require('express').Router();
// const passport = require("passport");
const testController = require('../controllers/testController');
const { checkRole } = require('../middlewares/roleVerification');

//TEST ROUTER
router.get('/test',async(req,res)=>{
    console.log('test router being called')
})

//TEST CONTROLLER
router.post('/testController',testController.testController)

// TEST PASSPORT
router.post('/testPassportMember',passport.authenticate('jwt', { session: false }),checkRole('Member'),testController.passportMemberCheck)

// TEST PASSPORT
router.post('/testPassportAdmin',passport.authenticate('jwt', { session: false }),checkRole('Admin'),testController.passportAdminCheck)

module.exports = router