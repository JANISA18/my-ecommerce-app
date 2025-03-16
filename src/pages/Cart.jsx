import React from "react";
import "./Cart.css";

const Cart = () => {
    const cartItems = [
        { id: 1, name: "Wireless Headphones", price: "$99.99", quantity: 1 },
        { id: 2, name: "Smart Watch", price: "$149.99", quantity: 2 },
      ];
      return (
        <div className="cart-container">
          <h1>Shopping Cart</h1>
    
          {/* If cart is empty */}
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="remove-btn">Remove</button>
                </div>
              ))}
            </div>
          )}
    
          {/* Checkout Button */}
          {cartItems.length > 0 && (
            <button className="checkout-btn">Proceed to Checkout</button>
          )}
        </div>
      );
};
export default Cart;