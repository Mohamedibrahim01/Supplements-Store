import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Offers from "./pages/Offers";
import ProductsDetails from "./pages/productsDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/product:id" element={<ProductsDetails />} />
        <Route path="*" element={<div className="p-16">404 - Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
