import { createVar, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

export const transformValue = createVar();

const slideIn = keyframes({
  from: { transform: transformValue },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: transformValue },
});

export { fadeIn, fadeOut, slideIn, slideOut };
