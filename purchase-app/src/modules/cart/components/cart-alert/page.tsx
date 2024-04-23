import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartAlert = ({ product }: { product: any }) => {
  const { title } = product;

  // Mostrar la notificación
  toast.success(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <p>{title}</p>
      </div>

    </div>,
    //href={`pages/cart}`
    {
      position: 'bottom-right',
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  return null; 
};

export default cartAlert;
