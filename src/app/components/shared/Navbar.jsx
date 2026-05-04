"use client";

import { Avatar, Button, Link } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  
  const handleSignOut = async () =>{
    await authClient.signOut()
  }
  

  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <FaShoppingCart className="text-2xl text-orange-500" />
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
              SunCart
            </h1>
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500 transition"
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className={
                pathname === "/products"
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500 transition"
              }
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={
                pathname === "/profile"
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600 hover:text-orange-500 transition"
              }
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div>
          {!user && (
            <ul className="flex items-center gap-4">
              <Link
                href="/signin"
                className={
                  pathname === "/signin"
                    ? "px-4 py-1.5 rounded-lg border border-orange-500 text-orange-500"
                    : "text-gray-600 hover:text-orange-500 transition"
                }
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className={
                  pathname === "/signup"
                    ? "px-4 py-1.5 rounded-lg border border-orange-500 text-orange-500"
                    : "text-gray-600 hover:text-orange-500 transition"
                }
              >
                Sign Up
              </Link>
            </ul>
          )}
          {user && (
            <div className="flex gap-3">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                className="px-4 py-1.5 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition" variant="outline"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
