import { Button, Link } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <div className="flex items-center gap-2 cursor-pointer">
              {/* Icon */}
              <FaShoppingCart className="text-2xl text-orange-500" />

              {/* Text */}
              <h1 className="text-2xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                SunCart
              </h1>
            </div>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
