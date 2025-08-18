import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Offers from "./pages/Offers";
import ProductsDetails from "./pages/productsDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;
