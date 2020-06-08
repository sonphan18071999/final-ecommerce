const Account=require('../models/accountModel');
const mongoose=require('mongoose');
const bcrypt = require('bcrypt');


exports.Account_create=function(req,res,next){
    //post-- http://localhost:3000/account/create
    //Kiểm tra tài khoản trùng, nếu không trùng thì tạo.
    Account.findOne({userName:req.body.userName}, function(err, example)
    {
        if(err) console.log(err);
  
        if (example)
        {
            res.send("This account has already been use");
        }
        else
            {
                

                const account=new Account(
                {
                    _id: mongoose.Types.ObjectId(),
                    userName: req.body.userName,
                    password: req.body.password,
                    token: req.body.token,
                    twoFactor: req.body.twoFactor,
                    userId  : req.body.userId,
                    isAdmin : req.body.isAdmin
                });
                    account.save(function (err){
                if(err){
                    // res.send(req.body.userName);
                    return next(err);
                }
                res.send('Account created successfully')
                })
            }
    })
};

exports.Account_get=function(req, res) {
    Account.findOne({ userName: req.body.userName, password:req.body.password })
		.then(user => {
			if (!user) {
                //khong tim duoc user
				return res.sendStatus(404);
			}
            else{
                //tra ve http 200
                // res.json(user);
                res.json(200);         
               }
			res.sendStatus(204);
		})
		.catch(err => {
			res.status(422).send(err.errors);
		});
  }
