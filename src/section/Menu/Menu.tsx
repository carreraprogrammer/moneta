import React, { useState } from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import MenuCard from '../../components/MenuCard/MenuCard';
import { MenuTypo, Category } from '../../assets/Information/Menu';

type MenuKey = keyof MenuTypo;

const Menu: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuTypo>(menu);

  const filterMenu = (category: string) => {
    const newMenuData = category === 'Todos' ? menu : { [category]: menu[category as MenuKey] };
    setMenuData(newMenuData);
  };

  const filterMenuSubcategory = (subcategory: string) => {
    const category = Object.keys(menuData)[0];
    const subCategoryData = (menuData[category as MenuKey] as Category).subCategories.find(sc => sc.name === subcategory);
    
    if (subCategoryData) {
      setMenuData({ [category]: { subCategories: [subCategoryData] } });
    }
  };

  const renderMenuFilters = () => (
    <div id='menuFilters'>
      <button className='menuFilter' onClick={() => filterMenu('Todos')}>Todos</button>
      {Object.keys(menu).map(key => (
        <button key={key} className='menuFilter' onClick={() => filterMenu(key)}>{key}</button>
      ))}
    </div>
  );

  const renderMenuSubcategoryFilters = () => {
    if (Object.keys(menuData).length === 1) {
      return (
        <div className='menuSubFilters'>
          {(menuData[Object.keys(menuData)[0] as MenuKey] as Category).subCategories.map((subCategory, index) => (
            <button key={index} className='menuSubFilter' onClick={() => filterMenuSubcategory(subCategory.name)}>{subCategory.name}</button>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderMenuSections = () => (
    Object.keys(menuData).map(key => (
      <div key={key} className='sectionContainer'>
        <h2 className='sectionTitle'>{key}</h2>
        <MenuCard category={menuData[key as MenuKey] as Category} />
      </div>
    ))
  );

  return (
    <div id='menu'>
      <h1 id='menuTitle'>MENÚ</h1>
      {renderMenuFilters()}
      {renderMenuSubcategoryFilters()}
      <div id='menuContainer'>
        {renderMenuSections()}
      </div>
    </div>
  );
};

export default Menu;
