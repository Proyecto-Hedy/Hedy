import React from 'react';
import { IProductData } from '@/interfaces/data.interfaces';

interface ProductTabsProps {
  product: IProductData;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <div className="product-tabs">
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Stock: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.stock}</span></h3>
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Brand: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.brand}</span></h3>
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Category: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.category}</span></h3>
    </div>
  );
};

export default ProductTabs;