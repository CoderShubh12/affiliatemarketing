// src/app/components/HowItWorks.js

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-200 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          How Our Website Works
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Discover amazing products and earn commissions by promoting them with
          our simple, curated platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Curated Product Listings
            </h3>
            <p className="text-gray-600">
              We hand-pick the best products from multiple platforms to make
              sure you get the best deals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Affiliate Revenue
            </h3>
            <p className="text-gray-600">
              We earn commissions through affiliate links at no extra cost to
              you. You get the best products and we earn by referring them.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Simplified Experience
            </h3>
            <p className="text-gray-600">
              Our platform makes it easy for you to find curated lists of
              products across multiple platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
