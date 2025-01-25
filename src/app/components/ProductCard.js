// src/app/components/ProductCard.js

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">{product.price}</p>
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 inline-block hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
