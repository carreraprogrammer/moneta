import React, { useState } from 'react';
import './GallerySlider.scss';

const GallerySlider: React.FC = () => {
  const [visibleProduct, setVisibleProduct] = useState<number>(0);
  const products: number[] = [0, 1, 2, 3];

  const changeProduct = (direction: 'left' | 'right') => {
    let newVisibleProduct = direction === 'right'
      ? Math.min(visibleProduct + 1, products.length - 1)
      : Math.max(visibleProduct - 1, 0);
    if (newVisibleProduct !== visibleProduct) {
      setVisibleProduct(newVisibleProduct);
    }
  };

  return (
    <div className='gallerySliderContainer'>
      <div className='rightArrow' onClick={() => changeProduct('right')}></div>
      <div className='leftArrow' onClick={() => changeProduct('left')}></div>
      {products.map((product, index) => (
        <div 
          key={index} 
          className='productContainer'
          style={{ transform: `translateX(-${visibleProduct * 100}%)` }}
        >
          <div className='productImage'></div>
          <div className='productInfo'>
            <h2 className='productName'>Nombre del producto {product}</h2>
            <p className='productDescription'>Descripción del producto</p>
            <p className='productPrice'>$100</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySlider;
