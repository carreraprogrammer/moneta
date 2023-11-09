import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggerAnimations = (ref, animations) => {
  useEffect(() => {
    const triggers = animations.map(animation => {
      const { from, to, options } = animation;
      return gsap.fromTo(ref.current, from, {
        ...to,
        scrollTrigger: {
          ...options,
          trigger: ref.current
        }
      });
    });

    return triggers
  }, [ref, animations]);
};

export default useScrollTriggerAnimations;