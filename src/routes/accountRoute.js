const express=require('express')
const router = express.Router();

const account_controller= require('../controllers/accountController');

router.post('/',account_controller.Account_get)
router.post('/create',account_controller.Account_create)
module.exports=router;