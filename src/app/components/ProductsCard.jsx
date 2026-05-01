import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProductsCard = ({ photo }) => {
  return (
    <Card className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{photo.name}</h3>
      <Image
        src={photo.image}
        alt={photo.name}
        className="w-full h-48 object-cover mt-2 mb-4 rounded"
        width={300}
        height={300}
      />
      {/* <img
              src={photo.image}
              alt={photo.name}
              className="w-full h-48 object-cover rounded"
            /> */}
      <p className="text-gray-600">{photo.description}</p>
      <p className="text-xl font-bold text-green-600">
        ${photo.price.toFixed(2)}
      </p>
      
    </Card>
  );
};

export default ProductsCard;
