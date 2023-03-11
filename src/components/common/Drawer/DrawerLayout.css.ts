import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.subBg,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 28px',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const content = style({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  height: '100%',
});

export const closeBtn = style({
  position: 'absolute',
  right: '20px',
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});
