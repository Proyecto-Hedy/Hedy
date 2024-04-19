import React from "react";
import { IProductData } from "@/interfaces/data.interfaces"; 
import ProductPreview from "../components/product-preview";
import styles from "./product-template.module.css";

interface ProductsTemplateProps {
    products: IProductData[]; 
}

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({ products }) => {
    return (
        <div className={styles.productContainer}>
            {products.map((product) => (
                <ProductPreview key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsTemplate;
