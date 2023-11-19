import React from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import MenuCard from '../../components/MenuCard/MenuCard';
import { MenuTypo } from '../../assets/Information/Menu';

type MenuKey = keyof MenuTypo;

const Menu: React.FC = () => {
  return (
    <div id='menu'>
      <h1 id='menuTitle'>MENÚ</h1>
      {Object.keys(menu).map((key)=> (
        <div key={key} className='sectionContainer'>
          <h2 className='sectionTitle'>{key}</h2>
          <MenuCard category={menu[key as MenuKey]} />
        </div>
      )
      )}
    </div>
  );
};

export default Menu;
