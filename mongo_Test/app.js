const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kumarin2468v:yoiNxJUPvnPraaSy@vinaymondb.xqg45.mongodb.net/?retryWrites=true&w=majority&appName=vinayMondb");

const User = require('./userModel');
const { accessSync } = require('fs');

async function insert(){
   await User.create({
        name:'sanjay',
        email:'sanjay@123.com'
    })
}

insert();

http.listen(3000, function(){
    console.log('server is running');
});