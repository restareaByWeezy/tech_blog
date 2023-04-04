import { keyframes, style } from '@vanilla-extract/css';

import { textFadeIn } from '@/styles/animation.css';
import { vars } from '@/styles/vars.css';

const textWave = keyframes({
  '0%, 100%': {
    clipPath:
      'polygon(0% 45%,16% 44%,33% 50%,54% 60%,70% 61%,84% 59%,100% 52%,100% 100%,0% 100%)',
  },
  '50%': {
    clipPath:
      'polygon(0% 60%,15% 65%,34% 66%,51% 62%,67% 50%,84% 45%,100% 46%,100% 100%,0% 100%)',
  },
});

export const animatedTextWrapper = style({
  position: 'relative',
});

export const animatedText = style({
  color: vars.color.text_base,
  position: 'absolute',
  transform: 'translate(0%, -50%)',
  fontSize: vars.fontSize.headline,

  selectors: {
    [`${animatedTextWrapper} &:nth-child(1)`]: {
      color: 'transparent',
      WebkitTextStroke: `2px ${vars.color.primary}`,
    },
    [`${animatedTextWrapper} &:nth-child(2)`]: {
      color: vars.color.primary,
      animation: `${textWave} 4s ease-in-out infinite`,
    },
  },
});

export const paragraph = style({
  marginTop: vars.space.s20,
  animation: `${textFadeIn} 1.5s ease`,
});
