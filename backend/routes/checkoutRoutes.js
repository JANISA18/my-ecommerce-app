// Manages checkout processing.
const express = require("express");
const router = express.Router();

// Simulated checkout process
router.post("/", (req, res) => {
    const { fullName, email, phoneNumber, paymentMethod, cartItems } = req.body;

    if (!fullName || !email || !phoneNumber || !paymentMethod || cartItems.length === 0) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    res.json({ message: "Checkout successful", orderDetails: req.body });
});

module.exports = router;
