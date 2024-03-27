const express= require('express');
const mongoose= require('mongoose');
const app= express();
const cors= require('cors');
const Datamodel=require('./model/blog.js');
const connect=async ()=>{
    await mongoose.connect('mongodb+srv://rizwanpa2020:rizwan000@cluster0.wdnliua.mongodb.net/Login');
    console.log(`the databse is connected to ${mongoose.connection.host}`)
}
connect();
app.use(express.json());
app.use(cors());
app.post('/check',(req,res)=>{
    const {email,password} = req.body;
    Datamodel.findOne({
        email: email
    })
    .then((result)=>{
         console.log(result)
        if(result){
            if(result.password === password){
                res.json('success')
            }
            else{
                res.json('incorrect password')
            }
        }
        else{
            res.json('no such record')
        }
    })
})
app.post('/register',(req,res)=>{
    const {email,password}=req.body;
    const data=new Datamodel({
          email: email,
          password: password
    })
    data.save();
})


app.listen(3000,(err)=>{
    if(err){
      console.log('ssomething went wrong')
    }
    else{
      console.log('listening on port 3000');
    }
  })
