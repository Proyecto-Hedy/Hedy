import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartAlert = ({ product }: { product: any }) => {
  const { title } = product;

  // Mostrar la notificación
  toast.success(
    <div className="flex items-center text-black">
      <p className="font-semibold mr-2">¡Agregado al carrito!</p>
      <p>{title}</p>
    </div>,
    //href={`pages/cart}`
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  return null;
};

export default cartAlert;
