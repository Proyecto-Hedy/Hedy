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
        )} {/* Added closing parenthesis here */}
        {/* Mapea los productos y crea un enlace dinámico para cada uno */}
        {data && data.products && data.products.map(product => (
  <div key={product.id}>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    {/* Enlace dinámico que lleva al usuario a la página de detalles del producto */}
    <Link href={`/products/${product.id}`}>
  <div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    {/* Otro contenido relacionado con el producto */}
  </div>
</Link>
  </div>
))}

      </Container>
    </main>
  );
};

export default Home;
