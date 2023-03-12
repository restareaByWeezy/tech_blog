import { style } from '@vanilla-extract/css';

import { bpStyle } from '@/styles/responsive.css';
import { vars } from '@/styles/vars.css';

export const desktopArticlesWrapper = bpStyle('desktop', {
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
});
export const tabletArticlesWrapper = bpStyle('tablet', {
  gridTemplateColumns: 'repeat(2, 1fr)',
});
export const articlesWrapper = style([
  tabletArticlesWrapper,
  desktopArticlesWrapper,
  {
    marginTop: vars.space.s40,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
]);

export const card = style({
  maxWidth: '500px',
});

export const thumbnailWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  maxHeight: '200px',
});

export const thumbnail = style({
  objectFit: 'cover',
});
