import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const checkbox = style({
  position: 'relative',
  width: '20px',
  height: '20px',
  border: `1px solid ${vars.color.border}`,
  borderRadius: '3px',
  cursor: 'pointer',
});

export const checked = style({
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});
