import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-orange-50 to-yellow-50 px-4 w-full h-full">

      {/* Big 404 */}
      <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found 😔
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-md hover:scale-105 transition duration-300"
      >
        🔙 Back to Home
      </Link>

      

    </div>
  );
}