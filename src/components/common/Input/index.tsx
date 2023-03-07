import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

import { cx } from '@/styles/classNames';

import { input } from './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, ...rest }: InputProps, ref) => {
    return <input ref={ref} className={cx(input(), className)} {...rest} />;
  },
);

export default Input;
