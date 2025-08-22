const fs=require("fs");
fs.readFile("output.pdf","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFile("output.csv","name, fathername,age",(err)=>{
    if(err) throw err
    console.log("my")
})


fs.writeFile("out.pdf","hello world2",(err)=>{
    if(err) throw err
    console.log("yosef")
})

fs.readFile("out.pdf","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})


fs.readFile("output.csv","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})