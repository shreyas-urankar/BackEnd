const {
    Schema,
    model
} = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    category: {
        type: String,
        required: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ProductModel = model("Product", ProductSchema)

module.exports = ProductModel