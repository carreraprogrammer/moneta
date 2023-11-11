import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Animation {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  options: ScrollTrigger.Vars;
}

const useScrollTriggerAnimations = (
  ref: RefObject<Element>,
  animations: Animation[]
) => {
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
