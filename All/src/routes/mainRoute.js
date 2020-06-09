const express=require('express')
const router = express.Router();

const account_controller= require('../controllers/accountController');
const user_controller=require('../controllers/userController');


//Acount login
router.post('/',account_controller.Account_get)
//Tạo account mới
router.post('/create',account_controller.Account_create)


//User information
router.post('/user',user_controller.userCreate)
module.exports=router;