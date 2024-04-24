 "use client";
import React, { useState } from 'react';
// import CartDetail from '@/modules/cart/template/cart-detail'; // ya no necesitas esta importación
import { useDataContext } from '@/context/data.context';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  total: number; 
}

const SHIPPING_COST = 10; // Costo de envío fijo (puedes cambiarlo según sea necesario)

const CartPage: React.FC = () => {
  const { cart, addToCart } = useDataContext();
  const [cartFilter, setCartFilter] = useState<any>([]);

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

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="cartHeader grid grid-cols-4">
            <div>Producto</div>
            <div>Cantidad</div>
            <div>Precio</div>
            <div>Total</div>
          </div>
          <hr className="my-4 border-t border-gray-300" />
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
          <hr className="my-4 border-t border-gray-300" />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-bg p-4 rounded-lg">
            <p className="text-xl font-semibold mb-4 border-b border-gray-300 pb-4">Total de la compra</p>
            <p className="text-lg">Subtotal: <span className="float-right">${calculateSubtotal()}</span></p>
            <p className="text-lg">Costo de envío: <span className="float-right">${SHIPPING_COST}</span></p>
            <hr className="my-4 border-t border-gray-300" />
            <p className="text-lg">Total: <span className="float-right">${calculateTotal()}</span></p>
            {/* Aquí puedes agregar más información adicional si lo deseas */}
            <button className="bg-black-btn hover:bg-black-hover text-white font-bold py-2 px-8 rounded-full mt-4 block w-full">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
