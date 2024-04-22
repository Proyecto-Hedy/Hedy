"use client";
import React from "react";
import Container from "@/components/molecules/Container";
import ProductsTemplate from "@/modules/products/template/product-template";
import Pagination from "@/modules/pagination/page";
import { useApi } from "@/hooks/useApi";
import { IDataResponse } from "@/interfaces/data.interfaces";

const Home = () => {
  const limit = 18;
  const [skip, setSkip] = React.useState(0);
  const { data, isLoading, error } = useApi<IDataResponse>(
    `?limit=${limit}&skip=${skip}`
  );

  const handlePreviousClick = () => {
    setSkip((prev) => Math.max(0, prev - limit));
  };

  const handleNextClick = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-4">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Purchase App
          </h1>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ProductsTemplate products={data!.products} />
        )}
        <Pagination
          limit={limit}
          skip={skip}
          total={data?.total || 0}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
        <br />
      </Container>
    </main>
  );
};

export default Home;
