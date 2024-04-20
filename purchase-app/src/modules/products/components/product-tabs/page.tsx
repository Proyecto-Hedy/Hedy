import React from 'react';
import { IProductData } from '@/interfaces/data.interfaces';

interface ProductTabsProps {
  product: IProductData;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <div className="product-tabs">
      <h3>Stock: {product.stock}</h3>
      <h3>Brand: {product.brand}</h3>
      <h3>Category: {product.category}</h3>
    </div>
  );
};

export default ProductTabs;
