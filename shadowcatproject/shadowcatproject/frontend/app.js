const express = require("express")
const collection1 = require("./mongo")
const cors = require("cors")
const collection2 = require("./mongo2")
const collection3 = require("./mongo3")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection1.findOne({email:email})

        if(check){
            res.json("exist")

        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/csignup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection1.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection1.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/sathvik",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection2.findOne({email:email})

        if(check){
            res.json("exist")

        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/ssignup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection2.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection2.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/cart",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection3.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection3.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})