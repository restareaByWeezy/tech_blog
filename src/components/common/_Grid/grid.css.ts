import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const variants = {
  childPosition: {
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  justify: {
    start: {
      justifyContent: 'flex-start',
    },
    end: {
      justifyContent: 'flex-end',
    },
    between: {
      justifyContent: 'space-between',
    },
    around: {
      justifyContent: 'space-around',
    },
    center: {
      justifyContent: 'center',
    },
    reverse: {
      justifyContent: 'flex-end',
    },
  },
  align: {
    center: {
      alignItems: 'center',
    },
    start: {
      alignItems: 'flex-start',
    },
    end: {
      alignItems: 'flex-end',
    },
    stretch: {
      alignItems: 'stretch',
    },
    baseline: {
      alignItems: 'baseline',
    },
  },
  size: {
    full: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
  },
  defaultVariants: {
    justifyContent: 'start',
    alignItems: 'start',
  },
};

// STYLE COL //////////////////////////
export const col = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: variants,
});

// STYLE ROW //////////////////////////
export const row = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  variants: variants,
});

export type ColVariants = RecipeVariants<typeof col>;
export type RowVariants = RecipeVariants<typeof row>;

export interface GridVariantProps {
  justify?: keyof typeof variants.justify;
  align?: keyof typeof variants.align;
}
