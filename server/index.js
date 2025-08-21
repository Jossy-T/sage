const fs=require("fs");
fs.readFile("output.pdf","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFile("output.csv","name, fathername,age",(err,data)=>{
    if(err) throw err
    console.log(data)
})


fs.writeFile("out.pdf","hello world",(err,data)=>{
    if(err) throw err
    console.log(data)
})