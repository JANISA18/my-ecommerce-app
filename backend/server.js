const express = require("express");
const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");
app.use("/cart", cartRoutes);

const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use the routes
app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

