import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggerAnimations = (ref, animations) => {
  useEffect(() => {
    animations.map(animation => {
      const { from, to, options } = animation;
      return gsap.fromTo(ref.current, from, {
        ...to,
        scrollTrigger: {
          ...options,
          trigger: ref.current
        }
      });
    });

    
  }, [ref, animations]);
};

export default useScrollTriggerAnimations;