import { motion } from "framer-motion";
import { ProductsData } from "../data/dats";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      className="min-h-screen p-6 pt-20 bg-gray-800"
      style={{ backgroundSize: "200% 200%" }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">
        💊 Supplements and Vitamins
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ProductsData.map((product) => (
          <motion.div
            key={product.id}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: product.id * 0.07 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <p className="text-yellow-400 font-bold text-lg mb-4">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // عشان الزرار ما يوديش لصفحة التفاصيل
                  console.log("add to cart", product.id);
                }}
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
