import React from 'react'
import ShopHeader from '../../section/ShopHeader/ShopHeader'
import FeaturedProducts from '../../section/FeaturedProducts/FeaturedProducts'
import ProductsGrid from '../../section/ProductsGrid/ProductsGrid'
import Contact from '../../section/Contact/Contact'
import Footer from '../../section/Footer/Footer'
import useScrollToTop from '../../customHooks/useScrollToTop'

const Shop:React.FC = () => {
  
  useScrollToTop();

  return (
    <div>
      <ShopHeader />
      <FeaturedProducts />
      <ProductsGrid />
      <Contact />
      <Footer />
    </div>
  )
}

export default Shop
