"use client"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/services/firebase";
import { IProductData } from "@/interfaces/data.interfaces";

/**
 * Para utilizar Context, hay 3 elementos importantes que debemos tener en cuenta:
 * - Context: es un objeto que contendra la data que queremos compartir atravez de la app.
 * - Provider: acepta una propiedad de "valor" que contiene los datos compartidos, y cualquier componente que sea hijo del componente Proveedor puede acceder a esos datos compartidos.
 * - Consumer: si vamos a manejar un solo context, como es el caso, lo ideal es crear un consumer para que sea mas facil importar.
 */
interface IDataContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  cart: any[];
  addToCart: (product: any) => void;
  clearCart: () => void;
  filteredProducts: IProductData[];
  setFilteredProducts: Dispatch<SetStateAction<IProductData[] | []>>;
}

interface IDataProvideProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const auth = getAuth(firebase_app)

// Creamos el Context con un obj predefinido
const DataContext = createContext<IDataContext>({
  user: null,
  setUser: () => {},
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
});

// Creamos el Provider que envolvera nuestra app y/o componentes
export const DataProvider = ({ children }: IDataProvideProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProductData[]>([]);
  const [cart, setCart] = useState<any[]>([]); 

  useEffect(() => {
    // Observador
    const unsubscribe = onAuthStateChanged(auth, () => {
      const user = auth.currentUser;
      if (user) {
          setUser(user);
      } else {
          setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Función para agregar productos al carrito
  const addToCart = (product: any) => {
    const isProductInCart = cart.some((item) => Number(item.id) === Number(product.id));

    if (isProductInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          const newQuantity = item.quantity + 1;
          const newTotal = item.price * newQuantity;
          return { ...item, quantity: newQuantity, total: newTotal };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const total = product.price;
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1, total }]);
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <DataContext.Provider value={{ 
      user, setUser, cart, addToCart, clearCart, filteredProducts, setFilteredProducts
    }}>
      {children}
    </DataContext.Provider>
  );
}

// Creamos el Consumer para utilizar en la app
export function useDataContext() {
  return useContext(DataContext)
}