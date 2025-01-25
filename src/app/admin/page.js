// src/pages/AdminPage.js

import ProductForm from "../components/productForm";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        Admin Dashboard
      </h1>
      <ProductForm />
    </div>
  );
}
