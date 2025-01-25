// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/terms" className="hover:opacity-80">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:opacity-80">
            Privacy Policy
          </a>
          <a href="/about" className="hover:opacity-80">
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
}
