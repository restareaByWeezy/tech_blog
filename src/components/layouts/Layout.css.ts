import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '100vh',
  backgroundColor: vars.color.bg,
});
