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
    <div className="product-detail" style={{ marginTop: '50px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', alignItems: 'center' }}>
        <div className="product-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '400px', height: 'auto' }}>
          <h2 style={{ fontSize: '2em' }}>{product.title}</h2>
          <p style={{ textAlign: 'center' }}>{product.description}</p>
        </div>
        <div className="thumbnail-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Image src={thumbnail} alt="Thumbnail" width={400} height={500} />
        </div>
        <div className="product-price" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <ProductTabs product={product} />
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Price: ${product.price}</h3>
        </div>
      </div>
      <ImageGallery images={otherImages} />
      <div className="related-products">
        <RelatedProducts product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;