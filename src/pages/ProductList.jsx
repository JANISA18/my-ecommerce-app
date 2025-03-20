import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import CartContext
import "./ProductList.css"; // Import external CSS

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(null); // Track added product ID

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 2000); // Remove message after 2 seconds
    };

    if (loading) return <p className="loading">Loading products...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image"/>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <button 
                        className="add-to-cart" 
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                    {addedToCart === product.id && <p className="cart-message">Added to Cart!</p>}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
