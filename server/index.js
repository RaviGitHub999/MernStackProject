const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const TodoModel=require("./Models/Person")
const app =express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/details")

app.post("/add",(req,res)=>
{
    const details=req.body.details;
    TodoModel.create({
        details:details
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.get("/get",(req,res)=>
{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
// app.delete("/delete/:id",(req,res)=>
// {
//     const {id}=req.params
//     TodoModel.findByIdAndDelete({_id:id})
//     .then(result=>res.json(result))
//     .catch(err=>res.json(err))
// })
app.listen(4000,()=>
{
    console.log('Server is Running ')
})