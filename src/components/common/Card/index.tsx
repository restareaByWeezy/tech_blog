import cx from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

import { col } from '../_Grid/Grid.css';
import * as styles from './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
  children?: ReactNode;
  className?: string;
  section?: boolean;
}

type DefaultHTMLProps =
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLElement>;

const Card = ({
  size,
  children,
  section,
  className,
  ...props
}: CardProps & DefaultHTMLProps) => {
  switch (section) {
    case true:
      return (
        <section
          {...props}
          className={cx(className, styles.wrapper({ size: size }))}
        >
          {children}
        </section>
      );
    default:
      return (
        <div
          {...props}
          className={cx(className, styles.wrapper({ size: size }), col())}
        >
          {children}
        </div>
      );
  }
};

export default Card;
