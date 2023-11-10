import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ShopBtn } from '../../assets/Images/shopHomeBtn.svg';
import shopArticles from '../../assets/Images/shopArticles.png';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { fadeInAnimation, rotateAnimation, unveilImageAnimation } from '../../animations/animations';
import './ShopHome.scss';

const ShopHome = () => {
  // Refs for each element
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const navLinkRef = useRef(null);

  // Applying the hook
  useScrollTriggerAnimations(titleRef, [fadeInAnimation]);
  useScrollTriggerAnimations(descriptionRef, [fadeInAnimation]);
  useScrollTriggerAnimations(imageRef, [unveilImageAnimation]);
  useScrollTriggerAnimations(navLinkRef, [rotateAnimation]);

  return (
    <div id='shopSection'>
      <h1 id='shopTitle' ref={titleRef}>Nuestra Tienda</h1>
      <p id='shopDescription' ref={descriptionRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      <div id='shopImageContainer' >
        <img src={shopArticles} alt='shopArticles' ref={imageRef}/>
        <NavLink id='shopBtn' to='/Shop' >
          <p id='shopBtnText'>Tienda</p>
          <ShopBtn id='shopBtnImage' ref={navLinkRef}/>
        </NavLink>
      </div>
    </div>
  );
};

export default ShopHome;
