const mongoose = require('mongoose')

const {Schema, model} = mongoose

const productSchema = new Schema({
    productName :{
        type : String,
        require : true
    },
    productPrice :{
        type : String,
        require : true
    },
    productCategory :{
        type : String,
        require : true
    }
})

module.exports = model("product", productSchema)