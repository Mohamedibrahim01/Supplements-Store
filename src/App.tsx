import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Offers from "./pages/Offers";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        {/* Footer */}
      </Routes>
      <footer className="bg-black py-6 text-center text-gray-500 text-sm border-t border-green-800">
        © {new Date().getFullYear()} SuppStore. All rights reserved.
      </footer>
    </>
  );
}

export default App;
