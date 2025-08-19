import { motion } from "framer-motion";
import { FaShippingFast, FaTags, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-green-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to our Supplements Store
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.04, duration: 0.8 }}
        >
          Best supplements for your health and fitness journey. Explore our wide
          range of products designed to help you achieve your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.8 }}
        >
          <Link
            to="/products"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        {[
          {
            icon: <FaShippingFast size={40} className="text-green-400" />,
            title: "Fast Delivery",
            desc: "Fast and reliable shipping to your doorstep.",
          },
          {
            icon: <FaTags size={40} className="text-green-400" />,
            title: "Daily Offers",
            desc: "Discover amazing daily deals and discounts.",
          },
          {
            icon: <FaShieldAlt size={40} className="text-green-400" />,
            title: "Verified Products",
            desc: "Only the best quality products, verified for your safety.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-green-950/70 rounded-xl p-6 text-center shadow-lg border border-green-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-green-300">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Us */}
      <section className="bg-green-950 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-300">About Us</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            At SuppStore, we believe in providing the highest quality
            supplements to help you reach your peak performance. Our mission is
            to make your fitness journey easier, healthier, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-sm border-t border-green-800">
        © {new Date().getFullYear()} SuppStore. All rights reserved.
      </footer>
    </div>
  );
}
