const router = require('express').Router();
const testController = require('../controllers/testController')

//TEST ROUTER
router.get('/test',async(req,res)=>{
    console.log('test router being called')
})

//TEST CONTROLLER
router.post('/testController',testController.testController)

module.exports = router