import { keyframes } from '@vanilla-extract/css';

export const animateGlow = keyframes({
  from: {
    backgroundPosition: '0% 50%',
  },
  to: {
    backgroundPosition: '200% 50%',
  },
});

//TEXT FADE IN
export const textFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(0, -20px, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translateZ(0)',
  },
});
