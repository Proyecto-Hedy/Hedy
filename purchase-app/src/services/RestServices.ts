import { useEffect, useState } from "react";
import axios from "axios";

export interface RequestError {
  name: string;
  message: string;
  stack?: string;
}

const $URL = process.env.NEXT_PUBLIC_BD_URL;

export const useApi = <T,>(path?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<RequestError | undefined>();

  const fetchData = async (path: string) => {
    try {
      setIsLoading(true);
      console.log("Fetching data from:", `${$URL}${path}`);
      const response = await axios.get<T>(`${$URL}${path}`);
      console.log("🚀 ~ fetchData ~ $URL:", $URL)
      console.log("Data fetched:", response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        const error = {
          name: err.name, // the type of error
          message: err.message, // the description of the error
          stack: err.stack // the stack trace of the error
        };
        setError(error);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (path) {
      fetchData(path);
    }
  }, [path]);

  return { data, isLoading, error };
};

export default useApi;
