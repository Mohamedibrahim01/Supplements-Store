import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaTags,
  FaShieldAlt,
  FaUsers,
  FaDumbbell,
  FaStar,
} from "react-icons/fa";
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
          Welcome to SuppStore
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.04, duration: 0.8 }}
        >
          Premium supplements for your health and fitness journey. Explore our
          wide range of products designed to help you achieve your goals.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.8 }}
        >
          <Link
            to="/categories"
            className="bg-transparent border border-green-500 hover:bg-green-600 hover:text-white text-green-400 font-bold px-6 py-3 rounded-lg transition"
          >
            Explore Categories
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

      {/* Stats Section */}
      <section className="px-6 py-16 bg-green-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaUsers size={36} />,
              stat: "10K+",
              label: "Happy Customers",
            },
            {
              icon: <FaDumbbell size={36} />,
              stat: "200+",
              label: "Products Available",
            },
            {
              icon: <FaStar size={36} />,
              stat: "4.9/5",
              label: "Customer Rating",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 mb-2">{item.icon}</div>
              <h3 className="text-3xl font-extrabold text-green-300">
                {item.stat}
              </h3>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-300 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ali",
              review:
                "The whey protein is top-notch quality. Helped me recover faster!",
            },
            {
              name: "Sara",
              review: "Love their fast delivery and amazing offers!",
            },
            {
              name: "Omar",
              review: "Trusted store, always delivers the best supplements.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-green-950/70 p-6 rounded-xl shadow-lg border border-green-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-200 italic mb-4">"{t.review}"</p>
              <h4 className="text-green-300 font-bold">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-950 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-300">
            Stay Updated
          </h2>
          <p className="text-gray-200 mb-6">
            Join our newsletter and get the latest deals and updates directly to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-auto text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-sm border-t border-green-800">
        © {new Date().getFullYear()} SuppStore. All rights reserved.
      </footer>
    </div>
  );
}
