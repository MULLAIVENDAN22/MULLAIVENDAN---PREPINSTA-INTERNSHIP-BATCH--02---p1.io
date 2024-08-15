const mongoose=require('mongoose')

const signupschema= new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const signupRecord = new mongoose.model('signuprecord',signupschema)
module.exports=signupRecord;