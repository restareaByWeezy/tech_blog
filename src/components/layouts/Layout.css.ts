import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

import { bpStyle } from './../../styles/responsive.css';

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '100vh',
    flex: '1',
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
  padding: '0 50px',
});

export const footer = style({});
