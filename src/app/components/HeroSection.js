// src/app/components/HeroSection.js

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-pink-500 py-16 text-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Discover Amazing Products and Deals
        </h1>
        <p className="text-xl mb-6">
          Explore curated products from the best eCommerce platforms. We save
          you time and money!
        </p>
        <a
          href="/categories"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Browse Categories
        </a>
      </div>
    </section>
  );
}
