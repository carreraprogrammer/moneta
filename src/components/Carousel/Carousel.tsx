import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import './Carousel.scss'
import carousel from '../../assets/Images/carouselOne.png'
import sandwich from '../../assets/Images/carouselSandwich.png'
import { ReactComponent as CoffeeBeans } from '../../assets/Images/coffee_beans.svg'
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { useMobileScreen } from '../../customHooks/useIsMobile';

const Carousel: React.FC = () => {
  const coffeeBeans = useRef<SVGSVGElement>(null);
  const carouselOne = useRef<HTMLDivElement>(null);
  const isMobile = useMobileScreen();

  const coffeeBeansAnimations = [{
    from: {rotate: 0},
    to: { rotate: 360},
    options: { scrub: 3, trigger: carouselOne.current, start: "-200% center", end: "200% center", toggleActions: "restart pause reverse pause"}
  }];

  const carouselOneAnimations = [{
    from: { x: 0},
    to: { x: isMobile ? -600 : -300 },
    options: { scrub: 3, trigger: carouselOne.current, start: "-200% center", end: "200% center", toggleActions: "restart pause reverse pause"}
  }];

  useScrollTriggerAnimations(coffeeBeans, coffeeBeansAnimations);
  useScrollTriggerAnimations(carouselOne, carouselOneAnimations);

  return (
    <div id='carouselOne' ref={carouselOne}>
      <img className='carouselOneImg'  id='carouselImgOne' src={carousel} alt='carouselImage' />
      <div id='carouselSandwichContainer'>
        <img id='carouselSandwich' alt='sandwich' src={sandwich} />
      </div>
      <div id='carouselBtnContainer'>
        <NavLink to='/Coffee'  id='carouselBtn' >
          Menú
        </NavLink>
        <CoffeeBeans id='carouselCoffeeBeans' ref={coffeeBeans} />
      </div>
      <img className='carouselOneImg' src={carousel} alt='carousel' />
    </div>
  );
}

export default Carousel;
