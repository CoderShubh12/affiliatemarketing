// src/app/components/Filters.js
export default function Filters({ onApplyFilters }) {
  return (
    <div className="flex flex-wrap space-x-4 items-center my-6">
      <div>
        <label className="block text-gray-700">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          onChange={(e) => onApplyFilters({ price: e.target.value })}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Rating</label>
        <select
          onChange={(e) => onApplyFilters({ rating: e.target.value })}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">All Ratings</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
        </select>
      </div>
    </div>
  );
}
