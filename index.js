const express=require("express");
const app=express();
const port=8000;
const UserRouter=require("./Routes/User.routes.js")
// const BlogRouter=require("./Routes/User.routes.js")
const connectDB=require("./DB/ConnectDB.js")
// const blogRouter = require('./Routes/Blog.routes.js');
const BlogRouter = require("./Routes/Blog.routes.js");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/user",UserRouter)
app.use("/blog",BlogRouter)
connectDB().then(()=>{
   app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
    
   })
    
})
.catch((err)=>{
    console.log("err",err);
    
})