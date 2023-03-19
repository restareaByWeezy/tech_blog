import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const editorWrapper = style({
  display: 'flex',
  flex: '1',
  width: '100%',
  minHeight: '400px',
  height: '100%',
  color: vars.color.text_base,
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

globalStyle(`${editorWrapper} button`, {
  border: 'none',
});

globalStyle(`${editorWrapper} .toastui-editor-main-container *`, {
  color: `${vars.color.text_base}`,
});

globalStyle(`${editorWrapper} > div`, {
  width: '100%',
});

globalStyle(`${editorWrapper} .toastui-editor-md-splitter`, {
  background: vars.color.gray5,
  width: '2px',
});

globalStyle(`${editorWrapper} .toastui-editor-defaultUI-toolbar`, {
  backgroundColor: vars.color.gray3,
});

globalStyle(`${editorWrapper} .toastui-editor-defaultUI`, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
