// src/app/components/CategoryCard.js

export default function CategoryCard({ category }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src={category.image || "/images/default-category.jpg"} // Default image fallback
        alt={category.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {category.name}
      </h3>
      <p className="text-gray-600">{category.description}</p>
      <a
        href={`/categories/${category.slug}`}
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        Explore {category.name}
      </a>
    </div>
  );
}
