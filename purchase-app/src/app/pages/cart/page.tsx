"use client";
import React from 'react';
import CartDetail from '@/modules/cart/template/cart-detail';
import { useDataContext } from '@/context/data.context';
import { CartItem } from '@/modules/cart/template/cart-detail';

const CartPage: React.FC = () => {
  const { cart } = useDataContext(); 
  return (
    <div className="cart-page">
      <CartDetail cart={cart} setCart={() => {}} />
    </div>
  );
};

export default CartPage;
