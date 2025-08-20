import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { id: "Protein", name: "🥤 Proteins", image: "/src/assets/protein-1.jpeg" },
  { id: "Creatine", name: "💪 Creatine", image: "/src/assets/creatine-1.jpg" },
  { id: "Vitamins", name: "🍊 Vitamins", image: "/src/assets/vitamin-1.jpg" },
  {
    id: "Pre-Workout",
    name: "⚡ Pre-Workout",
    image: "/src/assets/Elevating-your-supplement-photography-with-CGI.webp",
  },
];

const offers = [
  {
    id: "offer1",
    name: "🔥 Buy 1 Get 1 Free",
    desc: "On selected protein supplements",
    image: "/src/assets/protein-2.jpeg",
  },
  {
    id: "offer2",
    name: "💸 30% OFF",
    desc: "On all pre-workouts this week",
    image: "/src/assets/creatine-4.jpg",
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
    <div className="flex flex-col min-h-screen p-10 pt-24">
      <h1 className="text-4xl font-extrabold text-center text-emerald-300 mb-14">
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
              className="min-w-[220px] glass rounded-2xl flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/category/${encodeURIComponent(cat.id)}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-emerald-200">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
        🎉 Special Offers
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div key={offer.id} className="glass rounded-2xl overflow-hidden">
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-200">
                {offer.name}
              </h3>
              <p className="text-slate-300 mt-2 leading-relaxed">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
