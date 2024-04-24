"use client";
import React from 'react';
import CartDetail from '@/modules/cart/template/cart-detail';
import { useDataContext } from '@/context/data.context';

const CartPage: React.FC = () => {
  const { cart } = useDataContext();
  
  return (
    <div className="container mx-auto py-8">
      <CartDetail cart={cart} setCart={() => {}} />
    </div>
  );
};

export default CartPage;
