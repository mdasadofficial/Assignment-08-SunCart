import React from "react";
import ProductsCard from "../components/ProductsCard";
import { Card } from "@heroui/react";

const Products = async ({ photo }) => {
  const res = await fetch(
    "https://assignment-08-sun-cart.vercel.app/data.json",
  );
  const photos = await res.json();
  console.log(photos, "photos");
  return (
    <div>
      <h1>All Products</h1>
      <Card className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <ProductsCard key={photo.id} photo={photo} />
        ))}
      </Card>
    </div>
  );
};

export default Products;
