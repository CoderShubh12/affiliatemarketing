export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Our platform is designed to simplify your shopping experience by
          bringing curated products from trusted eCommerce platforms into one
          place. With exclusive deals, a streamlined interface, and tools to
          save time and money, we aim to redefine how you discover and shop for
          products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Curated Product Listings
            </h3>
            <p className="text-gray-600">
              We hand-pick the best products across various platforms to ensure
              quality and relevance. Say goodbye to endless searching and hello
              to simplicity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Exclusive Affiliate Deals
            </h3>
            <p className="text-gray-600">
              By partnering with trusted platforms, we provide you access to
              exclusive offers and discounts. Save more every time you shop.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Simplified Experience
            </h3>
            <p className="text-gray-600">
              Our intuitive design makes it easy to navigate and find the
              products you love, ensuring a hassle-free shopping journey.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Transparent Revenue Model
            </h3>
            <p className="text-gray-600">
              We earn through affiliate commissions at no extra cost to you.
              This allows us to keep our platform free and unbiased.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/categories"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Explore Categories
          </a>
        </div>
      </div>
    </div>
  );
}
