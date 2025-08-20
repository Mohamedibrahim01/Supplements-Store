import { Link } from "react-router-dom";
import { ProductsData } from "../data/data";

export default function Products() {
  return (
    <div className="min-h-screen p-10 pt-24 bg-gradient-to-br from-[#98ff98] via-white to-[#ccffcc] dark:from-green-950 dark:via-green-900 dark:to-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-200 mb-10 text-center">
          All Products
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductsData.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-green-950 rounded-2xl shadow-md overflow-hidden border border-green-200 dark:border-green-700 flex flex-col"
            >
              <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  {p.name}
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${p.price.toFixed(2)}</span>
                  <Link
                    to={`/products/${p.id}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


