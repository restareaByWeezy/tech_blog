import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

import { text } from './../components/common/Text/Text.css';

globalFontFace('GmarketSansMedium', {
  src: 'url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff)',
});
// globalFontFace('Pretendard-Regular', {
//   src: 'url(https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff)',
// });

globalStyle('body', {
  width: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  margin: 0,
  WebkitFontSmoothing: `antialiased`,
  paddingRight: 'calc(var(--removed-body-scroll-bar-size )) !important', // FIX: radix scroll library bug must be fixed
  fontFamily: vars.fontFamily.body,
  // FOR MOBILE
  '@supports': {
    'minHeight: 100dvh': {
      minHeight: '100dvh',
    },
  },
});

globalStyle('#__next', {
  backgroundColor: vars.color.bg,
  color: vars.color.white,
  isolation: `isolate`,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
});

// DRAG COLOR
globalStyle('::selection', {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});
globalStyle('::-moz-selection', {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

// FOCUS
globalStyle(':focus', {
  outlineColor: vars.color.primary,
});
globalStyle(':focus-visible', {
  outlineColor: vars.color.primary, // RADIX ACCESSIBILITY
});
globalStyle('::-moz-focus-inner', {
  border: 0,
});

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
  all: `unset`,
  cursor: 'pointer',
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
  all: 'unset',
});

globalStyle('ul, li', {
  listStyle: 'none',
  all: 'unset',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('.iconButton > svg', {
  width: '100%',
  height: '100%',
});
