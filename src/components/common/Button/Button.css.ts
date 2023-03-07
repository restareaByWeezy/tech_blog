import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const base = {
  fontWeight: vars.fontWeight.bold,
  transition: 'all 0.3s ease',
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      opacity: '0.64',
    },
  },
};

const variants = {
  color: {
    primary: {
      backgroundColor: vars.color.primary_btn,
      color: vars.color.white,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.primary_pressed,
        },
        '&:hover': {
          backgroundColor: vars.color.primary_pressed,
        },
      },
    },
    secondary: {
      backgroundColor: vars.color.gray5,
      color: vars.color.white,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.gray5,
        },
        '&:hover': {
          backgroundColor: vars.color.gray5,
        },
      },
    },
    tertiary: {
      backgroundColor: vars.color.gray2,
      color: vars.color.gray5,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.gray3,
        },
        '&:hover': {
          backgroundColor: vars.color.gray3,
        },
      },
    },
  },
  sizes: {
    sm: {
      padding: '10px 18px',
      fontSize: vars.fontSize.body1,
      borderRadius: vars.borderRadius.sm,
    },
    borderRadius: vars.borderRadius.lg,
    md: {
      padding: '13px 21px',
      fontSize: vars.fontSize.body1,
      borderRadius: vars.borderRadius.md,
    },
    lg: {
      padding: '16px 24px',
      fontSize: vars.fontSize.body1,
      borderRadius: vars.borderRadius.lg,
    },
    xl: {
      padding: '18px 26px',
      fontSize: vars.fontSize.h3,
      borderRadius: vars.borderRadius.lg,
    },
  },
  radii: {
    rect: { borderRadius: '12px' },
    round: { borderRadius: '30px' },
  },
  outlined: {
    primary: {
      border: 'solid 1pxvars.color.primary',
      color: vars.color.text_base,
      backgroundColor: 'transparent',
      '&:active': {
        backgroundColor: 'rgba(217, 244, 254, 0.32)',
      },
      '&:hover': {
        backgroundColor: 'rgba(217, 244, 254, 0.32)',
      },
    },
    secondary: {
      border: 'solid 1pxvars.color.secondary',
      color: vars.color.text_gray,
      backgroundColor: 'transparent',
      '&:active': {
        backgroundColor: vars.color.gray1,
      },
      '&:hover': {
        backgroundColor: vars.color.gray1,
      },
    },
    tertiary: {
      border: 'solid 1pxvars.color.tertiary',
      color: vars.color.text_text,
      backgroundColor: 'transparent',
      selectors: {
        '&:active': {
          backgroundColor: vars.color.g_trans1,
        },
        '&:hover': {
          backgroundColor: vars.color.g_trans1,
        },
      },
    },
  },
  types: {
    badge: {
      color: vars.color.text_base,
      backgroundColor: vars.color.gray2,
      padding: '10px 16px',
      borderRadius: '17px',
      fontWeight: '600',
      selectors: {
        '&:active': {
          backgroundColor: vars.color.tertiary_pressed,
        },
        '&:hover': {
          backgroundColor: vars.color.tertiary_pressed,
        },
      },
    },
    loader: {
      padding: '0px',
    },
    default: {
      backgroundColor: 'transparent',
      color: vars.color.text_gray,
      fontSize: vars.fontSize.body2,
      padding: '0px',
      border: 'none',

      selectors: {
        '&:active': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
};

// STYLE TEXT //////////////////////////
export const button = recipe({
  base: {
    ...base,
    textAlign: 'center',
  },
  variants: variants,
  defaultVariants: {
    color: 'primary',
    radii: 'rect',
    sizes: 'md',
  },
});

export const loading = style({});
export const childSvgStyle = style({
  selectors: {
    [`${loading} &`]: {},
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
export interface ButtonVariantProps {
  color?: keyof typeof variants.color; //"primary" | "secondary" | "tertiary" | undefined
  sizes?: keyof typeof variants.sizes;
  radii?: keyof typeof variants.radii;
  outlined?: keyof typeof variants.outlined;
  types?: keyof typeof variants.types;
}
