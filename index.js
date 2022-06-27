const express = require("express");
const connectDB = require('./config/db');
const cors = require('cors')
const Student = require("./model/student")

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/',(req,res)=>{
            console.log("data")
    res.send("Default get request");
})
app.get('/students',async (req,res)=>{
   await Student.find().then((data)=>{
                 res.send(data);
            })
})
app.get('/students/:id',async (req,res)=>{
   await Student.findById(req.params.id).exec().then((data)=>{
                 res.send(data);
            })
})

app.post('/students',async (req,res)=>{
    let std = await new Student({
        name:req.body.name,
        class:req.body.class,
        roll:req.body.roll,
    })
    std.save().then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err);
    })
})
app.put('/students',async (req,res)=>{
    let id=req.body.id;
     let  name = req.body.name;
     let classN =req.body.class;
     let roll =req.body.roll;
   
    try{
        await Student.findById(id,(err,result)=>{
            result.name = name;
            result.class = classN;
            result.roll = roll;
        })
        result.save();

    }catch(err){
        console.log(err)
    }
})
app.delete('/students/:id',async(req,res)=>{
   await Student.findByIdAndDelete(req.params.id).exec().then((response)=>{
        res.send(response)
    })
})
app.listen(5000,()=>{
    console.log("Server port 5000");
})
