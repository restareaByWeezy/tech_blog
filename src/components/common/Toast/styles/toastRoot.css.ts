import { recipe } from '@vanilla-extract/recipes';

import {
  hide,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  swipeDown,
  swipeLeft,
  swipeRight,
  swipeUp,
} from './animation.css';

export const toastRoot = recipe({
  base: {
    backgroundColor: 'white',
    borderRadius: '6px',
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '15px',
    display: 'grid',
    gridTemplateAreas: "'title action' 'description action'",
    gridTemplateColumns: 'auto max-content',
    columnGap: '15px',
    alignItems: 'center',
    selectors: {
      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },
      '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
      },
      '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
      },
    },
  },
  variants: {
    direction: {
      down: {
        selectors: {
          '&[data-state="open"]': {
            animation: `${slideUp} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-swipe="end"]': {
            animation: `${swipeDown} 100ms ease-out`,
          },
        },
      },
      up: {
        selectors: {
          '&[data-state="open"]': {
            animation: `${slideDown} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-swipe="end"]': {
            animation: `${swipeUp} 100ms ease-out`,
          },
        },
      },
      right: {
        selectors: {
          '&[data-state="open"]': {
            animation: `${slideLeft} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-swipe="end"]': {
            animation: `${swipeRight} 100ms ease-out`,
          },
        },
      },
      left: {
        selectors: {
          '&[data-state="open"]': {
            animation: `${slideRight} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-swipe="end"]': {
            animation: `${swipeLeft} 100ms ease-out`,
          },
        },
      },
    },
  },
});
