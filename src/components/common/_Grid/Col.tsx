import { HTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import { col, GridVariantProps } from './grid.css';

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: number | string;
  full?: boolean;
  center?: boolean;
}

const Col = ({
  children,
  justify,
  align,
  gap,
  full,
  center,
  ...rest
}: ColProps & GridVariantProps) => {
  const size = full ? 'full' : undefined;
  const childPosition = center ? 'center' : undefined;

  return (
    <div
      {...rest}
      style={{ gap: gap }}
      className={cx(
        col({
          justify: justify,
          align: align,
          size: size,
          childPosition: childPosition,
        }),
        rest.className,
      )}
    >
      {children}
    </div>
  );
};

export default Col;
