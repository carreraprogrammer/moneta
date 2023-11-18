import React, { useRef } from 'react';
import './Gallery.scss';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import { fadeInAnimation } from '../../animations/animations';

const Gallery: React.FC = () => {
  const galleryContainer = useRef<HTMLDivElement | null>(null);

  useScrollTriggerAnimations(galleryContainer, [fadeInAnimation]);

  return (
    <div id='homeGallery'>
      <h2 id='homeGalleryTitle'>CAFE Y MEMORIA</h2>
      <p className='homeGalleryDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam culpa facilis et enim expedita molestias neque, ipsam optio nulla, nam eveniet id vero iure reiciendis sit a cumque molestiae! </p>
      <div id='galleryContainer' ref={galleryContainer}>
        <div id='homeGalleryOne'></div>
        <div id='homeGalleryTwo'></div>
        <div id='homeGalleryThree'></div>
      </div>
    </div>
  );
};

export default Gallery;
