import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import * as styles from './SelectStyle.css';

type SelectType = {
  value: string;
  label: string;
};

interface ValidRefTarget extends HTMLDivElement {
  contains(target: EventTarget | null): any;
}

interface SelectProps<T> {
  items: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  value: SelectType;
  setValue: Dispatch<SetStateAction<T>>;
  objKey: keyof T;
  selectorKeys: Array<keyof T>;
}

const Select = <T,>({ value }: SelectProps<T>) => {
  const [, setOpen] = useState(false);
  const ref = useRef<ValidRefTarget>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className={styles.selectTrigger}
      >
        <div className={styles.selectValue}>{value.label}</div>
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default Select;
