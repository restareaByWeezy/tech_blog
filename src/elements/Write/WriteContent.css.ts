import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const editorWrapper = style({
  width: '100%',
  height: 'calc(100vh - 100px)',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
  gap: '10px',
});

export const viewerWrapper = style({
  width: '100%',
  minWidth: 'fit-content',
  height: '100%',
  overflow: 'auto',
});

export const placeholder = style({
  color: vars.color.text_disabled,
});
