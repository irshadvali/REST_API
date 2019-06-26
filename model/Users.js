const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userScheema=new Schema({
    name:String,
    mobileNumber:Number,
    email:String,
    adhaar:String
   
});
module.exports=mongoose.model("Users",userScheema);