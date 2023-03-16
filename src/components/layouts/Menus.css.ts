import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

import { pointer } from './../../styles/utils.css';
export const menuItem = style([
  pointer,
  {
    position: 'relative',
    selectors: {
      '&:hover:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: vars.color.primary,
      },
    },
  },
]);
