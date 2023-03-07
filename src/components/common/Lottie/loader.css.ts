import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const wrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  variants: {
    size: {
      sm: {
        width: '20px',
        height: '20px',
      },
      md: {
        width: '40px',
        height: '40px',
      },
      lg: {
        width: '60px',
        height: '60px',
      },
      xl: {
        width: '80px',
        height: '80px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// style div inside wrapper
export const lottie = style({
  width: '100%',
  height: '100%',
});
