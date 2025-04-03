const express = require("express");
const router = express.Router();

// Temporary order storage (later replace with database)
let orders = [];

// Place an order
router.post("/", (req, res) => {
    const { orderId, customerName, items, totalPrice, email } = req.body;

    if (!orderId || !customerName || !items || !totalPrice || !email) {
        return res.status(400).json({ message: "All fields are required." });
    }

    orders.push({ orderId, customerName, items, totalPrice, email });
    res.json({ message: "Order placed successfully", orders });
});

// Get all orders
router.get("/", (req, res) => {
    res.json(orders);
});

module.exports = router;
