const express =require("express")
const app =express()
const dotenv =require("dotenv") 
dotenv.config()
const cors = require('cors')
const apiRouter =require("./routes/api")
const connectDB = require("./config/db") //! database ko bulaya
connectDB()     //! database ko run kiye


app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

// app.options("*", cors());


app.use(express.static('public'))
app.use(express.json()) //! JSON data ko allow kiye
app.use("/api", apiRouter)
app.get("/", (req, res)=>{
    res.send("API is running...")
})
let port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server Running port ${port}`)
})