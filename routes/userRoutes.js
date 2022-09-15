
const express=require("express");
const router=express.Router();
const {registerUser,LoginUser,getMe}=require('../controllers/userController')

router.post('/',registerUser)
router.post('/login',LoginUser)
router.post('/me',getMe)

module.exports=router