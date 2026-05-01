import Image from 'next/image';
import React from 'react';

const CardDetailsPage = async  ({params}) => {
    const { id } = await params;
    const res = await fetch(`https://assignment-08-sun-cart.vercel.app/data.json`);
    const data = await res.json();
    const product = data.find(item => item.id === parseInt(id));
    console.log(product, "product details");    
    return (
        <div>
            <h1>All Products Details</h1>
                
                <h2>{product?.name}</h2>
                <p>{product?.description}</p>
                <p>Price: ${product?.price.toFixed(2)}</p>
                <p>Category: {product?.category}</p>
                <p>Rating: {product?.rating}</p>
                <p>Stock: {product?.stock}</p>
                <div className="relative w-full aspect-square">
                {/* <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-48 object-cover rounded"
                /> */}
                </div>

        </div>
    );
};

export default CardDetailsPage;