import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  isolation: `isolate`,
  minHeight: '100vh',
  backgroundColor: vars.color.bg,
  color: vars.color.white,
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
});

globalStyle('ul, li', {
  listStyle: 'none',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('.iconButton > svg', {
  width: '100%',
  height: '100%',
});

//FOR BLOG
globalStyle('.post', {
  color: vars.color.text_base,
});

globalStyle('.post > blockquote', {
  margin: `${vars.space.s20} ${vars.space.s5}`,
  borderLeft: `4px solid ${vars.color.primary}`,
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  background: vars.color.subBg,
  padding: '1rem 1rem 1rem 2rem',
});

globalStyle('.post > pre', {
  backgroundColor: vars.color.subBg,
  padding: vars.space.s15,
  margin: `${vars.space.s20} 0`,
  overflow: 'auto',
});
globalStyle('.post > p', {
  lineHeight: '1.5',
  margin: `${vars.space.s15} 0`,
});

globalStyle('.post > h1', {
  fontSize: vars.fontSize.headline,
  color: vars.color.tertiary,
  margin: `${vars.space.s30} auto`,
});

globalStyle('.post > h2', {
  fontSize: vars.fontSize.h1,
  color: vars.color.blue4,
  margin: `${vars.space.s20} auto`,
});

globalStyle('.post > h3', {
  fontSize: vars.fontSize.h3,
  margin: `${vars.space.s15} auto`,
});

globalStyle('.post > p > img', {
  margin: `${vars.space.s15} auto`,
});

globalStyle('.post > iframe', {
  width: '100%',
  height: '500px',
  margin: `${vars.space.s20} 0`,
});
