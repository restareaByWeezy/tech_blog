import { style } from '@vanilla-extract/css';

import { pointer } from '@/styles/utils.css';
import { vars } from '@/styles/vars.css';

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from './keyframes.css';

export const DropdownMenuContent = style({
  position: 'relative',
  minWidth: '220px',
  backgroundColor: 'white',
  borderRadius: '6px',
  padding: '5px 0',
  animation: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  boxShadow: vars.color.shadow,

  selectors: {
    "&[data-side='top']": {
      animationName: slideDownAndFade,
    },
    "&[data-side='right']": {
      animationName: slideLeftAndFade,
    },
    "&[data-side='bottom']": {
      animationName: slideUpAndFade,
    },
    "&[data-side='left']": {
      animationName: slideRightAndFade,
    },
  },
});

export const DropdownMenuItem = style([
  pointer,
  {
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    position: 'relative',
    paddingLeft: '16px',
    paddingRight: '5px',
    userSelect: 'none',
    outline: 'none',
    gap: '10px',

    selectors: {
      '&[data-disabled="true"]': {
        pointerEvents: 'none',
      },
      '&[data-highlighted="true"]': {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      '&:hover': {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      '&:focus': {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
    },
  },
]);

export const DropdownMenuLabel = style({
  paddingLeft: '25px',
  fontSize: '12px',
  lineHeight: '25px',
  color: 'var(--mauve11)',
});

export const DropdownMenuSeparator = style({
  height: '1px',
  backgroundColor: 'var(--violet6)',
  margin: '5px',
});

export const IconButton = style({
  fontFamily: 'inherit',
  height: '35px',
  width: '35px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LeftSlot = style({
  position: 'absolute',
  left: '5px',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const RightSlot = style({
  position: 'absolute',
  right: '5px',
  top: '50%',
  transform: 'translateY(-50%)',
  selectors: {
    "&[data-highlighted='true']": {
      color: vars.color.white,
    },
    "&[data-disabled='true']": {
      color: vars.color.disabled_text,
    },
  },
});

export const MenuText = style({
  color: 'inherit !important',
});
