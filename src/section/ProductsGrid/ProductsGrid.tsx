import React from 'react'
import './ProductsGrid.scss'

const ProductsGrid = () => {
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='productsGridContainer'>
      {products.map((product, index) => (
        <div key={index} className='productContainer'>
          {product}
        </div>
      ))}
    </div>
  )
}

export default ProductsGrid