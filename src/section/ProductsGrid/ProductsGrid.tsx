import React from 'react'
import './ProductsGrid.scss'
import { products, Product } from '../../assets/Information/Ecommerce'
import { useMobileScreen } from '../../customHooks/useIsMobile'

const ProductsGrid = () => {
  const isMobile = useMobileScreen()

  return (
    <div className='productsGridContainer'>
      {products.map((product:Product, index) => (
        <div key={index} className='productContainer'>
          <img src={isMobile ? product.imagenMovil : product.imagenPc} alt={product.nombre} className='productImage'/>
        </div>
      ))}
    </div>
  )
}

export default ProductsGrid