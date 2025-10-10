const mongoose = require("mongoose")


const connectDB =async ()=>{
    try {
       await mongoose.connect()
       console.log("Database successfully connected")
    } catch (error) {
        console.log("Connected faild")
    }
}

module.exports = connectDB