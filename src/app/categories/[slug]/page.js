// src/app/categories/[slug]/page.js

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCategoryProducts } from "../../utils/fetchProducts";
import ProductGrid from "../../components/ProductGrid";
import SearchBar from "../../components/SearchBar";

export default function CategoryPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchCategoryProducts(slug);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Initialize filtered products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [slug]);

  // Handle Search Input
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        {slug.charAt(0).toUpperCase() + slug.slice(1)} Products
      </h1>

      {/* SearchBar */}
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}
