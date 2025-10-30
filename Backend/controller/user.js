const userCollaction = require('../models/user')
const bcrypt = require('bcrypt')
const productCollection = require('../models/product')
const quaryCollection = require('../models/quary')

const regDataController = async (req, res) => {
    try {
        const { fname, email, pass } = req.body

        // ! sabhi field require ke liye
        if (!fname || !email || !pass) {
            return res.status(400).json({ message: 'All fields are required.' })
        }


        // ! email check karna ki o phale se bana hai ya nahi
        const emailExist = await userCollaction.findOne({ userEmail: email })
        if (emailExist) {
            return res.status(400).json({ message: 'Email already Ragister.' })
        }


        const hashPass = await bcrypt.hash(pass, 10)

        // ! model me save karne ke liye start
        const record = new userCollaction({
            userName: fname,                    //!Model field
            userEmail: email,
            userPass: hashPass
        })
        await record.save()
        res.status(200).json({ message: "Successfully Ragister" })
        // ! model me save karne ke liye end
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }

}


const loginDataController = async (req, res) => {
    try {
        const { loginEmail, loginPass } = req.body

        //!check email 
        const userCheck = await userCollaction.findOne({ userEmail: loginEmail })

        if (!userCheck) {
            return res.status(400).json({ message: "User Not found" })
        }


        //! ckech password 
        const matchPass = await bcrypt.compare(loginPass, userCheck.userPass)
        if (!matchPass) {
            return res.status(400).json({ message: "Invailid credentials." })
        }

        res.status(200).json({ message: "Successfully login" })


    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}


const userProductController = async (req, res) => {
    try {
        const record = await productCollection.find({ productStatus: "In-Stock" })
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const userQuaryController = async (req, res) => {
    try {
        const { userName, userEmail, userQuary } = req.body
        const record = new quaryCollection({
            Name: userName,
            Email: userEmail,
            Quary: userQuary,
        })
        await record.save()
        res.status(200).json({message:"Successfully submit your query."})
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}


module.exports = {
    regDataController,
    loginDataController,
    userProductController,
    userQuaryController
}