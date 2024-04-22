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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <div className="product-info" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className="thumbnail-wrapper" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Image src={thumbnail} alt="Thumbnail" width={400} height={500} />
        </div>
        <div className="product-price" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p>Price: ${product.price}</p>
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="image-gallery" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '15px' }}>
        {otherImages.map((image, index) => (
          <div key={index} style={{ margin: '5px' }}>
            <Image src={image} alt={`Gallery image ${index}`} width={300} height={300} />
          </div>
        ))}
      </div>
      <div className="related-products">
        <RelatedProducts product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;