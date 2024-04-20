// ProductDetail.tsx

import React from 'react';
import ImageGallery from '@/modules/products/components/image-gallery/page';
import ProductTabs from '@/modules/products/components/product-tabs/page';
import RelatedProducts from '@/modules/products/components/related-product/page';
import { IProductData } from '@/interfaces/data.interfaces';

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <ImageGallery images={product.images} />
      <ProductTabs product={product} />
      <RelatedProducts product={product} />
    </div>
  );
};

export default ProductDetail;
