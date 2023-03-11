import { style } from '@vanilla-extract/css';

import { pointer } from '@/styles/utils.css';
import { vars } from '@/styles/vars.css';

export const menuWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 'fit-content',
  padding: `${vars.space.s40} ${vars.space.s80}`,
  marginBottom: vars.space.s20,
  gap: vars.space.s10,
  zIndex: vars.zIndices.GNB,
});

export const menuItem = style([pointer]);
