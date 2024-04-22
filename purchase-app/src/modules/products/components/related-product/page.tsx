import React from 'react';
import { IProductData } from '@/interfaces/data.interfaces';
import useApi from '@/hooks/useApi';

interface RelatedProductsProps {
  product: IProductData;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ product }) => {
  return(
    <div className="related-products">
      <h2>Productos Relacionados</h2>
      <p>No se encontraron productos relacionados.</p>
    </div>
  );
}

// const RelatedProducts: React.FC<RelatedProductsProps> = ({ product }) => {
//   const limit = 18; // Cantidad máxima de productos a obtener
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [relatedProducts, setRelatedProducts] = React.useState<IProductData[]>([]);
//   const { category } = product; // Obtener la categoría del producto actual

//   React.useEffect(() => {
//     // Función para obtener los productos relacionados por categoría
//     const fetchRelatedProducts = async () => {
//       try {
//         // Hacer la llamada a la API con el parámetro de categoría
//         const { data, isLoading, error } = useApi<any>(
//           `/products?limit=${limit}&skip=${skip}`
//         );

//         // Filtrar los productos por la misma categoría del producto actual
//         const filteredProducts = data.filter(p => p.category === category);

//         // Actualizar el estado con los productos relacionados y marcar como finalizada la carga
//         setRelatedProducts(filteredProducts);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error al cargar los productos relacionados:', error);
//         setIsLoading(false);
//       }
//     };

//     // Llamar a la función para obtener los productos relacionados
//     fetchRelatedProducts();
//   }, [category]); // Ejecutar el efecto cada vez que cambie la categoría del producto actual

//   // Manejar los casos de carga y errores
//   if (isLoading) {
//     return <p>Cargando...</p>;
//   }

//   if (relatedProducts.length === 0) {
//     return <p>No se encontraron productos relacionados.</p>;
//   }

//   // Renderizar los productos relacionados
//   return (
//     <div className="related-products">
//       <h2>Productos Relacionados</h2>
//       {relatedProducts.map((relatedProduct) => (
//         <div key={relatedProduct.id}>
//           <h3>{relatedProduct.title}</h3>
//           <p>{relatedProduct.description}</p>
//           {/* Añade aquí más detalles del producto como desees */}
//         </div>
//       ))}
//     </div>
//   );
// };


export default RelatedProducts;
