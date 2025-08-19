import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: "Protein Supplements",
    name: "💊 Supplements",
    image:
      "/src/assets/blank-black-supplement-container-scoop-protein-powder-clean-product-photography-mockup-tub-vanilla-flavored-front-386731260.jpg",
  },
  {
    id: "Creatine",
    name: "🥤 Proteins",
    image:
      "/src/assets/blank-white-supplement-bottle-modern-gym-ready-product-branding-sits-floor-workout-equipment-background-377747928.jpg",
  },
  {
    id: "Vitamins & Minerals",
    name: "🍊 Vitamins",
    image:
      "/src/assets/supplement-bottle-mockup-capsules-white-600nw-2642616081.jpg",
  },
  {
    id: "preworkout",
    name: "⚡ Pre-Workout",
    image: "/src/assets/Elevating-your-supplement-photography-with-CGI.webp",
  },
];

const offers = [
  {
    id: "offer1",
    name: "🔥 Buy 1 Get 1 Free",
    desc: "On selected protein supplements",
    image: "/src/assets/offer1.jpg",
  },
  {
    id: "offer2",
    name: "💸 30% OFF",
    desc: "On all pre-workouts this week",
    image: "/src/assets/offer2.jpg",
  },
];
export default function Categories() {
  const repeatedCategories = [
    ...categories,
    ...categories,
    ...categories,
    ...categories,
  ];

  return (
    <div className="flex flex-col min-h-screen p-10 pt-24 bg-gradient-to-br from-[#98ff98] via-white to-[#ccffcc] dark:from-green-950 dark:via-green-900 dark:to-black transition-colors duration-300">
      <h1 className="text-4xl font-extrabold text-center text-green-600 dark:text-green-200 mb-14">
        🏷️ Categories
      </h1>

      <div className="relative w-full overflow-hidden mb-20">
        <motion.div
          className="flex gap-6 px-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {repeatedCategories.map((cat, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] bg-white dark:bg-green-950 rounded-2xl shadow-md border border-green-200 dark:border-green-700 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/category/${cat.id}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-8 text-center">
        🎉 Special Offers
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white dark:bg-green-950 rounded-2xl shadow-lg overflow-hidden border border-green-200 dark:border-green-700"
          >
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-100">
                {offer.name}
              </h3>
              <p className="text-green-600 dark:text-green-300 mt-2 leading-relaxed">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
