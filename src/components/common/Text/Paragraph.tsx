import React, { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/styles/classNames';

import { text, TextVariantProps } from './Text.css';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({
  children,
  className,
  size,
  color,
  ...rest
}: ParagraphProps & TextVariantProps) => {
  return (
    <p className={cx(text({ color, size }), className)} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
