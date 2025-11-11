const mongoose = require('mongoose')

const {Schema, model} = mongoose

const CartSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    cartitems: [], 
    totalPrice:Number, 
    totalQuantity: Number
})

module.exports = model("cart", CartSchema )