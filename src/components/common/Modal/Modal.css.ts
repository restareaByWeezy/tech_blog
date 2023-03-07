import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const overlay = style({
  position: 'fixed' as const,
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const content = style({
  borderRadius: '6px',
  backgroundColor: vars.color.white,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const dialogTitle = style({
  margin: 0,
  fontWeight: 500,
  color: 'black',
  fontSize: '17px',
});

export const dialogDescription = style({
  margin: '10px 0 20px',
  color: 'black',
  fontSize: '15px',
  lineHeight: 1.5,
});

export const iconBtn = style({
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  position: 'absolute' as const,
  top: '10px',
  right: '10px',
});
