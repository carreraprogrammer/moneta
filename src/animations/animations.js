
//animations.js 

export const fadeInAnimation = {
  from: { opacity: 0, y: -30 },
  to: { opacity: 1, y: 0 },
  options: { duration: 1 }
};

export const rotateAnimation = {
  from: { rotation: 0 },
  to: { rotation: 360 },
  options: { scrub: true, start: 'top bottom', end: 'bottom top', toggleActions: "restart pause reverse pause"}
};

// Fade Animations
export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 1.5 },
  options: { toggleActions: "restart pause reverse pause" }
};

export const fadeOut = {
  from: { opacity: 1 },
  to: { opacity: 0 },
  options: { duration: 1 }
};

// Text Animations for Descriptive Text
export const textSlideInFromLeft = {
  from: { x: -100, opacity: 0 },
  to: { x: 0, opacity: 1 },
  options: { duration: 1 }
};

export const textSlideInFromRight = {
  from: { x: 100, opacity: 0 },
  to: { x: 0, opacity: 1 },
  options: { duration: 1 }
};

// Title Animations
export const titleZoomIn = {
  from: { scale: 0.5, opacity: 0 },
  to: { scale: 1, opacity: 1 },
  options: { duration: 1 }
};

export const titleRotateIn = {
  from: { rotation: -180, opacity: 0 },
  to: { rotation: 0, opacity: 1 },
  options: { duration: 1 }
};

// Image Animations
export const imageFlipIn = {
  from: { rotationY: 180, opacity: 0 },
  to: { rotationY: 0, opacity: 1 },
  options: { duration: 1.5 }
};

export const imageUnfold = {
  from: { scaleX: 0, transformOrigin: 'left', opacity: 0 },
  to: { scaleX: 1, opacity: 1 },
  options: { duration: 1.2, ease: 'back', start: "top center" }
};

export const unveilImageAnimation = {
  from: { scale: 1.2, filter: 'brightness(0)' },
  to: { scale: 1, filter: 'brightness(1)', duration: 1 },
  options: { start: 'top bottom', end: 'bottom center', toggleActions: "restart pause reverse pause"}
};

export const moveImageUp = {
  from: { y: -50, opacity: 0 },
  to: { y: 0, opacity: 1 },
  options: { scrub: 1, start: 'top bottom', end: 'bottom top', toggleActions: "restart pause reverse pause"}
};
