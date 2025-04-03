const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId: String,
    title: String,
    price: Number,
    quantity: Number,
    image: String,
});

module.exports = mongoose.model("Cart", cartSchema);
