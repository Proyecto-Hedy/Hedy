"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { useDataContext } from "@/context/data.context";
import { IProductData } from "@/interfaces/data.interfaces";

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
      // Puedes agregar más productos simulados aquí si lo deseas
    ];

    setProducts(simulatedProducts);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="text-lg mb-4">
          {user ? (
            <>
              <p>Welcome, {user.email} </p>
              <p>Your recent purchases:</p>
              <ul>
                {products.map((product) => (
                  <li key={product.id} className="flex items-center gap-4">
                    <img src={product.thumbnail} alt={product.title} className="w-16 h-16 rounded-md" />
                    <div>
                      <p className="text-lg font-semibold">{product.title}</p>
                      <p className="text-gray-600">{product.brand}</p>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </li>
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
