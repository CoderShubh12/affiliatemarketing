// src/app/components/SearchBar.js
export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search products..."
      className="border p-2 mb-4 w-full rounded-lg"
    />
  );
}
