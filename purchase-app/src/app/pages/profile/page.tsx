"use client";

import React, { useEffect, useState } from "react";
import { useDataContext } from "@/context/data.context";
import { IProductData } from "@/interfaces/data.interfaces";
import Line from "@/components/atoms/Line";
import Image from "next/image";

const Profile: React.FC = () => {
  const { user } = useDataContext();
  const [products, setProducts] = useState<IProductData[]>([]);

  useEffect(() => {
    // Simulación de carga de productos
    const simulatedProducts: IProductData[] = [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        ],
        total: 549,
        quantity: 1,
      },
      
    ];

    setProducts(simulatedProducts);
  }, []);

  return (
    <div className="mt-8 flex justify-center items-start p-8 m-16 mt-8 gap-12 relative">
      <div className="w-full max-w-screen-lg bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="text-4xl font-semibold mb-8">Orders</h1>
        <div className="text-xl mb-8">
          {user ? (
            <>
              <div className="mt-8 flex justify-center items-start relative">
                <p className="text-gray-600 text-sm mb-4 text-right absolute top-0 right-0 mt-[-50px]">
                Signed in as: {user.email}
                </p>
              </div>
              <p>Your recent purchases:</p>
              <Line />
              <ul>
                {products.map((product, index) => (
                  <div key={product.id}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-28 h-28 rounded-md overflow-hidden">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">{product.title}</p>
                        <p className="text-gray-600">{product.brand}</p>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-gray-600">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                    {index !== products.length - 1 && (
                      <hr className="my-4 border-gray-300" />
                    )}
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <p>Please sign in to view your profile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
