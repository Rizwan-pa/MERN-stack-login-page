const express=require('express');
const mongoose=require('mongoose');
const LoginSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true
    } ,
    password: {
        type: String,
        required: true
    }
    
})
const Datamodel= mongoose.model('employeeDetail', LoginSchema);
module.exports=Datamodel;