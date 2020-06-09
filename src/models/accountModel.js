const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let AccountSchema=new Schema({
    userName:{type:String,required:true,max:100},
    password:{type: String ,required:true},
    token:{type:String},
    twoFactor:{type:Number},
    timeOut:{type:Number, default :300},
    userId:{type:String},
    isAdmin:{type:String}
})


module.exports=mongoose.model('Account',AccountSchema);

