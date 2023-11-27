const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/databse")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection1 = mongoose.model("collection1",newSchema)

module.exports=collection1