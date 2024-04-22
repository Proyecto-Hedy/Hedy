import React from "react";
import { IProductData } from "@/interfaces/data.interfaces";
import Image from "next/image";
import styles from "../../template/product-template.module.css";

interface ProductPreviewProps {
  product: IProductData;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  return (
    <div className={`${styles["product-preview"]} max-w-xs rounded-lg overflow-hidden shadow-md relative`}>
      <div className={`${styles["image-wrapper"]}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
        />
      </div>
      <div className="px-4 py-2 z-50 flex items-center justify-between bg-white">
        <div className="font-bold text-lg mb-1">{product.title}</div>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
