"use client";

import React, { useState } from 'react';
import { useDataContext } from '@/context/data.context';
import Link from 'next/link';
import Button from "@/components/atoms/Button";
import Line from "@/components/atoms/Line";
import { toast } from "react-toastify";

const SHIPPING_COST = 0; 

const CartPage: React.FC = () => {
  const { cart, addToCart } = useDataContext();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

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
    // setCart(updatedCart);
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
        <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="cartHeader grid grid-cols-4">
            <div>Item</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total</div>
          </div>
          <Line />
          {cart.map((item, index) => (
            <div className="productContainer grid grid-cols-4 border-b border-gray-300 py-4" key={index}>
              <div className="flex items-center">
                <img src={item.thumbnail} alt={item.title} className="productImage w-16 h-16 mr-4" />
                <div className="productDetails">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              <div>
                <div className="w-1/5">
                  <label htmlFor={`quantity-${item.id}`} className="font-semibold">Cant.:</label>
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
        <div className="lg:col-span-1">
          <div className="bg-gray-bg p-4 rounded-lg">
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
    
    </div>
  )};
  </div>
  );
};

export default CartPage;
