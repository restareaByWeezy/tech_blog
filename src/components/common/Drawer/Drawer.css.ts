import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/vars.css';
import {
  fadeIn,
  fadeOut,
  slideIn,
  slideOut,
  transformValue,
} from './keyframes.css';

const contentWidth = createVar();

export const overlay = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.1)',
  zIndex: vars.zIndices.DRAWEROVERLAY,
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
  },
});

export const styledContent = recipe({
  base: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: contentWidth,
    height: '100%',
    backgroundColor: vars.color.gray1,
    boxShadow: vars.color.shadow,

    willChange: 'transform',

    vars: {
      [contentWidth]: '450px',
    },

    selectors: {
      '&[data-state="open"]': {
        animation: `${slideIn} 350ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },

      '&[data-state="closed"]': {
        animation: `${slideOut} 420ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
    },
  },
  variants: {
    position: {
      first: {
        zIndex: vars.zIndices.FIRST_DRAWER,
      },
      second: {
        zIndex: vars.zIndices.SECOND_DRAWER,
      },
    },
    side: {
      top: {
        vars: {
          [transformValue]: `translate3d(0,-200%,0)`,
        },
        width: '100%',
        height: 300,
        bottom: 'auto',
      },
      right: {
        vars: {
          [transformValue]: `translate3d(200%,0,0)`,
        },
        right: 0,
      },
      bottom: {
        vars: {
          [transformValue]: `translate3d(0,200%,0)`,
        },
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        vars: {
          [transformValue]: `translate3d(-200%,0,0)`,
        },
        left: 0,
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        side: 'right',
        position: 'second',
      },
      style: {
        right: contentWidth,
      },
    },
  ],

  defaultVariants: {
    side: 'right',
    position: 'first',
  },
});
