import React, { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';

import { cx } from '@/styles/classNames';

import Loader from '../Lottie/Loader';
import {
  button,
  ButtonVariantProps,
  childSvgStyle,
  loading,
} from './Button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      color,
      sizes,
      radii,
      outlined,
      types,
      disabled,
      type,
      isLoading,
      ...rest
    }: ButtonProps & ButtonVariantProps,
    fowardRef,
  ) => {
    return (
      <button
        {...rest}
        type={type}
        disabled={disabled}
        ref={fowardRef as Ref<HTMLButtonElement> | undefined}
        className={cx(
          button({
            color,
            sizes,
            radii,
            outlined,
            types,
          }),
          className,
          isLoading ? loading : '',
        )}
      >
        {isLoading ? (
          <Loader container={childSvgStyle} center size={'sm'} />
        ) : (
          children
        )}
      </button>
    );
  },
);

export default Button;
