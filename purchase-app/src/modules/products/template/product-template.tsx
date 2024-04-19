import React from "react";
import { IProductData } from "@/interfaces/data.interfaces"; 
import ProductPreview from "../components/product-preview";

interface ProductsTemplateProps {
  products: IProductData[]; 
}

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.isArray(products) && products.map((product) => (
  <ProductPreview key={product.id} product={product} />
))}

    </div>
  );
};

export default ProductsTemplate;
