import React from 'react';

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
}

const CartDetail: React.FC<CartDetailProps> = ({ cart, setCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>, itemId: number) => {
    const selectedQuantity = parseInt(event.target.value, 10);

    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: selectedQuantity };
      }
      return item;
    });

    setCart(updatedCart); // Actualizamos el estado del carrito
  };

  return (
    <div className="cart-detail">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <div className="flex text-lg font-semibold">
            <div className="w-1/4">Producto</div>
            <div className="w-1/4">Cantidad</div>
            <div className="w-1/4">Precio</div>
            <div className="w-1/4">Total</div>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          {cart.map((item) => (
            <div className="flex items-center justify-between mb-4" key={item.id}>
              <div className="w-1/4 flex items-center">
                <div className="w-12 h-12 mr-4">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            <div className="w-1/4">
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
              <div className="w-1/4">
                <p className="text-lg">${item.price}</p>
              </div>
              <div className="w-1/4">
                <p className="text-lg">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4">Total: ${calculateTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
