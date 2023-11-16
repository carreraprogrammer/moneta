import React, { useRef } from 'react';
import './Events.scss';
import { ReactComponent as CoffeeWheel } from '../../assets/Images/coffeeWheel.svg';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import event from '../../assets/Images/event.png';
import { Animation } from '../../animations/animations';

const Events: React.FC = () => {
  const coffeeWheelRef = useRef<HTMLButtonElement | null>(null);

  const moveXAnimation: Animation = {
    from: { x: 0 },
    to: { x: '50vw' },
    options: { scrub: 8, ease: 'linear', start: '-100% center', end: '500% center', toggleActions: 'restart pause reverse pause' }
  };

  const rotateWheel: Animation = {
    from: { rotate: 0 },
    to: { rotate: 1000 },
    options: { scrub: 5, ease: 'linear', start: '-100% center', end: '600% center', toggleActions: 'restart pause reverse pause' }
  };

  const wheelAnimation: Animation[] = [rotateWheel, moveXAnimation];

  useScrollTriggerAnimations(coffeeWheelRef, wheelAnimation);

  return (
    <div id='eventsHome'>
      <h2 id='eventsTitle'>EVENTOS</h2>
      <button id='eventBtn' ref={coffeeWheelRef}>
        <CoffeeWheel id='coffeeWheel'/>
      </button>

      <div id='eventsGallery'>
        <img src={event} alt='event' />
        <img src={event} alt='event' />
        <img src={event} alt='event' />
      </div>
    </div>
  );
};

export default Events;
