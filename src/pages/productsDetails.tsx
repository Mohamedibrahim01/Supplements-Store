import { useParams, useNavigate } from "react-router-dom";
import { ProductsData } from "../data/dats";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = Number(id);
  const product = ProductsData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen p-6 bg-gray-900 text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">⚠️ المنتج غير موجود</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          رجوع
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-96 rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-yellow-400 font-bold text-2xl">
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
      >
        رجوع
      </button>
    </div>
  );
}
