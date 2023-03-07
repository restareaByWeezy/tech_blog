import { CheckIcon } from '@radix-ui/react-icons';
import { InputHTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import * as styles from './Checkbox.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox = ({ isChecked, onChange, ...rest }: CheckboxProps) => {
  return (
    <div
      role="checkbox"
      aria-checked={isChecked}
      className={cx(styles.checkbox, isChecked ? styles.checked : '')}
    >
      <input
        {...rest}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {isChecked && (
        <CheckIcon
          className={cx(isChecked ? styles.checked : '')}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Checkbox;
