import React from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import { MenuItem } from '../../assets/Information/Menu';

const Menu: React.FC = () => {
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
