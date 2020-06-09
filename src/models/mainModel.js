const mongoose=require('mongoose');
const Schema=mongoose.Schema;


//Tài khoản đăng nhập
let AccountSchema=new Schema({
    userName:{type:String,required:true,max:100},
    password:{type: String ,required:true},
    token:{type:String},
    twoFactor:{type:Number},
    timeOut:{type:Number, default :300},
    userId:{type:String},
    isAdmin:{type:String,default:"normal"}
})

//Thông tin người dùng
let UserSchema=new Schema({
    name:{type:String,required:true,default:null},
    email:{type:String,required:true,default:null},
    phone:{type:Number,required:true,default:null},
    dob:{type:Date,required:true,default:null},
    nation:{type:String,required:true,default:null},
    identification:{type:String,required:true,default:null},
    placeReceive:{type:String,default:null},
    status:{type:String,default:"waiting"},
    cardNumber:{type:String, default:null},
    savingNumber:{type:String,default:null},
    accountName:{type:String,default:null}
})


var Account = mongoose.model('Account', AccountSchema);
module.exports = Account;

var User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports = {
    Account: Account,
    User:User   
};
// module.exports=mongoose.model('User',UserSchema);

// module.exports=mongoose.model('Account',AccountSchema);


