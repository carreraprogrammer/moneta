import React from 'react'
import './AboutAbstract.scss'
import fachada from '../../assets/Images/moneta-fachada.png'
import { NavLink } from 'react-router-dom'

import { ReactComponent as CoffeePlant } from '../../assets/Images/coffeePlant1.svg'
import { ReactComponent as CoffeePlant2 } from '../../assets/Images/coffeePlant2.svg'
import { fadeIn, imageUnfold, titleZoomIn, moveImageUp } from '../../animations/animations'
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations'

const AboutAbstract = () => {
  
  const title = React.useRef(null)
  const description = React.useRef(null)
  const container = React.useRef(null)
  const image = React.useRef(null)


  useScrollTriggerAnimations(description, [imageUnfold])
  useScrollTriggerAnimations(title, [titleZoomIn])
  useScrollTriggerAnimations(container, [fadeIn])
  useScrollTriggerAnimations(image, [moveImageUp])

  return (
    <section className='aboutAbstract' ref={container}>
      <div className='imageContainer'>
        <img src={fachada} alt='fachada' ref={image}/>
      </div>
      <div className='descriptionContainer'>
        <h1 className='title' ref={title}>Sobre Nosotros</h1>
        <p className='description' ref={description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <NavLink to='/About' id='aboutBtn'>
          Conocenos
        </NavLink>
        <CoffeePlant id='coffeePlant' />
        <CoffeePlant2 id='coffeePlant2' />
      </div>
    </section >
  )
}

export default AboutAbstract