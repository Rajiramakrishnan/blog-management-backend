const mongoose=require("mongoose")
async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/myBlogManagement")
        console.log("connected to db");
    }catch (err) {
        console.log('db er', err)
    }
    
}
module.exports=connectDB;