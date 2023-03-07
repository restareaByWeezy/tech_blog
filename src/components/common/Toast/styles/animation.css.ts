import { keyframes } from '@vanilla-extract/css';

import { viewportPadding } from './vars.css';
const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const slideLeft = keyframes({
  vars: {
    [viewportPadding]: '15px',
  },
  from: {
    transform: `translateX(calc(100% + ${viewportPadding}))`,
  },
  to: {
    transform: 'translateX(0)',
  },
});
const slideRight = keyframes({
  vars: {
    [viewportPadding]: '15px',
  },
  from: {
    transform: `translateX(calc(-100% - ${viewportPadding}))`,
  },
  to: {
    transform: 'translateX(0)',
  },
});
const slideUp = keyframes({
  vars: {
    [viewportPadding]: '15px',
  },
  from: {
    transform: `translateY(calc(100% + ${viewportPadding}))`,
  },
  to: {
    transform: 'translateY(0)',
  },
});
const slideDown = keyframes({
  vars: {
    [viewportPadding]: '15px',
  },
  from: {
    transform: `translateY(calc(-100% - ${viewportPadding}))`,
  },
  to: {
    transform: 'translateY(0)',
  },
});

const swipeRight = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${viewportPadding}))`,
  },
});
const swipeLeft = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(-100% - ${viewportPadding}))`,
  },
});
const swipeDown = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: `translateY(calc(100% + ${viewportPadding}))`,
  },
});
const swipeUp = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: `translateY(calc(-100% - ${viewportPadding}))`,
  },
});

export {
  hide,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  swipeDown,
  swipeLeft,
  swipeRight,
  swipeUp,
};
