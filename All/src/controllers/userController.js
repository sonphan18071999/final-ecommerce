const db=require('../models/mainModel');
const mongoose=require('mongoose');

exports.userCreate=function(req, res){
    db.User.findOne({email:req.body.email}, function(err, example)
    {
        if(err) {
            res.send(err);
        }
  
        if (example)
        {
            res.send(200+"This email has already been use");
        }
        else
            {
                // "name":"son phan",
                // "email":"sonphan@gmail.com",
                // "phone":"0765147231",
                // "dob":"09-08-219",
                // "nation":"viet nam",
                // "identification":"18762031",
                // "placeReceive":"Ho Chi Minh",
                // "status":"waiting"

                const user=new db.User(
                {
                    _id: mongoose.Types.ObjectId(),
                    name:req.body.name,
                    email:req.body.email,
                    phone:req.body.phone,
                    dob:req.body.dob,
                    nation:req.body.nation,
                    identification:req.body.identification,
                    placeReceive:req.body.placeReceive,
                    status:req.body.status
                });
                    user.save(function (err){
                if(err){
                    // res.send(req.body.userName);
                    return next(err);
                }
                res.json(200)
                })
            }
    })
}