import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const viewerWrapper = style({
  width: '100%',
  minWidth: 'fit-content',
  height: '100%',
  overflow: 'auto',
});

export const placeholder = style({
  color: vars.color.text_disabled,
});
