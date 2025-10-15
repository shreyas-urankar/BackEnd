const Product = require('../models/productModel');

//business logic

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        if (!allProducts || allProducts.length == 0) {
            return res.json({
                message: "There is No Product."
            })
        }

        //if we have products >=1 follow this below
        return res.status(200).json({
            success: true,
            products: allProducts
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        const newProduct = new Product({ name, price, description, category });
        await newProduct.save();
        return res.status(200).json({
            product: newProduct
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        console.log("Put ki request aai he")
        const { id } = req.params;
        const { name, price, description, category } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description, category }, { new: true });
        if (!updatedProduct) {
            return res.status(500).json({
                success: false,
                message: "can't find product"
            })
        }
        return res.status(200).json({
            product: updatedProduct
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Invalid Server Error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.json({
                message:"Cant find product to delete."
            })
        }
        return res.status(200).json({
            message:"Product deleted Successfully.",
            product:deletedProduct,
        })

    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Invalid Server Error."
        })
    }
}
module.exports = { getProducts, createProduct, updateProduct, deleteProduct }