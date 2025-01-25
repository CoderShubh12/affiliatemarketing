// src/app/components/ProductForm.js
"use client";
import { useState } from "react";
import { db } from "../../firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";

export default function ProductForm() {
  // State to store form values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add product to Firestore
      const docRef = await addDoc(collection(db, "products"), {
        name,
        description,
        price,
        category,
        affiliateLink,
        image,
      });

      console.log("Product added with ID: ", docRef.id);
      // Clear form after submission
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setAffiliateLink("");
      setImage("");
      setLoading(false);
    } catch (error) {
      console.error("Error adding product: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Form fields for product details */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Product Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="affiliateLink"
            className="block text-gray-700 font-semibold"
          >
            Affiliate Link
          </label>
          <input
            type="url"
            id="affiliateLink"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={affiliateLink}
            onChange={(e) => setAffiliateLink(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold">
            Product Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
