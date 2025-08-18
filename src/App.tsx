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
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;
