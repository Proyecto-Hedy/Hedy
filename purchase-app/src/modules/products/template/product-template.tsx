import React from "react";
import { IProductData } from "@/interfaces/data.interfaces"; 
import ProductPreview from "../components/product-preview/product-preview";
import styles from "./product-template.module.css";
import Link from 'next/link';

interface ProductsTemplateProps {
    products: IProductData[]; 
}

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({ products }) => {
    return (
        <div className={styles.productContainer}>
            {products.map((product) => (
                <Link href={`pages/product/${product.id}`} key={product.id}>
                    <div>
                        <ProductPreview product={product} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductsTemplate;
