import './Events.scss'
import React, { useRef } from 'react'
import {ReactComponent as CoffeeWheel} from '../../assets/Images/coffeeWheel.svg'
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations'
import event from '../../assets/Images/event.png'

const Events = () => {
  const coffeeWheelRef = useRef(null)

  const moveXAnimation = {
    from: {x: 0},
    to: {x: '50vw'},
    options: {scrub: 8, repeat: -1, repeatType: 'reverse', ease: 'linear', start: '-100% center', end: '500% center', toggleActions: 'restart pause reverse pause'}
  }

  const rotateWheel = {
    from: {rotate: 0},
    to: {rotate: 1000},
    options: {scrub: 5, repeat: -1, repeatType: 'reverse', ease: 'linear', start: '-100% center', end: '600% center', toggleActions: 'restart pause reverse pause'}
  }

  const wheelAnimation = [rotateWheel, moveXAnimation]

  useScrollTriggerAnimations(coffeeWheelRef, wheelAnimation)

  return (
    <div id='eventsHome'>
      <h1 id='eventsTitle'>Eventos</h1>
      <button id='eventBtn' ref={coffeeWheelRef}>
        <CoffeeWheel id='coffeeWheel'/>
      </button>

      <div id='eventsGallery'>
        <img src={event} alt='event' />
      </div>
    </div>
  )
}

export default Events