"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import ProductsTemplate from "@/modules/products/template/product-template";
import { useApi } from "@/hooks/useApi";
import { IProductData } from "@/interfaces/data.interfaces"; 

const Home = () => {
  const limit = 18; // Estableces el límite de productos a 18
  const [skip, setSkip] = useState(0); // Inicializas el valor de skip en 0
  const { data: products, isLoading, error, fetchData } = useApi<IProductData[]>(`?limit=${limit}&skip=${skip}`);

  useEffect(() => {
    fetchData(`?limit=${limit}&skip=${skip}`); 
  }, [fetchData, limit, skip]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-4">
          <h1 className="text-4xl font-bold text-center">Welcome to Purchase App</h1>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ProductsTemplate products={products || []} />
        )}
      </Container>
    </main>
  );
};

export default Home;
