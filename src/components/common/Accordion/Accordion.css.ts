import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const trigger = style({
  padding: '5px 10px',
  border: `1px solid ${vars.color.border}`,
});

export const content = style({
  border: `1px solid ${vars.color.border}`,
  borderTop: 'none',
});

export const label = style({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  cursor: 'pointer',
});

export const itemWrapper = style({
  padding: '5px 10px',

  selectors: {
    '&:hover': {
      transition: 'background-color 0.2s',
      backgroundColor: vars.color.gray2,
    },
  },
});
