import { useParams, Link } from "react-router-dom";
import { ProductsData } from "../data/data";
import { useCart } from "../context/useCart";

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const { addItem } = useCart();

  const decoded = decodeURIComponent(name ?? "");
  const items = ProductsData.filter(
    (p) => p.category.toLowerCase() === decoded.toLowerCase()
  );

  if (!name) {
    return <div className="pt-28 text-center">Category not specified.</div>;
  }

  return (
    <div className="min-h-screen p-10 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-300 mb-8">
          Category: {decoded}
        </h1>
        {items.length === 0 ? (
          <p className="text-slate-300">No items found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <div
                key={p.id}
                className="glass rounded-2xl overflow-hidden flex flex-col"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-emerald-200">
                    {p.name}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-emerald-300">
                      ${p.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => addItem(p, 1)}
                        className="btn-primary px-3 py-2 rounded-lg"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`/products/${p.id}`}
                        className="glass px-3 py-2 rounded-lg"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
