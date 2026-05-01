import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProductsCard = ({ photo }) => {
  return (
    <Card className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{photo.name}</h3>
      <div className="relative w-full aspect-square">
        <Image
          src={photo.image}
          alt={photo.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-48 object-cover mt-2 mb-4 rounded-xl "
          width={300}
          height={300}
        />
        {/* <img
              src={photo.image}
              alt={photo.name}
              className="w-full h-48 object-cover rounded"
            /> */}
        <Chip size="sm" className="absolute top-2 right-2">
          {photo.category}
        </Chip>
      </div>
      <p className="text-gray-600">{photo.description}</p>
      <p className="text-xl font-bold text-green-600">
        ${photo.price.toFixed(2)}
      </p>
      <button
        href="#"
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-900 transition duration-300"
      >
        View Details
      </button>
    </Card>
  );
};

export default ProductsCard;
