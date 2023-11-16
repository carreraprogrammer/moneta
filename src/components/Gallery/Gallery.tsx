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
      <div id='galleryContainer' ref={galleryContainer}>
        <div id='homeGalleryOne'></div>
        <div id='homeGalleryTwo'></div>
        <div id='homeGalleryThree'></div>
      </div>
    </div>
  );
};

export default Gallery;
