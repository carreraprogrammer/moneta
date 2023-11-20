import React from 'react'
import './FeaturedProducts.scss'
import GallerySlider from '../../components/GallerySlider/GallerySlider'

const FeaturedProducts = () => {
  return (
    <div className='featuredProductsContainer'>
      <GallerySlider />
    </div>
  )
}

export default FeaturedProducts