import React from 'react';
import "./Checkout.css";

const Checkout = () => {
return (
    <div className='"checkout-container"'>
        <h2>Checkout</h2>
        
        <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Total Items: 2</p>
            <p>Total Price: $179.98</p>
        </div>

         {/* Checkout Form */}
         <form className='checkout-form'>
            <label>
                Full Name:
                <input type="text" placeholder="Enter your name" required />
            </label>
            
            <label>
                Address:
                <input type="text" placeholder="Enter your address" required />
            </label>
           
            <label>
                Payment Method:
                <select required>
                    <option value=""> Select Payment Method</option>
                    <option value= "Card">Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </label>
           
            <button type = "submit" className='place-order-btn'>
                Place Order
            </button>
         </form>

    </div>
);
};
export default Checkout;