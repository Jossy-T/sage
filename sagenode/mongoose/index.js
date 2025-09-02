const express= require("express")

const app=express();
app.use(express.json());
// const cors=require("cors")
// app.use(cors());

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://yoseftanu994_db_user:Tanu8517@cluster0.hqz8u2i.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("mongoose worked"))
.catch((err)=>console.log(err))
const bookschemas= new mongoose.Schema({
    title:{type: String , required:true},
    author:{type: String, required:true},
    price:{type:Number, min:0, required:true}

})
const BookModel= mongoose.model("Book",bookschemas)

// app.get("/pc",(req,res)=>{res.status(200).json (pcs)});

app.get("/book",async(req,res)=>{
   const book=await BookModel.find()
   res.status(200).json (book)
})

app.get("/book/:id", async(req,res)=>{
    const book= await BookModel.findById(req.params.id) 
    res.status(200).json(book)
})

app.post("/book",async(req,res)=>{
    const book= new BookModel(req.body)
    await book.save()
    res.status(200).json(book)
});


app.put("/book/:id",async(req,res)=>{
   const book= await BookModel.updateOne({_id:req.params.id},req.body)
   res.status(200).json(book)
});

app.delete("/book/:id", async(req,res)=>{
   const deletedBook= await BookModel.deleteOne({_id:req.params.id},req.body)
   res.status(200).json(deletedBook)
});

//listen port
app.listen(7000,()=>{
    console.log("API running on http://localhost:7000")
});