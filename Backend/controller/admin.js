const productcallection = require('../models/product')

const addAdminProductController = async (req, res) => {
    try {
        const { Pname, Price, Cat } = req.body

        if (!Pname || !Price || !Cat) {
            return res.status(400).json({ message: "All fields required." })
        }

        const record = new productcallection({
            productName: Pname,
            productPrice: Price,
            productCategory: Cat,
        })

        await record.save();

        res.status(200).json({ message: "Successfully Insert Product." })

    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}


const getAllProductController = async (req, res) => {
    try {
        const record = await productcallection.find()
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = {
    addAdminProductController,
    getAllProductController
}