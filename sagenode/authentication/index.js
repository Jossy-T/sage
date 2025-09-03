const express= require("express")
const app=express();
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
mongoose.connect("mongodb+srv://yoseftanu994_db_user:Tanu8517@cluster0.hqz8u2i.mongodb.net/customer?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("mongoose connected"))
app.use(express.json());


// middle ware
function auth(req,res,next){
    const token = req.headers["authorization"];
    if(!token) return res.status(400).json({error: "No token"})
        console.log(token)
        jwt.verify(token,"jossy12345",(err,decode)=>{
            console.log(err)
    if(err) return res.status(403).send("unauthorized")
        console.log(decode)
        req.user=decode
        next()
    })

}
function authorizeRole(requiredRole){
    return(req,res,next)=>{
        if(req.user.role !== requiredRole)
            return res.status(403).json({message:"forbidden for users"})
        next();
    }
}

const userschema= new mongoose.Schema({
    name:{type:String ,required:true},
    phoneNumber:{type:Number,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    balance:{type:Number, default:0},
    role:{type:String, enum:["user","Admin"],default:"user"}
})
const userModel= mongoose.model("user",userschema)

// for registration
app.post ("/register",async(req,res)=>{
    const{name,phoneNumber,email,password,role}=req.body
    // to hide the real password of the user
    const hashPassword= await bcrypt.hash(password,10)
    const user=new userModel({name,phoneNumber,email,password:hashPassword,role:role||"user"}) 
    await user.save()
    res.send("registered successfully")
})

app.post ("/login",async(req,res)=>{
    const{phoneNumber,password}=req.body
    const user= await userModel.findOne({phoneNumber}) 

    if(!user) return res.status(404).json({message:"user not found"})
        console.log(user)
    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(403).json({message:"incorrect phonenumber or password"})
        delete user.password
        const token= jwt.sign({id:user.id, name:user.name,phoneNumber:user.phoneNumber},"jossy12345")
        return res.json({name:user.name,phoneNumber:user.phoneNumber,token:token})

})

app.get("/showBooks",auth,async(req,res)=>{
    const user= await userModel.findById(req.user.id)
    res.send("welcome"+ user.name)
})

app.get("/admin",auth,authorizeRole("admin"),async(req,res)=>{
    const users=await userModel.find()
    res.json(users)
})



app.listen(2000 , ()=>console.log("server started"))