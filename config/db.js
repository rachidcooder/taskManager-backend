import mongoose from "mongoose";


const ConnectDB=async ()=>{
try{
  const URL=process.env.MONGO_URL;
  
  await mongoose.connect(URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    }
).then(()=>{  console.log("database connected ...");
})}
catch(err){console.log(err);
}}

export default ConnectDB;


