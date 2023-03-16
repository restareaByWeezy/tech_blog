import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const wrapper = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
});

export const selectTrigger = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: vars.borderRadius.sm,
  padding: '4px 7px',
  fontSize: vars.fontSize.body2,
  gap: '5px',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray3}`,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray1,
    },
    '&[data-placeholder]': {
      color: vars.color.gray5,
    },
  },
});

export const selectValue = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  alignItems: 'center',
});

export const selectIcon = style({
  width: '15px',
  color: vars.color.gray5,
});

export const selectContent = style({
  position: 'absolute',
  width: '100%',
  marginTop: '5px',
  zIndex: vars.zIndices.DROPDOWN,
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.borderRadius.sm,
  boxShadow: vars.color.shadow,
  cursor: 'pointer',
  fontSize: vars.fontSize.body2,
});

export const selectViewport = style({});

export const selectItem = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '25px',
  color: vars.color.text_base,
  lineHeight: '1',
  userSelect: 'none',
  paddingLeft: '5px',
  selectors: {
    '&:hover': {
      outline: 'none',
      backgroundColor: vars.color.primary,
      color: vars.color.white,
    },
  },
});

export const selectLabel = style({
  padding: '0 25px',
  lineHeight: '25px',
});

export const selectSeparator = style({
  height: '1px',
  backgroundColor: vars.color.border,
  margin: '5px',
});

export const selectScrollButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20px',
  color: vars.color.text_base,
  cursor: 'default',
});
