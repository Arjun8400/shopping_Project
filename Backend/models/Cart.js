const mongoose = require('mongoose')

const {Schema, model} = mongoose

const CartSchema = new Schema({
    cartitems: [], 
    totalPrice:Number, 
    totalQuantity: Number
})

module.exports = model("cart", CartSchema )