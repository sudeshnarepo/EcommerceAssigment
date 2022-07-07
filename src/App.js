import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-bar/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes> 
    <Footer/>
    </div>
  );
}

export default App;
