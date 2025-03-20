import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search value to the parent component (ProductList)
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo">
          <h2>YCA</h2>
        </Link>
        <span className="slogan">Wear it proud</span> {/* Slogan */}
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
