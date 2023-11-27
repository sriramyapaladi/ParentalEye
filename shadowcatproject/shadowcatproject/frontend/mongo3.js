const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/databse")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: String,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String 
})

const collection3 = mongoose.model("collection3",newSchema)

module.exports=collection3