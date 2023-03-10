import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

import { bpStyle } from './../../styles/responsive.css';

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '100vh',
  },
]);

export const tabletHeader = bpStyle('tablet', {});
export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
  padding: '0 50px',
});
export const menuButton = style({
  width: '30px',
  height: '30px',
});

export const content = style({
  padding: '0 50px',
});

export const footer = style({});
