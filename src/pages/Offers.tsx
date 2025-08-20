import { Link } from "react-router-dom";
import { ProductsData } from "../data/data";

export default function Offers() {
  const discounted = ProductsData.slice(0, 6).map((p, i) => ({
    ...p,
    oldPrice: Number((p.price * 1.25).toFixed(2)),
    badge: i % 2 === 0 ? "Hot" : "Deal",
  }));

  return (
    <div className="min-h-screen p-10 pt-24 bg-gradient-to-br from-[#98ff98] via-white to-[#ccffcc] dark:from-green-950 dark:via-green-900 dark:to-black">
      <h1 className="text-4xl font-extrabold text-center text-green-700 dark:text-green-200 mb-10">
        Limited-Time Offers
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {discounted.map((p) => (
          <div key={p.id} className="bg-white dark:bg-green-950 rounded-2xl shadow-md overflow-hidden border border-green-200 dark:border-green-700">
            <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">{p.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-600 text-white">{p.badge}</span>
              </div>
              <p className="text-green-700 dark:text-green-300 text-sm mb-3 line-clamp-2">{p.description}</p>
              <div className="flex items-end gap-3">
                <span className="text-2xl font-bold text-green-600">${p.price.toFixed(2)}</span>
                <span className="text-sm line-through text-green-800/60">${p.oldPrice.toFixed(2)}</span>
              </div>
              <Link to={`/products/${p.id}`} className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                View Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
