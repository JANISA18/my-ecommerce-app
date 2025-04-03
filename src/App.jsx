import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CartProvider from "./context/CartContext";
import ReactDOM from "react-dom/client";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartProvider>
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
