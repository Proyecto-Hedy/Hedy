import React from "react";
import { IProductData } from "@/interfaces/data.interfaces";
import Image from "next/image";

interface ProductPreviewProps {
  product: IProductData;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md relative">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
      />
      <div className="px-6 py-4 absolute bottom-0 left-0 right-0 bg-white bg-opacity-75">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPreview;


