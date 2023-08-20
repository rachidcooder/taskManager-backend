import mongoose from "mongoose";


const schema=mongoose.Schema({
  task :{
    type : String,
    required : true
  },
  time:{
    type : String ,
    required : true 
  }
},{timestamp:true})

const Task=mongoose.model("task",schema)
export default Task ;