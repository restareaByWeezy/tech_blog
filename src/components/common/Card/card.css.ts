import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const wrapper = recipe({
  base: {
    padding: vars.space.s10,
    borderRadius: vars.borderRadius.xl,
    backgroundColor: vars.color.white,
    boxShadow: vars.color.shadow,
  },
  variants: {
    size: {
      sm: {
        width: '200px',
        minHeight: '100px',
        padding: vars.space.s10,
      },
      md: {
        width: '400px',
        minHeight: '200px',
        padding: vars.space.s15,
      },
      lg: {
        width: '600px',
        minHeight: '400px',
        padding: vars.space.s20,
      },
      full: {
        width: '100%',
        height: '100%',
        padding: vars.space.s20,
      },
    },
  },
});

export type CardVariants = RecipeVariants<typeof wrapper>;
