const mongoose = require('mongoose')
const {Schema, model} = mongoose


const userSchema = new Schema({
    userName:{type:String, require:true},
    userEmail:{type:String,require:true},
    userPass:{type:String,require:true}
})


module.exports = model("user",userSchema)