import Image from "next/image";
import React from "react";

const CardDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://assignment-08-sun-cart.vercel.app/data.json"
  );
  const data = await res.json();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6 p-6">
        
        {/* Image Section */}
        <div className="relative w-full h-80 bg-gray-50 rounded-xl overflow-hidden">
          <Image
            src={product?.image}
            alt={product?.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product?.name}
            </h1>

            <p className="text-gray-600 mb-4">
              {product?.description}
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product?.category}
              </p>

              <p>
                <span className="font-semibold">Rating:</span>{" "}
                ⭐ {product?.rating}
              </p>

              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {product?.stock}
              </p>
            </div>
          </div>

          {/* Price + Button */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              ${product?.price.toFixed(2)}
            </h2>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;