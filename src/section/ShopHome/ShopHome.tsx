import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ShopBtn } from '../../assets/Images/shopHomeBtn.svg';
import shopArticles from '../../assets/Images/shopArticles.png';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { fadeInAnimation, rotateAnimation, unveilImageAnimation } from '../../animations/animations';
import './ShopHome.scss';

const ShopHome: React.FC = () => {
  // Refs for each element
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const navLinkRef = useRef<SVGSVGElement | null>(null); // Suponiendo que ShopBtn es un SVG

  // Applying the hook
  useScrollTriggerAnimations(titleRef, [fadeInAnimation]);
  useScrollTriggerAnimations(descriptionRef, [fadeInAnimation]);
  useScrollTriggerAnimations(imageRef, [unveilImageAnimation]);
  useScrollTriggerAnimations(navLinkRef, [rotateAnimation]);

  const rotateImage = () => {
    const imageContainer = document.getElementById('shopImageContainer');
    if (imageContainer) {
      imageContainer.style.transform = 'rotate(3deg)';
    }
  }

  const rotateImageBack = () => {
    const imageContainer = document.getElementById('shopImageContainer');
    if (imageContainer) {
      imageContainer.style.transform = 'rotate(0deg)';
    }
  }

  return (
    <div id='shopSection'>
      <h2 id='shopTitle' ref={titleRef}>NUESTRA TIENDA</h2>
      <p id='shopDescription' ref={descriptionRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit..
      </p>
      <div id='shopImageContainer' >
        <img src={shopArticles} alt='shopArticles' ref={imageRef}/>
        <NavLink id='shopBtn' to='/Shop' onMouseOver={rotateImage} onMouseLeave={rotateImageBack}>
          <p id='shopBtnText'>Tienda</p>
          <ShopBtn id='shopBtnImage' ref={navLinkRef}/>
        </NavLink>
      </div>
    </div>
  );
};

export default ShopHome;
