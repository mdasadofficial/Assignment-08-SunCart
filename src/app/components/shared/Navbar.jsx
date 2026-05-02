"use client";

import { Link } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaShoppingCart className="text-2xl text-orange-500" />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            SunCart
          </h1>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className={`transition ${
                pathname === "/"
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className={`transition ${
                pathname === "/products"
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Products
            </Link>
          </li>

          {/* Auth Buttons */}
          <div>
            <li className="flex items-center gap-3 ml-4">
              <Link
                href={"/signin"}
                className={`transition ${
                  pathname === "/signin"
                    ? "px-4 py-1.5 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Sign In
              </Link>

              <Link
                href={"/signup"}
                className={`transition ${
                  pathname === "/signup"
                    ? "px-4 py-1.5 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Sign Up
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
