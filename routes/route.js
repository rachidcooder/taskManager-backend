 import express from "express";
import  {getTasks
  ,AddTask
  ,DeleteTask,
  UpdateTask
    } from "../controllers/taskControllers.js"

 const route=express.Router();

  
   route.get("/",getTasks);
   route.post("/",AddTask);
   route.delete("/delete/:id",DeleteTask);
   route.put("/update/:id",UpdateTask);

 export default route;