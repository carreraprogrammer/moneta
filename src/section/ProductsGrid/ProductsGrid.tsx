import React, { useRef, useEffect, RefObject } from 'react';
import './ProductsGrid.scss';
import { products, Product } from '../../assets/Information/Ecommerce';
import { useMobileScreen } from '../../customHooks/useIsMobile';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { fadeInAnimation } from '../../animations/animations';

const ProductsGrid = () => {
  const isMobile = useMobileScreen();
  const productsRefArray: React.RefObject<HTMLDivElement>[] = [];

  products.forEach(() => {
    const productRef = useRef<HTMLDivElement>(null);
    productsRefArray.push(productRef);
  });

  productsRefArray.forEach((productRef: RefObject<HTMLDivElement>) => {
    useScrollTriggerAnimations(productRef, [fadeInAnimation]);
  });
  
  return (
    <div className='productsGridContainer'>
      {products.map((product: Product, index) => (
        <div key={index} className='productContainer' ref={productsRefArray[index]}>
          <img src={isMobile ? product.imagenMovil : product.imagenPc} alt={product.nombre} className='productImage'/>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
