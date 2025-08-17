import { ProductsData } from "../data/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Products() {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen p-10 pt-24 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-green-900 dark:to-black transition-colors duration-300">
      <h1 className="text-4xl font-extrabold text-center text-green-800 dark:text-green-200 mb-14">
        💊 Our Supplements
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProductsData.map((product) => (
          <motion.div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="bg-white dark:bg-green-950 rounded-2xl shadow-md border border-green-200 dark:border-green-700 cursor-pointer transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.03 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                {product.name}
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm line-clamp-2">
                {product.description}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("add to cart", product.id);
                }}
                className="cursor-pointer mt-auto w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition-colors duration-200"
              >
                🛒 Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
