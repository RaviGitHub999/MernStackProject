const mongoose=require("mongoose")
// const TodoSchema=new mongoose.Schema({
//     task:String
// })
const TodoSchema = new mongoose.Schema({
  details: { name: String, email: String,mobileNo:String,rollNo:String,Studentclass:String ,image:String,gender:String},
  });
const TodoModel=mongoose.model("studentData",TodoSchema)
module.exports=TodoModel