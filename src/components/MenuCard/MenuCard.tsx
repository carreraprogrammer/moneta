import React from 'react';
import { Category } from '../../assets/Information/Menu';

interface MenuCardProps {
  category: Category;
}

const MenuCard: React.FC<MenuCardProps> = ({ category }) => {
  return (
    <section className='menuCard'>
      {category.subCategories.map((subCategory, subIndex) => (
        <div key={subIndex}>
          <h2 className='menuCardTitle'>{subCategory.name}</h2>
          <div className='menuCardItems'>
            {subCategory.products.map((item, index) => (
              <div className='menuItem' key={index}>
                <h3 className='menuItemTitle'>{item.name}</h3>
                <p className='menuItemDescription'>{item.productInfo}</p>
                <p className='menuItemPrice'>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuCard;
