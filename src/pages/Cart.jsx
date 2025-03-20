import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Import the new styles

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
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
      {cart.length > 0 && (
        <>
          <p className="cart-total">Total: ${totalPrice}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
