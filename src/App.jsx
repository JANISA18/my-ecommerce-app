import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
    <Navbar />{/* The Navbar will appear on every page*/}

    {/* Routes to define different pages of the website */}
    <Routes>
    {/* The Home Page ("/") */}
    <Route path="/" element={<Home />} />

    {/* The Cart Page ("/cart") */}
    <Route path="/cart" element={<Cart />} />

    {/* The Product Page ("/product/:id") - :id is a dynamic parameter */}
    <Route path="/product/:id" element={<h1>Product Page</h1>} />

    {/* The Checkout Page ("/checkout") */}
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
  </>
  );
}

export default App;
