import React from "react";

import Image from "next/image"; 
import ImageGallery from "@/modules/products/components/image-gallery/page";
import ProductTabs from "@/modules/products/components/product-tabs/page";
import { IProductData } from "@/interfaces/data.interfaces";
import Button from "@/components/atoms/Button";
import { useDataContext } from "@/context/data.context";
import { toast } from "react-toastify";
import { navigate } from "@/services/actions";

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { thumbnail, images } = product; 
  const otherImages = images.filter((image) => image !== thumbnail); 
  const { cart, addToCart, user } = useDataContext();

  const checkUser = () => {
    if (!user) {
      navigate("/pages/account")
      return false
    } 
    else {
      return true
    }
  }

  const handleAddToCart = () => {
    if (checkUser()) {
      const isProductInCart = cart.some((item) => item.id === product.id);
  
      if (isProductInCart) {
        toast.warning(`${product.title} is already added`)
      }
      else {
        addToCart(product);
        toast.success(`${product.title} successfully added`)
      }
    }
  }

  return (
    <div className="product-detail" style={{ marginTop: '50px', marginBottom: '5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', alignItems: 'center', margin: '5rem' }}>
        <div className="product-info" 
          style={{ maxWidth: '80%', height: '100%', marginLeft: '90px' }}>
          <h2 style={{ fontSize: '2em', textTransform: 'capitalize' }}>{product.title}</h2>
          <br />
          <p>{product.description}</p>
        </div>
        <div className="thumbnail-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', overflow: 'hidden' }}>
          <Image src={thumbnail} alt="Thumbnail" width={500} height={500} />
        </div>
        <div className="product-price" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
          <ProductTabs product={product} />
          <div>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.5em', fontWeight: 'bold' }}>Price: <span style={{ color: '#777', fontWeight: 'normal' }}>${product.price}</span></h3>
            <Button
              className="mb-0 mt-8 bg-black-btn hover:bg-black-hover hover:text-white text-xl font-medium text-gray-bg-light"
              name="Add to cart"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <div style={{ height: '1px', border: '2px solid rgb(23 26 37)', margin: '5rem' }}></div>
      <div className="image-gallery">
        <ImageGallery images={otherImages} />
      </div>
    </div>
  );
};

export default ProductDetail;