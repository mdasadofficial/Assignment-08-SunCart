
import ProductsCard from "./ProductsCard";


const PopularProducts = async () => {
  const res = await fetch(
    "https://assignment-08-sun-cart.vercel.app/data.json",
  );
  const photos = await res.json();
  // console.log(photos,"photos");

  const topBrands = photos.slice(0, 3);
  //   console.log(topBrands, "topBrands");

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-10">
        🌟 Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topBrands.map((photo) => (
          <div key={photo.id} className="bg-white p-4 rounded-lg shadow-md">
            <ProductsCard photo={photo} />
            
            <button href="#" className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-900 transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
