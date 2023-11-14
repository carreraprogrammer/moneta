import React from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';

// Define the structure of a menu item
interface MenuItem {
  subCategory: string;
  name: string;
  productInfo: string;
}

const Menu: React.FC = () => {
  // Assuming menu is an array of MenuItem
  const tintos: MenuItem[] = menu.filter((section: MenuItem) => section.subCategory === 'Tintos');

  return (
    <div id='menu'>
      <h1 id='menuTitle'>MENÚ</h1>
      <div id='tintos'>
        <h2>{tintos[0]?.subCategory}</h2>
        {tintos.map((tinto: MenuItem) => (
          <div className='menuProduct' key={tinto.name}>
            <h3>{tinto.name}</h3>
            <p>{tinto.productInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
