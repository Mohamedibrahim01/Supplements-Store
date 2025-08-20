import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <div className="min-h-screen p-10 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-300 mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-slate-300 mb-4">Your cart is empty.</p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="glass rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-emerald-200 font-semibold">
                Items: {totalItems}
              </span>
              <button onClick={clearCart} className="text-sm btn-primary">
                Clear Cart
              </button>
            </div>

            <div className="divide-y divide-white/10">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="py-4 flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-indigo-200">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-1">
                      {product.description}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <label className="text-sm text-slate-200">Qty</label>
                      <input
                        type="number"
                        value={quantity}
                        min={1}
                        max={99}
                        onChange={(e) =>
                          updateQuantity(product.id, Number(e.target.value))
                        }
                        className="w-16 bg-transparent border border-white/10 rounded px-2 py-1 text-slate-100"
                      />
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-sm btn-primary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-200 font-semibold">
                      ${(product.price * quantity).toFixed(2)}
                    </div>
                    <div className="text-xs text-slate-400/80">
                      ${product.price.toFixed(2)} each
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xl font-bold text-emerald-300">
                Total: ${totalPrice.toFixed(2)}
              </span>
              <button className="btn-primary px-5 py-2 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
