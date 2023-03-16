import { style } from '@vanilla-extract/css';

import { violetNeon } from '@/styles/animation.css';
import { vars } from '@/styles/vars.css';

import { bpStyle } from './../../styles/responsive.css';

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxWidth: '768px',
    minHeight: '100vh',
    flex: '1',
  },
]);

export const tabletHeader = bpStyle('tablet', {});
export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
  padding: '10px 50px',
});

export const logo = style({
  color: 'white',
  selectors: {
    '&:hover': {
      cursor: 'pointer',
      animation: `${violetNeon} 2s ease-in-out infinite alternate`,
    },
  },
});

export const menuButton = style([
  {
    width: '30px',
    height: '30px',
    minWidth: '30px',
  },
]);
export const menuWrapper = style({});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  flex: '1',
  padding: `${vars.space.s60} ${vars.space.s40} 0 ${vars.space.s40}`,
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  padding: '10px 50px',
  gap: vars.space.s10,
});

export const link = style({
  width: '40px',
  height: '40px',
});
