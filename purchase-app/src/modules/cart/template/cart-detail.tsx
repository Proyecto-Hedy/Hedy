import Button from '@/components/atoms/Button';
import { navigate } from '@/services/actions';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface CartDetailProps {
  cart: CartItem[];
  setCart: (updatedCart: CartItem[]) => void; // Función para actualizar el carrito
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  total: number; 
}

const CartDetail: React.FC<CartDetailProps> = ({ cart, setCart }) => {
  const [total, setTotal] = useState<number>(0);
  const calculateTotal = () => {
    console.log(cart);
    return cart.reduce((total, item) => total + item.total, 0);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>, itemId: number) => {
    const selectedQuantity = parseInt(event.target.value, 10);
  
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        const newTotal = item.price * selectedQuantity;
        console.log(newTotal);
        return { ...item, quantity: selectedQuantity, total: newTotal };
      }
      return item;
    });
  
    //setCart(updatedCart);

  };

  const handlePlaceOrder = () => {
    toast.success("Order successfully placed")
    navigate("/pages/checkout")
  }

  return (
    <div className="cart-detail max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <div className="flex text-lg font-semibold">
            <div className="w-2/5">Producto</div>
            <div className="w-1/5">Cantidad</div>
            <div className="w-1/5">Precio</div>
            <div className="w-1/5">Total</div>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          {cart.map((item, index) => (
            <div className="flex items-center justify-between mb-4" key={index}>
              <div className="w-2/5 flex items-center">
                <div className="w-12 h-12 mr-4">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              <div className="w-1/5">
                <label htmlFor={`quantity-${item.id}`} className="font-semibold">Cantidad:</label>
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
              <div className="w-1/5">
                <p className="text-lg">${item.price}</p>
              </div>
              <div className="w-1/5">
                <p className="text-xl font-semibold">${item.total}</p>
              </div>
            </div>
          ))}
          <hr className="my-4 border-t border-gray-300" />
          <div className="text-right">
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
          </div>
          <Button name='Checkout' onClick={handlePlaceOrder} />
        </div>
      )}
    </div>
  );
};

export default CartDetail;
