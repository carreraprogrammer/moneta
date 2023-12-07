import React, { forwardRef } from 'react';
import './ProductCard.scss';

interface ProductProps {
  product: {
    nombre: string;
    imagenMovil: string;
    imagenPc: string;
  };
  isMobile: boolean;
}

const ProductCard = forwardRef<HTMLDivElement, ProductProps>(({ product, isMobile }, ref) => {
  return (
    <div className='productContainer' ref={ref}>
      <img src={isMobile ? product.imagenMovil : product.imagenPc} alt={product.nombre} className='productImage'/>
      <div className='productOptions'>
        <p className='productName'>{product.nombre}</p>
        <div className='buttonsContainer'>
          <button className='seeMoreButton'><i className="fa-solid fa-eye"></i></button>
          <button className='addToCartButton'><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
