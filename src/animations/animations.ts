// animations.ts

interface AnimationOptions {
  duration?: number;
  toggleActions?: string;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  ease?: string;
}

export interface Animation {
  from: Record<string, number | string>;
  to: Record<string, number | string>;
  options: AnimationOptions;
}

export const fadeInAnimation: Animation = {
  from: { opacity: 0, y: -30 },
  to: { opacity: 1, y: 0, duration: 2 },
  options: { toggleActions: "restart pause pause pause", start: "30% bottom"}
};

export const rotateAnimation: Animation = {
  from: { rotation: 0 },
  to: { rotation: 360 },
  options: { scrub: true, start: 'top bottom', end: 'bottom top', toggleActions: "restart pause reverse pause"}
};

export const fadeOut: Animation = {
  from: { opacity: 1 },
  to: { opacity: 0 },
  options: { duration: 1 }
};

export const textSlideInFromLeft: Animation = {
  from: { x: -100, opacity: 0 },
  to: { x: 0, opacity: 1 },
  options: { duration: 1 }
};

export const textSlideInFromRight: Animation = {
  from: { x: 100, opacity: 0 },
  to: { x: 0, opacity: 1 },
  options: { duration: 1 }
};

export const titleZoomIn: Animation = {
  from: { scale: 0.5, opacity: 0 },
  to: { scale: 1, opacity: 1 },
  options: { duration: 1 }
};

export const titleRotateIn: Animation = {
  from: { rotation: -180, opacity: 0 },
  to: { rotation: 0, opacity: 1 },
  options: { duration: 1 }
};

export const imageFlipIn: Animation = {
  from: { rotationY: 180, opacity: 0 },
  to: { rotationY: 0, opacity: 1 },
  options: { duration: 1.5 }
};

export const imageUnfold: Animation = {
  from: { scaleX: 0, transformOrigin: 'left', opacity: 0 },
  to: { scaleX: 1, opacity: 1 },
  options: { duration: 1.2, ease: 'back', start: "top center" }
};

export const unveilImageAnimation: Animation = {
  from: { scale: 1.2, filter: 'brightness(0)' },
  to: { scale: 1, filter: 'brightness(1)' },
  options: { duration: 1, scrub: 1, start: 'top bottom', end: 'center bottom', toggleActions: "restart pause reverse pause"}
};

export const moveImageUp: Animation = {
  from: { y: -50, opacity: 0 },
  to: { y: 0, opacity: 1 },
  options: { scrub: 1, start: 'top bottom', end: 'bottom top', toggleActions: "restart pause reverse pause"}
};
