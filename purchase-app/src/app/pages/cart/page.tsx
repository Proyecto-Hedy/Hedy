"use client";
import React from 'react';
import CartDetail from '@/modules/cart/template/cart-detail';
import { useDataContext } from '@/context/data.context';

const CartPage: React.FC = () => {
  const { cart } = useDataContext(); 
  return (
    <div className="cart-page">
      <CartDetail cart={cart} /> 
    </div>
  );
};

export default CartPage;
