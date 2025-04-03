import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

// Payment options data
const paymentMethods = [
    { name: "Visa", icon: "https://cdn.simpleicons.org/visa" },
    { name: "MasterCard", icon: "https://cdn.simpleicons.org/mastercard" },
    { name: "PayPal", icon: "https://cdn.simpleicons.org/paypal" },
];


const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+27", country: "South Africa" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
];

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext); // ✅ Get cartItems from Context

 
    const totalItems = cartItems.length  || 0;
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 
        0
    ).toFixed(2);

    const [formData, setFormData] = useState({
        fullName: "",
        street: "",
        areaCode: "",
        email: "",
        phoneNumber: "",
        countryCode: "+27",
        paymentMethod: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        paypalEmail: "",
    });

    const [error, setError] = useState("");

    const handlePaymentChange = (method) => {
        setFormData({ ...formData, paymentMethod: method });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (phoneNumber) => /^[0-9]+$/.test(phoneNumber);
    // Validate card number (must be 16 digits)
    const validateCardNumber = (number) => /^[0-9]{16}$/.test(number);

    // Validate CVV (must be 3 digits)
    const validateCVV = (cvv) => /^[0-9]{3}$/.test(cvv);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.street || !formData.areaCode || !formData.email || !formData.phoneNumber || !formData.paymentMethod) {
            setError("Please fill in all fields.");
            return;
        }

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!validatePhoneNumber(formData.phoneNumber)) {
            setError("Phone number must contain only numbers.");
            return;
        }

        // Payment method-specific validation
        if (formData.paymentMethod === "Visa" || formData.paymentMethod === "MasterCard") {
            if (!validateCardNumber(formData.cardNumber)) {
                setError("Card number must be 16 digits.");
                return;
            }
            if (!validateCVV(formData.cvv)) {
                setError("CVV must be 3 digits.");
                return;
            }
            if (!formData.expiryDate) {
                setError("Please enter an expiry date.");
                return;
            }
        }

        if (formData.paymentMethod === "PayPal" && !validateEmail(formData.paypalEmail)) {
            setError("Please enter a valid PayPal email.");
            return;
        }

        setError(""); // Clear errors if all validations pass

        setError("");
        console.log("Order placed:", formData);
        navigate("/order-confirmation");
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            {/* Order Summary */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: ${totalPrice}</p>
            </div>

            {error && <p className="error-message">{error}</p>}

            {/* Checkout Form */}
            <form className="checkout-form" onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" required />
                </label>

                <label>
                    Street Name:
                    <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter street name" required />
                </label>

                <label>
                    Area Code:
                    <input type="text" name="areaCode" value={formData.areaCode} onChange={handleChange} placeholder="Enter area code" required />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </label>

                <label>
                    Phone Number:
                    <div className="phone-input">
                        <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                            {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.code} ({country.country})
                                </option>
                            ))}
                        </select>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter phone number" required />
                    </div>
                </label>

                {/* <label>
                    Payment Method:
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                        <option value="">Select Payment Method</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="PayPal">PayPal</option>
                    </select>
                </label> */}
            <div className="checkout-container">
            {/* Payment Method Selection */}
            <label>Payment Method:</label>
            <div className="custom-dropdown">
                {paymentMethods.map((method) => (
                    <div
                        key={method.name}
                        className={`dropdown-option ${formData.paymentMethod === method.name ? "selected" : ""}`}
                        onClick={() => handlePaymentChange(method.name)}
                    >
                        <img src={method.icon} alt={method.name} className="payment-icon" />
                        {method.name}
                    </div>
                ))}
            </div>
            </div>

            {/* Display selected payment method */}
            {formData.paymentMethod && <p>Selected: {formData.paymentMethod}</p>}
                {/* Conditionally Render Payment Fields */}
                {(formData.paymentMethod === "Visa" || formData.paymentMethod === "MasterCard") && (
                    <>
                        <label>Card Number:
                            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                        </label>
                        <label>Expiry Date:
                            <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                        </label>
                        <label>CVV:
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                        </label>
                    </>
                )}

                {formData.paymentMethod === "PayPal" && (
                    <label>PayPal Email:
                        <input type="email" name="paypalEmail" value={formData.paypalEmail} onChange={handleChange} required />
                    </label>
                )}
                

                <button type="submit" className="place-order-btn">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
