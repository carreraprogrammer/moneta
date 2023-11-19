import React from 'react'
import './ShoppingListButton.scss'
import { ReactComponent as OrderIcon } from '../../assets/Images/orderImage.svg'

const ShoppingListButton:React.FC = () => {
  return (
    <button id='order-button'>
      <OrderIcon id='order-icon'/>
    </button>
  )
}

export default ShoppingListButton