import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaBox, FaInfoCircle, FaDumbbell } from "react-icons/fa";

function Navbar() {
  return (
    <motion.nav
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg fixed top-0 left-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaDumbbell className="text-yellow-300 text-3xl drop-shadow-lg" />
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Supp<span className="text-yellow-300">Store</span>
            </h1>
          </motion.div>
        </Link>
        {/* Links */}
        <div className="flex gap-6">
          {[
            { to: "/", icon: <FaHome />, label: "Home" },
            { to: "/products", icon: <FaBox />, label: "Products" },
            { to: "/about", icon: <FaInfoCircle />, label: "About" },
          ].map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className="flex items-center gap-2 text-white cursor-pointer hover:text-yellow-300 transition-colors duration-300"
              >
                {link.icon} {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
