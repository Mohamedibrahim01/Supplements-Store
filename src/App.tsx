import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Offers from "./pages/Offers";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import { CartProvider } from "./context/CartContext";
import ProductsDetails from "./pages/products-details";

function App() {
  return (
    <CartProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* Footer */}
        </Routes>
        <footer className="bg-black py-6 text-center text-gray-500 text-sm border-t border-green-800">
          © {new Date().getFullYear()} SuppStore. All rights reserved.
        </footer>
      </>
    </CartProvider>
  );
}

export default App;
