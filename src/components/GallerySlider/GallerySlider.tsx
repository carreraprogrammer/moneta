import React, { useState, useRef } from 'react';
import './GallerySlider.scss';
import { useMobileScreen } from '../../customHooks/useIsMobile';
import { Product } from '../../assets/Information/Ecommerce';
import { ReactComponent as DiscountBtn } from '../../assets/Images/shopHomeBtn.svg';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { rotateAnimation, fadeInAnimation } from '../../animations/animations';

interface GallerySliderProps {
  products: Product[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ products }) => {
  const discountBtnRef = useRef<SVGSVGElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useScrollTriggerAnimations(discountBtnRef, [rotateAnimation]);
  useScrollTriggerAnimations(galleryRef, [fadeInAnimation]);

  const [visibleProduct, setVisibleProduct] = useState<number>(0);
  const isMobile: boolean = useMobileScreen();
  const featuredProducts = products.filter((product:Product) => product.destacado);

  const changeProduct = (direction: 'left' | 'right') => {
    let newVisibleProduct = direction === 'right'
      ? Math.min(visibleProduct + 1, featuredProducts.length - 1)
      : Math.max(visibleProduct - 1, 0);
    if (newVisibleProduct !== visibleProduct) {
      setVisibleProduct(newVisibleProduct);
    }
  };

  return (
    <div id='shopGallerySliderDiv'>
      <div className='discountContainer'>
          <p className='discountText'>
            {featuredProducts[visibleProduct].porcentajeDescuento}% OFF
          </p>
          <DiscountBtn className='discountBtn' ref={discountBtnRef} />
      </div>
      <div className='gallerySliderContainer' ref={galleryRef}>
        <div className='rightArrow' onClick={() => changeProduct('right')}></div>
        <div className='leftArrow' onClick={() => changeProduct('left')}></div>
        {featuredProducts.map((product:Product, index:number) => 
          <div 
            key={index} 
            className='productContainer'
            style={{ transform: `translateX(-${visibleProduct * 100}%)` }}
          >
            <img src={isMobile ? product.imagenDestacadaMovil : product.imagenDestacadaPc} alt={product.nombre} className='productImage'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySlider;
