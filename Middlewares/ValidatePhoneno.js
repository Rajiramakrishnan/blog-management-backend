const validatePhoneno=(req,res,next)=>{
    const {PhoneNumber}=req.body;
    try{
        if(PhoneNumber.length<10){
            return res.status(400).json({message:"Phone number must contain 10digits"})
        }
        next();
    }
    catch(err){
        return res.status(500).json({message:"error on signup",error:err.message})
    }
}
module.exports={validatePhoneno}