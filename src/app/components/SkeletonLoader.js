// src/components/SkeletonLoader.js
export default function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="w-full h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
    </div>
  );
}
