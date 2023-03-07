import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const paginationContainer = style({
  display: 'inline-flex',
  justifyContent: 'center',
  listStyleType: 'none',
  boxSizing: 'border-box',
  userSelect: 'none',
  margin: 0,
  padding: 0,
});

export const pages = style({
  display: 'flex',
  gap: '4px',
});

export const page = style({});

export const pageButton = style({
  selectors: {
    [`&[data-selected="true"]`]: {
      // border: `solid 1px ${vars.color.disabled_btn}`,
      // borderRadius: '4px',
      color: vars.color.disabled,
    },
    '&:disabled': {
      color: vars.color.disabled_text,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    '&:hover, &:focus': {
      // border: `solid 1px ${vars.color.border}`,
      // borderRadius: vars.borderRadius.sm,
    },
  },
  all: 'unset',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'grid',
  placeItems: 'center',
  minWidth: '34px',
  height: '34px',
  cursor: 'pointer',
});
