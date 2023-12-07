import React, { useRef } from 'react';
import './Events.scss';
import { ReactComponent as CoffeeWheel } from '../../assets/Images/coffeeWheel.svg';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import event from '../../assets/Images/event.png';
import { Animation, incline, rotateWheel, moveXAnimation } from '../../animations/animations';

const Events: React.FC = () => {
  const coffeeWheelRef = useRef<HTMLButtonElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const imagesContainer = useRef<HTMLDivElement | null>(null);

  const wheelAnimations: Animation[] = [rotateWheel, moveXAnimation];
  const galleryAnimation: Animation | any = {
    from: { x: '-100%'},
    to: { x: '0%'},
    options: { scrub: true, trigger: '#eventsHome', start: '-100% bottom', end: 'center center'}
  }


  useScrollTriggerAnimations(coffeeWheelRef, wheelAnimations);
  useScrollTriggerAnimations(title, [incline]);
  useScrollTriggerAnimations(imagesContainer, [galleryAnimation]);

  return (
    <div id='eventsHome'>
      <h2 id='eventsTitle' ref={title}>EVENTOS</h2>
      <button id='eventBtn' ref={coffeeWheelRef}>
        <CoffeeWheel id='coffeeWheel'/>
      </button>

      <div id='eventsGallery'>
        <div id='eventsImagesContainer' ref={imagesContainer}>
          <img src={event} alt='event' />
          <img src={event} alt='event' />
          <img src={event} alt='event' />
          <img src={event} alt='event' />
          <img src={event} alt='event' />
          <img src={event} alt='event' />
        </div>
      </div>
    </div>
  );
};

export default Events;
