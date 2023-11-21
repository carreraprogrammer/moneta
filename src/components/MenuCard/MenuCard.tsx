import React from 'react';
import { Category } from '../../assets/Information/Menu';

interface MenuCardProps {
  category: Category;
}

const MenuCard: React.FC<MenuCardProps> = ({ category }) => {
  return (
    <section className='menuSection'>
      {category.subCategories.map((subCategory, subIndex) => (
        <div key={subIndex} className='menuCard'>
          <h2 className='menuCardTitle'>{subCategory.name}</h2>
          <div className='menuCardItems'>
            {subCategory.products.map((item, index) => (
              <div className='menuItem' key={index}>
                <h3 className='menuItemTitle'>{item.name}</h3>
                <p className='menuItemDescription'><span>{item.productInfo}</span><span>${item.price}</span></p>
                <button className='addButton'>+</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuCard;
