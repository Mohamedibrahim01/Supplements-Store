import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaBox, FaTags, FaDumbbell } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../context/useCart";

function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 glass">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaDumbbell className="text-lime-400 text-3xl drop-shadow-lg" />
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Supp<span className="text-lime-400">Store</span>
            </h1>
          </motion.div>
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {[
            { to: "/", icon: <FaHome />, label: "Home" },
            { to: "/Categories", icon: <FaBox />, label: "Categories" },
            { to: "/products", icon: <FaBox />, label: "Products" },
            { to: "/offers", icon: <FaTags />, label: "Offers" },
          ].map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className="flex items-center gap-2 text-white cursor-pointer hover:text-emerald-300 transition-colors duration-300"
              >
                {link.icon} {link.label}
              </Link>
            </motion.div>
          ))}
          <CartButton />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

function CartButton() {
  const { totalItems } = useCart();
  return (
    <RouterLink
      to="/cart"
      className="relative text-white px-3 py-2 rounded-lg transition-colors glass"
    >
      Cart
      {totalItems > 0 && (
        <span className="ml-2 text-xs badge">{totalItems}</span>
      )}
    </RouterLink>
  );
}
