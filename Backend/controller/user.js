const userCollaction = require('../models/user')
const bcrypt = require('bcrypt')

const regDataController = async (req, res) => {
    try {
        const { fname, email, pass } = req.body

        // ! sabhi field require ke liye
        if(!fname || !email || !pass){
           return res.status(400).json({message:'All fields are required.'})
        }


        // ! email check karna ki o phale se bana hai ya nahi
        const emailExist =await userCollaction.findOne({userEmail:email})
        if(emailExist){
            return res.status(400).json({message:'Email already Ragister.'})
        }


        const hashPass = await bcrypt.hash(pass, 10)

        // ! model me save karne ke liye start
        const record = new userCollaction({
            userName: fname,                    //!Model field
            userEmail: email,
            userPass: hashPass
        })
        await record.save()
        res.status(200).json({message:"Successfully Ragister"})
        // ! model me save karne ke liye end
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }

}



module.exports = {
    regDataController
}