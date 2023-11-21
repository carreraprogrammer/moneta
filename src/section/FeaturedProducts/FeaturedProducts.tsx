import React from 'react'
import './FeaturedProducts.scss'
import GallerySlider from '../../components/GallerySlider/GallerySlider'
import { products } from  '../../assets/Information/Ecommerce'


const FeaturedProducts = () => {
  return (
    <div className='featuredProductsContainer'>
      <h2 className='featuredProductsTitle'>PRODUCTOS DESTACADOS</h2>
      <GallerySlider products={products} />
    </div>
  )
}

export default FeaturedProducts