const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name : String,
    age : Number,
    schools :Array

})

const UserModel  = mongoose.model("students",UserSchema)


module.exports= UserModel