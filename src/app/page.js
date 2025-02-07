"use client";

import { useEffect, useState } from "react";
// import { fetchCategories } from "../utils/fetchCategories"; // Your fetch function
import CategoryCard from "./components/CategoryCard";
import SkeletonLoader from "./components/SkeletonLoader"; // For skeleton loading
import HeroSection from "./components/HeroSection";
import { fetchCategories } from "./utils/fetchCategories";
// import HeroSection from "../components/HeroSection";

export default function HomePage() {
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Function to load categories after component mounts
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories(); // Fetch data
        setCategories(fetchedCategories); // Set categories in state
      } catch (error) {
        setError("Sorry, we couldn't load the categories at this time."); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    loadCategories(); // Call the function to load categories
  }, []); // Empty dependency array ensures the effect runs only once

  // Show skeleton loader while categories are being fetched
  if (loading) {
    return (
      <div>
        <HeroSection />
        <section className="py-16 px-6 text-center bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore Popular Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Show skeleton loader for each category */}
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
          </div>
        </section>
      </div>
    );
  }

  // Show error message if fetching fails
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Render categories once fetched
  return (
    <div className="bg-gray-50">
      <HeroSection />

      {/* Categories Grid */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Explore Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Key Features Summary */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Save Time
              </h3>
              <p className="text-gray-600">
                Quickly find curated products from trusted platforms in one
                place.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Earn More
              </h3>
              <p className="text-gray-600">
                Take advantage of exclusive affiliate deals that save you money.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Simplified Shopping
              </h3>
              <p className="text-gray-600">
                Discover amazing products without searching through endless
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Link */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Know More?</h2>
        <p className="text-xl mb-8">
          Learn how our platform works and how it benefits you.
        </p>
        <a
          href="/how-it-works"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Learn More
        </a>
      </section>
    </div>
  );
}
