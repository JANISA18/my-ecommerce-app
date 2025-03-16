import React from "react";
import "./Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      price: "$99.99",
      description: "High-quality sound with noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://via.placeholder.com/150",
      price: "$149.99",
      description: "Track your fitness and stay connected on the go.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      image: "https://via.placeholder.com/150",
      price: "$79.99",
      description: "Portable speaker with powerful bass and long battery life.",
    },
  ];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to YCA Store</h1>
        <p>Explore our latest collection of amazing products!</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <span className="product-price">{product.price}</span>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
