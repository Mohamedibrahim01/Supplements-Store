import { useParams } from "react-router-dom";
import { ProductsData } from "../data/data";
import { motion } from "framer-motion";

export default function ProductsDetails() {
  const { id } = useParams<{ id: string }>();
  const product = ProductsData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-red-500">Product not found ❌</h2>
    );
  }

  return (
    <div className="min-h-screen p-10 pt-24 bg-gradient-to-br from-[#fff] to-[#ccffcc] dark:from-green-950 dark:to-black transition-colors duration-300">
      {/* Product Name */}
      <motion.h1
        className="text-4xl font-bold text-center text-green-600 dark:text-green-200 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {product.name}
      </motion.h1>

      {/* Product Card */}
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-green-950 rounded-2xl shadow-md p-8 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
        />

        {/* Description */}
        <motion.p
          className="text-lg text-green-800 dark:text-green-200 mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {product.description}
        </motion.p>

        {/* Extra Info */}
        <div className="flex flex-col gap-2 text-green-700 dark:text-green-300 mb-6">
          <span>
            ⭐ Rating: <b>4.5/5</b>
          </span>
          <span>
            📦 Availability: <b>In Stock</b>
          </span>
          <span>
            🏷️ Category: <b>Organic Products</b>
          </span>
        </div>

        {/* Price */}
        <motion.span
          className="text-3xl font-extrabold text-green-600 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ${product.price.toFixed(2)}
        </motion.span>

        {/* Buy Button */}
        <motion.button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🛒 Buy Now
        </motion.button>
      </motion.div>
    </div>
  );
}
