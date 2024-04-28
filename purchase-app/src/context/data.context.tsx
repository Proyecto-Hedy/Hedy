"use client"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "@/services/firebase";
import { IOrderPlaced, IProductData } from "@/interfaces/data.interfaces";

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
  setCart: Dispatch<SetStateAction<any | null>>;
  addToCart: (product: any) => void;
  clearCart: () => void;
  filteredProducts: IProductData[];
  setFilteredProducts: Dispatch<SetStateAction<IProductData[] | []>>;
  orderPlaced: IOrderPlaced | null
  setOrderPlaced: Dispatch<SetStateAction<IOrderPlaced | null>>;
}

interface IDataProvideProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const auth = getAuth(firebase.app)

// Creamos el Context con un obj predefinido
const DataContext = createContext<IDataContext>({
  user: null,
  setUser: () => {},
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  orderPlaced: null,
  setOrderPlaced: () => {},
});

// Creamos el Provider que envolvera nuestra app y/o componentes
export const DataProvider = ({ children }: IDataProvideProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProductData[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [orderPlaced, setOrderPlaced] = useState<IOrderPlaced | null>(null);

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
          return product
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
      user,
      setUser,
      cart,
      setCart,
      addToCart,
      clearCart,
      filteredProducts,
      setFilteredProducts,
      orderPlaced,
      setOrderPlaced
    }}>
      {children}
    </DataContext.Provider>
  );
}

// Creamos el Consumer para utilizar en la app
export function useDataContext() {
  return useContext(DataContext)
}