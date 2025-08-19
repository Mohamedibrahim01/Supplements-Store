import { useEffect, useState } from "react";
import axios from "axios";

type Item = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  price?: string | number;
};

export default function Proteins() {
  const [supplements, setSupplements] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get("https://vitamins-and-supplements.vercel.app/api/supplement/")
      .then((res) => {
        console.log("API Response:", res.data); // تشوف شكل الداتا في الكونسول
        setSupplements(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">This is Protein Page</h2>

      {/* لو في داتا */}
      <div className="grid md:grid-cols-3 gap-6">
        {supplements.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-green-950 rounded-2xl shadow-lg border border-green-200 dark:border-green-700 overflow-hidden"
          >
            <img
              src={item.image || "/fallback.jpg"}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                {item.name}
              </h3>
              <p className="text-green-600 dark:text-green-300 mt-2">
                {item.description || "No description available."}
              </p>
              {item.price && (
                <p className="mt-3 font-bold text-green-700 dark:text-green-400">
                  {item.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
