"use client"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/services/firebase";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
/**
 * Para utilizar Context, hay 3 elementos importantes que debemos tener en cuenta:
 * - Context: es un objeto que contendra la data que queremos compartir atravez de la app.
 * - Provider: acepta una propiedad de "valor" que contiene los datos compartidos, y cualquier componente que sea hijo del componente Proveedor puede acceder a esos datos compartidos.
 * - Consumer: si vamos a manejar un solo context, como es el caso, lo ideal es crear un consumer para que sea mas facil importar.
 */
interface IDataContext {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
}

interface IDataProvideProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const auth = getAuth(firebase_app)

// Creamos el Context con un obj predefinido
const DataContext = createContext<IDataContext>({
  user: null,
  setUser: () => {},
});

// Creamos el Provider que envolvera nuestra app y/o componentes
export const DataProvider = ({ children }: IDataProvideProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      // Observador
        const unsubscribe = onAuthStateChanged(auth, () => {
          const user = auth.currentUser;
          if (user) {
              setUser(user.email);
          } else {
              setUser(null);
          }
          setLoading(false);
        });

        return () => unsubscribe();
    }, []);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {loading ? <LoadingSpinner /> : children}
    </DataContext.Provider>
  );
}

// Creamos el Consumer para utilizar en la app
export function useDataContext() {
  return useContext(DataContext)
}