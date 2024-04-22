import React from 'react';
import { IProductData } from '@/interfaces/data.interfaces';

interface ProductTabsProps {
  product: IProductData;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <div className="product-tabs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '.375rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
      <h3 style={{ margin: '10px 0', color: '#333', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Stock: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.stock}</span></h3>
      <h3 style={{ margin: '10px 0', color: '#333', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Brand: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.brand}</span></h3>
      <h3 style={{ margin: '10px 0', color: '#333', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Category: <span style={{ color: '#777', fontWeight: 'normal' }}>{product.category}</span></h3>
    </div>
  );
};

export default ProductTabs;