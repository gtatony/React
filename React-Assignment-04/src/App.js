import "./App.css";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ListProducts } from "./ListProducts";
import { AddProduct } from "./AddProduct";
import { ProductDetails } from "./ProductDetails";

export function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
