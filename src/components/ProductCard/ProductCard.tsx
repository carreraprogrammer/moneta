import React, { RefObject } from 'react';
import './ProductCard.scss';

interface ProductProps {
  product: {
    nombre: string;
    imagenMovil: string;
    imagenPc: string;
  };
  isMobile: boolean;
  ref: RefObject<HTMLDivElement>;
}

const ProductCard: React.FC<ProductProps> = ({ product, isMobile, ref }) => {
  return (
    <div className='productContainer' ref={ref}>
      <img src={isMobile ? product.imagenMovil : product.imagenPc} alt={product.nombre} className='productImage'/>
    </div>
  );
};

export default ProductCard;
