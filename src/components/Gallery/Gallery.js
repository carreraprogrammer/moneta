import React, { useRef } from 'react';
import './Gallery.scss';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';

const Gallery = () => {
  // Create a ref for each gallery element
  const galleryOneRef = useRef(null);
  const galleryTwoRef = useRef(null);
  const galleryThreeRef = useRef(null);

  // Define the animations for the fade-in effect
  const fadeInAnimations = [
    {
      from: { autoAlpha: 0 },
      to: { autoAlpha: 1 },
      options: {
        scrub: true,
        trigger: galleryOneRef.current,
        start: "top bottom",
        end: "center center"
      },
    },
  ];

  useScrollTriggerAnimations(galleryOneRef, fadeInAnimations);
  useScrollTriggerAnimations(galleryTwoRef, fadeInAnimations);
  useScrollTriggerAnimations(galleryThreeRef, fadeInAnimations);

  return (
    <div id='homeGallery'>
      <div id='galleryContainer'>
        <div id='homeGalleryOne' ref={galleryOneRef}></div>
        <div id='homeGalleryTwo' ref={galleryTwoRef}></div>
        <div id='homeGalleryThree' ref={galleryThreeRef}></div>
      </div>
    </div>
  );
};

export default Gallery;
