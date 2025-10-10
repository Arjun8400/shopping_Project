const express =require("express")
const app =express()
const dotenv =require("dotenv") 
dotenv.config()
const apiRouter =require("./routes/api")
const connectDB = require("./config/db") //! database ko bulaya
connectDB()     //! database ko run kiye



app.use(express.json()) //! JSON data ko allow kiye
app.use("/api", apiRouter)
let port = process.env.port || 5000
app.listen(port, ()=>{
    console.log(`Server Running port ${port}`)
})