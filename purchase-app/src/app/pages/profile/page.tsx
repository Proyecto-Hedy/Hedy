"use client";

import React, { useEffect, useState } from "react";
import { useDataContext } from "@/context/data.context";
import { IProductData } from "@/interfaces/data.interfaces";
import Line from "@/components/atoms/Line";
import Image from "next/image";
import { toast } from "react-toastify";
import logOut from "@/services/auth/signOut";

const Profile: React.FC = () => {
  const { user } = useDataContext();
  const [products, setProducts] = useState<IProductData[]>([]);

  useEffect(() => {
    // Simulación de carga de productos
    const simulatedProducts: IProductData[] = [
    ];

    setProducts(simulatedProducts);
  }, []);

  const handleLogOut = async () => {
    const { message } = await logOut();
    toast.success(message, { toastId: "log out" });
  };

  return (
    <div className="mt-8 flex justify-center items-start p-8 m-16 gap-12 relative">
      <div className="flex w-full max-w-screen-lg">
        {user && (
          <div className="flex flex-col gap-3 mr-8" style={{ height: "500px", width: "500px" }}>
            <div className="bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8 flex-grow flex flex-col justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold mb-4">Account</h1>
                <Line />
                <ul className="flex flex-col gap-4 items-center">
                  <li>
                    <button className="text-blue-500 hover:underline ">
                      Orders
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button onClick={handleLogOut} className="text-blue-500 hover:underline">
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="border-l border-gray-300 h-full gap-3" />
        <div className={`flex flex-col w-${user ? "full" : "full"}`}>
          <div className="bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8"  style={{ width: user ? "800px" : "100%" }}>
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
                            <Image src={product.thumbnail} alt={product.title} layout="fill" objectFit="cover" />
                          </div>
                          <div className="w-full">
                          <p className="text-xl font-semibold">{product.title}</p>
                          <p className="flex justify-between text-gray-600">Brand <span className="float-right">{product.brand}</span></p>
                          <p className="flex justify-between text-gray-600">Price <span className="float-right">${product.price}</span></p>
                          <p className="flex justify-between text-gray-600">Quantity <span className="float-right">{product.quantity}</span></p>
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
      </div>
    </div>
  );
};

export default Profile;