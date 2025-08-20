import { Link } from "react-router-dom";
import { ProductsData } from "../data/data";

export default function Offers() {
  const discounted = ProductsData.slice(0, 6).map((p, i) => ({
    ...p,
    oldPrice: Number((p.price * 1.25).toFixed(2)),
    badge: i % 2 === 0 ? "Hot" : "Deal",
  }));

  return (
    <div className="min-h-screen p-10 pt-24">
      <h1 className="text-4xl font-extrabold text-center text-emerald-300 mb-10">
        Limited-Time Offers
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {discounted.map((p) => (
          <div key={p.id} className="glass rounded-2xl overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-emerald-200">{p.name}</h3>
                <span className="badge">{p.badge}</span>
              </div>
              <p className="text-slate-300 text-sm mb-3 line-clamp-2">{p.description}</p>
              <div className="flex items-end gap-3">
                <span className="text-2xl font-bold text-emerald-300">${p.price.toFixed(2)}</span>
                <span className="text-sm line-through text-slate-400/70">${p.oldPrice.toFixed(2)}</span>
              </div>
              <Link to={`/products/${p.id}`} className="inline-block mt-4 btn-primary">
                View Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
