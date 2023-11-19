import React, { useState, useEffect } from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import MenuCard from '../../components/MenuCard/MenuCard';
import { MenuTypo, Category } from '../../assets/Information/Menu';

type MenuKey = keyof MenuTypo;

const Menu: React.FC = () => {

  const [menuData, setMenuData] = React.useState<MenuTypo>(menu);

  const filterMenu = (category: string) => {
    if (category === 'Todos') {
      setMenuData(menu);
    } else if (category in menu) {
      setMenuData(()=> { return { [category]: menu[category as MenuKey]}});
    }
    console.log(category);
    console.log(menuData);
  }

  const filterMenuSubcategory = (subcategory: string) => {
    const category = Object.keys(menuData)[0]
    const subCategory = (menuData[category as MenuKey] as Category).subCategories.filter((subCategory) => subCategory.name === subcategory)[0]
    
    setMenuData(()=> { return { [category]: { subCategories: [subCategory] } }});
  }

  return (
    <div id='menu'>
      <h1 id='menuTitle'>MENÚ</h1>
      <div id='menuFilters'>
          <button className='menuFilter' onClick={() => filterMenu('Todos')}>Todos</button>
        {Object.keys(menu).map((key)=> (
          <button key={key} className='menuFilter' onClick={() => filterMenu(key)}>{key}</button>
        ))}
      </div>
      <div id='menuSubcategoryFilters'>
        { Object.keys(menuData).length === 1 ? 
          <div className='menuSubFilters'>
            {Object.keys(menuData).map((key)=> (
              (menuData[key as MenuKey] as Category).subCategories.map((subCategory, index) => (
                <button key={index} className='menuSubFilter' onClick={() => filterMenuSubcategory(subCategory.name)}>{subCategory.name}</button>
              ))
            ))}
          </div>
        : null }
      </div>
      <div id='menuContainer'>
        {Object.keys(menuData).map((key)=> (
          <div key={key} className='sectionContainer'>
            <h2 className='sectionTitle'>{key}</h2>
            <MenuCard category={menuData[key as MenuKey] as Category} />
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Menu;
