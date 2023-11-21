import React, { useState, useRef } from 'react';
import menu from '../../assets/Information/Menu';
import './Menu.scss';
import MenuCard from '../../components/MenuCard/MenuCard';
import { MenuTypo, Category } from '../../assets/Information/Menu';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { imageFlipIn } from '../../animations/animations';

type MenuKey = keyof MenuTypo;

const Menu: React.FC = () => {
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const [menuData, setMenuData] = useState<MenuTypo>(menu);
  const [visibleSections, setVisibleSections] = useState(1);

  useScrollTriggerAnimations(menuSectionRef, [imageFlipIn]);

  const filterMenu = (category: string) => {
    const newMenuData = category === 'Todos' ? menu : { [category]: menu[category as MenuKey] };
    setMenuData(newMenuData);
    setVisibleSections(1); 
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
      <p><b>'Filtrar Categorias: '</b></p>
      <div className='buttonsContainer'>
        <button className='menuFilter' onClick={() => filterMenu('Todos')}>Todos</button>
        {Object.keys(menu).map(key => (
          <button key={key} className='menuFilter' onClick={() => filterMenu(key)}>{key}</button>
        ))}
      </div>
    </div>
  );

  const renderMenuSubcategoryFilters = () => {
    if (Object.keys(menuData).length === 1) {
      return (
        <div className='menuSubFilters'>
          <p><b>Filtrar Subcategorias: </b></p>
          {(menuData[Object.keys(menuData)[0] as MenuKey] as Category).subCategories.map((subCategory, index) => (
            <button key={index} className='menuSubFilter' onClick={() => filterMenuSubcategory(subCategory.name)}>{subCategory.name}</button>
          ))}
          <i className="fa-solid fa-filter-circle-xmark" onClick={() => filterMenu('Todos')}></i>
        </div>
      );
    }
    return null;
  };

  const showMoreSections = () => {
    const totalSections = Object.keys(menuData).length;
    if (visibleSections < totalSections) {
      setVisibleSections(visibleSections + 1);
    }
  };

  const showLessSections = () => {
    if (visibleSections > 1) {
      setVisibleSections(visibleSections - 1);
    }
  };

  const renderShowMoreButton = () => {
    const totalSections = Object.keys(menuData).length;
    if (visibleSections < totalSections) {
      return <button onClick={showMoreSections}>Mostrar más secciones</button>;
    }
    return null;
  };

  const renderShowLessButton = () => {
    if (visibleSections >= 2) {
      return <button onClick={showLessSections}>Mostrar menos</button>;
    }
    return null;
  };

  const renderMenuSections = () => (
    Object.keys(menuData).slice(0, visibleSections).map(key => (
      <div key={key} className='sectionContainer' ref={menuSectionRef}>
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
        <div className='buttonsContainer'>
          {renderShowLessButton()}
          {renderShowMoreButton()}
        </div>
      </div>
    </div>
  );
};

export default Menu;
