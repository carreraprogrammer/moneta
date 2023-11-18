import React, { useRef } from 'react';
import './Events.scss';
import { ReactComponent as CoffeeWheel } from '../../assets/Images/coffeeWheel.svg';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import event from '../../assets/Images/event.png';
import { Animation } from '../../animations/animations';

const Events: React.FC = () => {
  const coffeeWheelRef = useRef<HTMLButtonElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);

  const moveXAnimation: Animation = {
    from: { x: 0 },
    to: { x: '30vw', y: '.2vh' },
    options: { scrub: 5, ease: 'linear', start: 'top center', end: 'center bottom', toggleActions: 'restart pause reverse pause' }
  };

  const rotateWheel: Animation = {
    from: { rotate: 0 },
    to: { rotate: 500 },
    options: { scrub: 5, ease: 'linear', start: 'top center', end: 'bottom center', toggleActions: 'restart pause reverse pause' }
  };

  const incline: Animation = {
    from: { rotate: 0 },
    to: { rotate: 1 },
    options: { scrub: true, ease: 'linear', start: 'top center', end: 'center bottom', toggleActions: 'restart reverse reverse pause' }
  }

  const wheelAnimation: Animation[] = [rotateWheel, moveXAnimation];

  useScrollTriggerAnimations(coffeeWheelRef, wheelAnimation);
  useScrollTriggerAnimations(title, [incline]);

  return (
    <div id='eventsHome'>
      <h2 id='eventsTitle' ref={title}>EVENTOS</h2>
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
