"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
/**
 * Para utilizar Context, hay 3 elementos importantes que debemos tener en cuenta:
 * - Context: es un objeto que contendra la data que queremos compartir atravez de la app.
 * - Provider: acepta una propiedad de "valor" que contiene los datos compartidos, y cualquier componente que sea hijo del componente Proveedor puede acceder a esos datos compartidos.
 * - Consumer: si vamos a manejar un solo context, como es el caso, lo ideal es crear un consumer para que sea mas facil importar.
 */
interface IDataContext {
  user?: string;
  setUser: Dispatch<SetStateAction<string>>;
}

interface IDataProvideProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

// Creamos el Context con un obj predefinido
const DataContext = createContext<IDataContext>({
  user: "",
  setUser: () => {},
});

// Creamos el Provider que envolvera nuestra app y/o componentes
export const DataProvider = ({ children }: IDataProvideProps) => {
  const [user, setUser] = useState<string>("");

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
}

// Creamos el Consumer para utilizar en la app
export function usePokemonContext() {
  return useContext(DataContext)
}