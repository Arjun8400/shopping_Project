const mongoose = require("mongoose")
require("dotenv").config()


const connectDB =async ()=>{
    try {
       await mongoose.connect(process.env.DB)
       console.log("Database successfully connected")
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
}


module.exports = connectDB