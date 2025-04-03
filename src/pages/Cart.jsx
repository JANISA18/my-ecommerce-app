import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Import the new styles
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log("Cart Items in Cart.jsx:", cartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 
    0
  ).toFixed(2);

  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <p className="cart-total">Total: ${totalPrice}</p>
          <button onClick={() => navigate("/checkout")} className="checkout-button">
            Proceed to Checkout
        </button>
        </>
      )}
    </div>
  );
};

export default Cart;
