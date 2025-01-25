/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for better error handling
  trailingSlash: true, // Ensures URLs have a trailing slash (useful for Firebase Hosting)
  images: {
    unoptimized: true, // Optional: Disables optimization for images during static export (useful for Firebase Hosting)
  },
  // Add any custom configuration here as needed
};

export default nextConfig;
