 import Task from "../modle/Task.js"
 

export const getTasks=async(req,res)=>{ 
 
   try{
    const tasks =await Task.find();
     res.status(200).json({tasks});
   }catch(err){
     console.log(err);
   }

}
export const AddTask=async(req,res)=>{

 const {task,time}=req.body;
  try{
      const taskTopic =await Task.create({
        task,time
      })

     res.status(200).json({taskTopic});

   }catch(err){
     console.log(err);
   }

}

 export const DeleteTask=async(req,res)=>{
  const id=req.params.id ;

    try{
    const taskdelete =await Task.findByIdAndRemove(id);
     res.status(200).json({taskdelete});
   }catch(err){
     console.log(err);
   }
}

 export const UpdateTask=async(req,res)=>{
  const id=req.params.id;
  const{task,time}=req.body
    try{
    const taskUpdate =await Task.updateOne({_id:id},{task,time});
     res.status(200).json({taskUpdate});
   }catch(err){
     console.log(err);
   }
}
  

