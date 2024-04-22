"use client";
import Link from 'next/link';
import React from "react";
import Container from "@/components/molecules/Container";
import ProductsTemplate from "@/modules/products/template/product-template";
import { useApi } from "@/hooks/useApi";
import { IDataResponse } from "@/interfaces/data.interfaces";

const Home = () => {
  const limit = 18;
  const [skip, setSkip] = React.useState(0);
  const { data, isLoading, error } = useApi<IDataResponse>(`?limit=${limit}&skip=${skip}`);

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
          <ProductsTemplate products={data!.products} />
        )} 
        <div className="flex justify-center space-x-4">
          <button
            className="btn btn-primary"
            onClick={() => setSkip((prev) => prev - limit)}
            disabled={skip === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setSkip((prev) => prev + limit)}
            disabled={data?.products.length !== limit}
          >
            Next
          </button>
        </div>

      </Container>
    </main>
  );
};

export default Home;
