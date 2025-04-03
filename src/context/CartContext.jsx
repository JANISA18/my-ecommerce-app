import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // Save cart to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    // Function to remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    }; 
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;