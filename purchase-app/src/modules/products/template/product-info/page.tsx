import React from "react";
import Image from "next/image"; // Importar el componente Image de Next.js
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
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="thumbnail-wrapper">
        <Image src={thumbnail} alt="Thumbnail" width={300} height={400} />
      </div>
      <div className="product-price">
        <p>Price: ${product.price}</p>
        <ProductTabs product={product} />
      </div>
      <div className="image-gallery">
        <ImageGallery images={otherImages} />
      </div>
      <div className="related-products">
        <RelatedProducts product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
