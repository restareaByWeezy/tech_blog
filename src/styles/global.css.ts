import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from 'styles/vars.css';

globalFontFace('Pretendard-Regular', {
  src: 'url(https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff)',
  // unicodeRange: 'U+AC00-D7A3',
});

// globalFontFace('campton', {
//   src: 'url(src/assets/fonts/CamptonMedium.otf)',
//   fontWeight: '500',
//   unicodeRange:
//     'U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E',
// });
// globalFontFace('campton', {
//   src: 'url(src/assets/fonts/CamptonSemiBold.otf)',
//   fontWeight: '600',
//   unicodeRange:
//     'U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E',
// });
// globalFontFace('campton', {
//   src: 'url(src/assets/fonts/CamptonSemiBold.otf)',
//   fontWeight: '700',
//   unicodeRange:
//     'U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E',
// });

globalStyle('body', {
  width: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  lineHeight: 1.5,
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

globalStyle('#root', {
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

//DATEPICKER

//NOTE: CHANGE BUTTON COLOR DEPENDING ON SELECTION
globalStyle('.rdrStartEdge ~ .rdrDayNumber span:after', {
  background: `${vars.color.white} !important`,
});

globalStyle('.rdrDayNumber span:after', {
  background: `${vars.color.primary} !important`,
});
