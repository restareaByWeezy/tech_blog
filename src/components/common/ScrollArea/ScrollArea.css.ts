import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const root = style({
  overflow: 'hidden',
  display: 'flex',
});

export const viewport = style({
  borderRadius: '4px',
});

export const scrollbar = recipe({
  base: {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: '2px',
    background: vars.color.gray3,
    borderRadius: '10px',
    transition: 'background 160ms ease-out',
    selectors: {
      '&:hover': {
        background: vars.color.gray4,
      },
      '&[data-orientation="vertical"]': {
        width: '5px',
      },
      '&[data-orientation="horizontal"]': {
        height: '5px',
      },
    },
  },
});

export const thumb = style({
  position: 'relative',
  background: vars.color.primary,
  transition: 'background 160ms ease-out',
  selectors: {
    '&:hover': {
      background: vars.color.primary,
    },
    '&::before': {
      borderRadius: '10px',
      background: vars.color.primary,
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minHeight: '5px',
      minWidth: '5px',
    },
  },
});

export const corner = style({
  background: 'rgba(0, 0, 0, 0.6)',
});
