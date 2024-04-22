import React from "react";
import Image from "next/image"; 
import ImageGallery from "@/modules/products/components/image-gallery/page";
import ProductTabs from "@/modules/products/components/product-tabs/page";
import RelatedProducts from "@/modules/products/components/related-product/page";
import { IProductData } from "@/interfaces/data.interfaces";

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { thumbnail, images } = product; // Obtener la imagen de portada
  const otherImages = images.filter((image) => image !== thumbnail); // Filtrar las demás imágenes

  return (
    <div className="product-detail">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="product-info" style={{ flex: 1 }}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className="thumbnail-wrapper" style={{ flex: 1 }}>
          <Image src={thumbnail} alt="Thumbnail" width={300} height={400} />
        </div>
        <div className="product-price" style={{ flex: 1 }}>
          <p>Price: ${product.price}</p>
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="image-gallery" style={{ width: '100%', marginTop: '20px' }}>
        <ImageGallery images={otherImages} />
      </div>
      <div className="related-products">
        <RelatedProducts product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;