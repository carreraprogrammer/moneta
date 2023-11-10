import React, { useRef } from 'react';
import useScrollTriggerAnimations from '../../customHooks/useScrollTriggerAnimations';
import leaves from '../../assets/Images/leaves.png';
import './Header.scss';

const Header = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const leavesRef = useRef(null);
  const mLetter = useRef(null);
  const onetaLetters = useRef(null);

  // Header animations
  const headerAnimations = [
    {
      from: { backgroundPosition: `center ${50}px` },
      to: { backgroundPosition: `center ${250}px` },
      options: { scrub: 1, trigger: headerRef.current, start: "top center", end: "bottom center" }
    }
  ];

  // Title animations
  const mAnimations = [
    {
      from: { scale: 0.5, y: 100, opacity: 0 },
      to: { duration: 2, scale: 1, y: 0, opacity: 1 },
      options: {}
    }
  ];

  const onetaAnimations = [
    {
      from: { y: 100, autoAlpha: 0 },
      to: { duration: 2, y: 0, autoAlpha: 1 },
      options: { trigger: titleRef.current, start: "top center", toggleActions: "play none none none" }
    }
  ];

  // Leaves animations
  const leavesAnimations = [
    {
      from: { yPercent: 0, opacity: 0 },
      to: { opacity: 1, yPercent: 70, scrub: 1 },
      options: { scrub: 3, trigger: leavesRef.current, start: "bottom center", toggleActions: "play none none none" }
    }
  ];
  
  useScrollTriggerAnimations(leavesRef, leavesAnimations);
  useScrollTriggerAnimations(mLetter, mAnimations);
  useScrollTriggerAnimations(onetaLetters, onetaAnimations);
  useScrollTriggerAnimations(headerRef, headerAnimations);


  return (
    <header className='header' id='header' ref={headerRef}>
      <h1 id='headerTitle' ref={titleRef}>
        <span id='#title-m' ref={mLetter}>M</span>
        <span id='#title-oneta' ref={onetaLetters}>oneta</span>
      </h1>
      <img id='leaves' src={leaves} alt='leaves' ref={leavesRef} />
    </header>
  );
};

export default Header;
