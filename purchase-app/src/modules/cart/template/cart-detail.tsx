import React from 'react';

interface CartDetailProps {
  cart: CartItem[];
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  // Agrega más propiedades del producto según sea necesario
}

const CartDetail: React.FC<CartDetailProps> = ({ cart }) => {
  return (
    <div className="cart-detail">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              {/* Agrega más detalles del producto según sea necesario */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDetail;
