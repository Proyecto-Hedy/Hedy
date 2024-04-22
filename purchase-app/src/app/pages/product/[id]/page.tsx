"use client";
import React from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/modules/products/template/product-info/page";
import useApi from "@/hooks/useApi";

type Props = {
  params: { id: number };
};

const ProductPage: React.FC<Props> = ({ params }) => {
  const { data, isLoading, error } = useApi<any>(`/${params.id}`);

  if (error) {
    console.error("Error al obtener el producto:", error);
    notFound();
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!data) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <ProductDetail product={data} />
    </div>
  );
};

export default ProductPage;