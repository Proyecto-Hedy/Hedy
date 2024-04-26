"use client";

import React from 'react';
import { useDataContext } from '@/context/data.context';
import Link from 'next/link';
import Button from "@/components/atoms/Button";
import Line from "@/components/atoms/Line";
import { toast } from "react-toastify";
import Image from "next/image";

const SHIPPING_COST = 0; 

const CartPage: React.FC = () => {
  const { cart, addToCart } = useDataContext();

  const calculateSubtotal = () => {
    return cart.reduce((subtotal, item) => subtotal + item.total, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + SHIPPING_COST;
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>, itemId: number) => {
    const selectedQuantity = parseInt(event.target.value, 10);

    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        const newTotal = item.price * selectedQuantity;
        addToCart(item);
        return { ...item, quantity: selectedQuantity, total: newTotal };
      }
      return item;
    });
  };

  const handleCheckout = () => {
    toast.success("Checkout successfully");
  };
return (
  <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>You don't have anything in your cart.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-2 ps-4 pe-4 m-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
            <div className="cartHeader grid grid-cols-4 items-center">
            <div className="text-lg">Item</div>
              <div className="text-lg">Quantity</div>
              <div className="text-lg">Price</div>
              <div className="text-lg">Total</div>
            </div>
            <Line />
            {cart.map((item, index) => (
              <div className="productContainer grid grid-cols-4 border-b border-gray-300 py-4 items-center" key={index}>
                <div className="flex items-center">
                <Image src={item.thumbnail} alt={item.title} width={64} height={64} className="productImage mr-4" style={{ width: "4rem", height: "4rem" }} />
                  <div className="productDetails p-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
                <div>
                  <div className="w-1/5">
                    <label htmlFor={`quantity-${item.id}`} className="font-semibold"></label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(event, item.id)}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {[...Array.from(Array(10).keys())].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-1/5">
                  <p className="text-lg">${item.price}</p>
                </div>
                <div className="w-1/5">
                  <p className="text-xl font-semibold text-right">${item.total}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1 ">
            <div className="bg-gray-bg p-2 rounded-lg m-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <p className="text-xl font-semibold pb-4">Summary</p>
              <Line />
              <p className="text-lg">Subtotal <span className="float-right">${calculateSubtotal()}</span></p>
              <p className="text-lg">Shipping <span className="float-right">${SHIPPING_COST}</span></p>
              <Line />
              <p className="text-lg">Total <span className="float-right">${calculateTotal()}</span></p>
              <Line />
              <Link href="checkout">
                <Button name="Go to Checkout" onClick={handleCheckout} />
              </Link>
            </div>
          </div>
        </div>
      )}
  </div>
);




};

export default CartPage;
