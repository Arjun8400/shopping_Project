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

const deleteProductController = async (req, res) => {
    try {
        const productId = req.params.abc
        await productcallection.findOneAndDelete(productId)
        res.status(200).json({ message: "Successfully Delete Product" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}

const editProductDataController = async (req, res) => {
    try {
        const productId = req.params.abc
        const record = await productcallection.findById(productId)
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}

const productUpdateController = async (req, res) => {
    try {
        const { Pname, Pprice, Cat, Pstatus } = req.body
        const productId = req.params.abc
        await productcallection.findByIdAndUpdate(productId, {
            productName: Pname,
            productPrice: Pprice,
            productCategory: Cat,
            productStatus: Pstatus
        })
        
        res.status(200).json({message:"SuccessFully Update."})

    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }

}

module.exports = {
    addAdminProductController,
    getAllProductController,
    deleteProductController,
    editProductDataController,
    productUpdateController
}