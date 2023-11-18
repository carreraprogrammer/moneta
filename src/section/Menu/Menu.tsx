import React from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import { MenuItem } from '../../assets/Information/Menu';

const Menu: React.FC = () => {
  const tintos: MenuItem[] = menu.filter((section: MenuItem) => section.subCategory === 'Tintos');

  return (
    <div id='menu'>
      <h1 id='menuTitle'>MENÚ</h1>
    </div>
  );
};

export default Menu;
