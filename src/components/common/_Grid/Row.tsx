import { HTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import { GridVariantProps, row } from './grid.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gap?: number | string;
  full?: boolean;
  center?: boolean;
}

const Row = ({
  children,
  justify,
  align,
  gap,
  full,
  center,
  ...rest
}: RowProps & GridVariantProps) => {
  const size = full ? 'full' : undefined;
  const childPosition = center ? 'center' : undefined;

  return (
    <div
      style={{ gap: gap }}
      {...rest}
      className={cx(
        rest.className,
        row({
          justify: justify,
          align: align,
          size: size,
          childPosition: childPosition,
        }),
      )}
    >
      {children}
    </div>
  );
};

export default Row;
