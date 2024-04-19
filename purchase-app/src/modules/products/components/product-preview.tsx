import React from "react";
import { IProductData } from "@/interfaces/data.interfaces"; 

interface ProductPreviewProps {
  product: IProductData; 
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.thumbnail} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
