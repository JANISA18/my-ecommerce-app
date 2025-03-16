import { Link } from 'react-router-dom'; // Handles page navigation without reloading
import './Navbar.css'; // ✅ Import external CSS

// Navbar component definition
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo section */}
            <h2 className="logo">YCA</h2>

            {/* Navigation links */}
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li>
                    <Link to="/checkout" className="nav-link">Checkout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
