"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/molecules/Container";
import ProductsTemplate from "@/modules/products/template/product-template";
import Pagination from "@/modules/pagination/page";
import { useApi } from "@/hooks/useApi";
import { IDataResponse, IProductData } from "@/interfaces/data.interfaces";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { useDataContext } from "@/context/data.context";

const Home = () => {
  const { filteredProducts } = useDataContext()

  const [products, setProducts] = useState<IProductData[]>([])
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

  useEffect(() => {
    if (filteredProducts.length) {
      setProducts(filteredProducts)
    }
    else if (data) {
      setProducts(data.products)
    }
  }, [data, filteredProducts])

  return (
    <main className="m-20 mb-4 flex min-h-screen flex-col items-center justify-between">
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ProductsTemplate products={products} />
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
