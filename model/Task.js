const mongoose=require("mongoose")
const Schema=mongoose.Schema

const taskScheema=new Schema({
    name:String,
    description:String,
    location: String,
    userId: String
});
module.exports=mongoose.model("Task",taskScheema);