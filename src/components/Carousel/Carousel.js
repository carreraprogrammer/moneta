import carousel from '../../assets/Images/carouselOne.png'
import React, { useRef } from 'react'
import 'aos/dist/aos.css'
import sandwich from '../../assets/Images/carouselSandwich.png'
import { NavLink } from 'react-router-dom';
import './Carousel.scss'

import {ReactComponent as CofeeBeans} from '../../assets/Images/coffee_beans.svg'

import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';

const Carousel = () => {
  const coffeeBeans = useRef(null)
  const carouselOne = useRef(null)

  const coffeeBeansAnimations = [{
    from: {rotate: 0},
    to: { rotate: 360},
    options: { scrub: 3, trigger: carouselOne.current, start: "-200% center", end: "200% center",toggleActions: "restart pause reverse pause"}
  }]

  const carouselOneAnimations = [{
    from: { x: 0},
    to: { x: -300 },
    options: { scrub: 3, trigger: carouselOne.current, start: "-200% center", end: "200% center",
    toggleActions: "restart pause reverse pause"}
  }]

  useScrollTriggerAnimations(coffeeBeans, coffeeBeansAnimations)
  useScrollTriggerAnimations(carouselOne, carouselOneAnimations)

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
      <CofeeBeans id='carouselCoffeeBeans' ref={coffeeBeans} />
    </div>
    <img className='carouselOneImg' src={carousel} alt='carousel' />
  </div>
  )
}

export default Carousel