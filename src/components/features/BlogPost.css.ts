import { style } from '@vanilla-extract/css';

export const thumbnailWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  maxHeight: '200px',
});

export const thumbnail = style({
  objectFit: 'cover',
});
