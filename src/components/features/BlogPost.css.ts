import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

import { animateGlow } from './../../styles/animation.css';

export const thumbnailWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  maxHeight: '200px',
});

export const thumbnail = style({
  objectFit: 'cover',
});

export const cardWrapper = style({
  borderRadius: '8px',
  backgroundColor: vars.color.subBg,
  position: 'relative',
  zIndex: '1',

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

//GLOW
export const glowParent = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backgroundColor: vars.color.bg,
});

export const glowBox = style({
  position: 'absolute',
  content: '',
  top: '0',
  left: '0',
  right: '0',
  height: '100%',
  width: '100%',

  selectors: {
    [`${glowParent}:hover &`]: {
      transition: 'all 0.2s linear',
      filter: 'blur(15px)',
      background:
        'linear-gradient(to left, #ff5770,#e4428d,#c42da8,#9e16c3,#6501de,#9e16c3,#c42da8,#e4428d,#ff5770)',
      backgroundSize: '200% 200%',
      animation: `${animateGlow} 1.25s linear infinite`,
    },
  },
});
