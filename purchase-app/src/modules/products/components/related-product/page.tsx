import React from 'react';
import { IProductData } from '@/interfaces/data.interfaces';

interface RelatedProductsProps {
  product: IProductData;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ product }) => {
  // Lógica para obtener productos relacionados según la categoría y marca del producto actual
  
  return (
    <div className="related-products">
      {/* Muestra los productos relacionados */}
    </div>
  );
};

export default RelatedProducts;
