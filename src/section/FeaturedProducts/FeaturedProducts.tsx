import React from 'react'
import './FeaturedProducts.scss'
import GallerySlider from '../../components/GallerySlider/GallerySlider'

const FeaturedProducts = () => {
  return (
    <div className='featuredProductsContainer'>
      <h2 className='featuredProductsTitle'>PRODUCTOS DESTACADOS</h2>
      <GallerySlider />
    </div>
  )
}

export default FeaturedProducts