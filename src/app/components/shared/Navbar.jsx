"use client";

import { Button, Link } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg max-w-7xl mx-auto">
      
      <header className="flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaShoppingCart className="text-2xl text-orange-500" />
          <h1 className="text-2xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            SunCart
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-6">

          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-orange-500 font-semibold "
                  : "text-gray-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className={`${
                pathname === "/products"
                  ? "text-orange-500 font-semibold "
                  : "text-gray-600"
              }`}
            >
              Products
            </Link>
          </li>

          <li>
            <Button color="primary">Sign Up</Button>
          </li>

        </ul>
      </header>
    </nav>
  );
};

export default Navbar;