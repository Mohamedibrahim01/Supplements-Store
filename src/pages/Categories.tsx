import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: "Protein Supplements",
    name: "💊 Supplements",
    image: "https://via.placeholder.com/200x150?text=Supplements",
  },
  {
    id: "Creatine",
    name: "🥤 Proteins",
    image: "https://via.placeholder.com/200x150?text=Proteins",
  },
  {
    id: "Vitamins & Minerals",
    name: "🍊 Vitamins",
    image: "https://via.placeholder.com/200x150?text=Vitamins",
  },
  {
    id: "preworkout",
    name: "⚡ Pre-Workout",
    image: "https://via.placeholder.com/200x150?text=PreWorkout",
  },
];

export default function Categories() {
  // نكرر الكاتيجوريز كتير عشان يبقى فيه سلاسة
  const repeatedCategories = [
    ...categories,
    ...categories,
    ...categories,
    ...categories,
  ];

  return (
    <div className="min-h-screen p-10 pt-24 bg-gradient-to-br from-[#98ff98] via-white to-[#ccffcc] dark:from-green-950 dark:via-green-900 dark:to-black transition-colors duration-300">
      <h1 className="text-4xl font-extrabold text-center text-green-600 dark:text-green-200 mb-14">
        🏷️ Categories
      </h1>

      {/* شريط الكاتيجوريز المتحرك */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {repeatedCategories.map((cat, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] bg-white dark:bg-green-950 rounded-2xl shadow-md border border-green-200 dark:border-green-700 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/category/${cat.id}`}>
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                </div>
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
    </div>
  );
}
