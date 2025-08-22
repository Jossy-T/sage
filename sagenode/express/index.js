const express= require("express")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world from express !!")

});


//parameter
app.get("/user/:id",(req,res)=>{
    const user=req.params.id
    res.send("hello: "+user)
    
});

//query
app.get("/search",(req,res)=>{
    res.send("param: "+req.query.username+ "<br/>"+"password: "+req.query.password)
    
});

//body : we can't do anything with out postman
//use post to hide from user and use postman app
app.get("/users",(req,res)=>{
    res.send("username:  "+req.body?.username + "<br/>"+"password:  "+req.body?.password)
    
});






app.listen(4000,()=>{
    console.log("worked")
});
