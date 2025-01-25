// src/app/components/Header.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-4 text-white">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">MyBrand</Link>
        </div>
        <div className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Categories", path: "/categories" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-lg ${
                pathname === link.path ? "underline" : "hover:opacity-80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
