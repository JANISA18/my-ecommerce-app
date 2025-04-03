import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="order-confirmation">
            <h2>Order Confirmed</h2>
            <p>Thank you for your purchase!</p>
            <button onClick={() => navigate("/")} className="home-button">
                Return to Home
            </button>
        </div>
    );
};

export default OrderConfirmation;
