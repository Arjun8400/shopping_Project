const mongoose = require("mongoose");

const {Schema, model} = mongoose

const quarySchema = new Schema({
    Name: {type:String, require:true},
    Email:{type:String, require:true},
    Quary:{type:String, require:true},
    quarystatus:{type:String, default:"Unread"}

})

module.exports = model("quary", quarySchema)