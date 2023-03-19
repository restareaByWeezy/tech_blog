import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const viewerWrapper = style({
  flex: '1',
  width: '100%',
  height: '100%',
  overflow: 'auto',
});

export const placeholder = style({
  color: vars.color.text_disabled,
});
