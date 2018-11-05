const mongoose=require("mongoose");
require("dotenv").config();
 mongoose.Promise=global.Promise;
  console.log(process.env.MONGOURI)
//  console.log(process.env.NAME)
// mongoose.connect(process.env.MONGOURI)
// mongoose.connection.once('open',()=>{
//     console.log("connected to database")
// })

mongoose.connect(process.env.MONGOURI)
mongoose.connection.once('open',()=>{
    console.log("connected to database")
})