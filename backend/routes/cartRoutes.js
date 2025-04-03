const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart"); // Correct path

// Add item to cart
router.post("/", async (req, res) => {
    try {
        const newItem = new Cart(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
