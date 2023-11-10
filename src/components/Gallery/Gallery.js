import React, { useRef } from 'react';
import './Gallery.scss';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';

const Gallery = () => {
  // Create a ref for each gallery element
  const galleryContainer = useRef(null);

  // Define the animations for the fade-in effect
  const fadeInAnimations = [
    {
      from: { autoAlpha: 0 },
      to: { autoAlpha: 1 },
      options: {
        trigger: galleryContainer.current,
        start: "top 60%",
        end: "center center"
      },
    },
  ];

  useScrollTriggerAnimations(galleryContainer, fadeInAnimations);

  return (
    <div id='homeGallery'>
      <div id='galleryContainer' ref={galleryContainer}>
        <div id='homeGalleryOne'></div>
        <div id='homeGalleryTwo'></div>
        <div id='homeGalleryThree'></div>
      </div>
    </div>
  );
};

export default Gallery;
