const express= require("express")

const app=express();
app.use(express.json());

const cors=require("cors")
app.use(cors());

// list of pc and their spec
let pcs=[{id:1, 

    name:"ASUS Vivobook16", 

    type:"gaming",
    processor:"AMD Ryzen 5 5625U",
    Ram:"40GB",iGPU:"AMD radeno RX vega 7 (R4000/5000, 15W)", 
    price:"$2000"},
    

{id:2,  name:"HP omen",  type:"gaming",
    processor:"RTX nividia graphics",
    Ram:"32GB",SSD:"1TB",iGPU:"AMD radeno RX vega 7 (R4000/5000, 15W)", 
    price:"$2000"}]
    
    


//all pc info
app.get("/pc",(req,res)=>{res.status(200).json (pcs)});
app.get("/pc/:id",(req,res)=>{
    const eachPc=pcs.find((eachPc)=>eachPc.id==req.params.id)
    if(eachPc){res.status(200).json(eachPc)}
    else{res.status(404).json({message:"not found"})}
})

// to add new pc (post)
app.post("/pcs/items",(req,res)=>{
    const newPc={
        id: pcs.length+1,
        name: req.body.name,
        spec: req.body.spec,
        processor: req.body.processor,
        Ram: req.body.Ram,
        iGPU: req.body.iGPU,
        price: req.body.price
    }
    pcs.push(newPc);
    res.status(200).json(newPc);
});

// edit (put)
app.put("/pc/:id",(req,res)=>{
    const pcItem=pcs.find(i=>i.id===parseInt(req.params.id));
    pcItem.name=req.body.name || pcItem.name,
    pcItem.price=req.body.price || pcItem.price,
    pcItem.spec=req.body.spec || pcItem.spec,
    res.json(pcItem)
});

app.delete("/pc/:id",(req,res)=>{
    pcs = pcs.filter(i=>i.id!==parseInt(req.params.id))
    res.json({message:"item deleted"})
});
//listen port
app.listen(8000,()=>{
    console.log("API running on http://localhost:8000")
});