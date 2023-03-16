import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ChevronDownIcon } from '@/assets/svgs';

import Text from '../Text/Text';
import * as styles from './Select.css';

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

const Select = <T,>({ items, value, setValue, objKey }: SelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<ValidRefTarget>(null);

  const handleClickItem = (e: MouseEvent<HTMLLIElement>) => {
    const { itemvalue } = e.currentTarget.dataset;
    if (!itemvalue) return;
    setValue(prev => ({ ...prev, [objKey]: itemvalue }));
    setOpen(false);
  };

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

  const itemList = items.map(item => {
    return (
      <li
        data-itemvalue={item.value}
        onClick={handleClickItem}
        key={item.label}
        className={styles.selectItem}
        value={item.label}
      >
        {item.label}
      </li>
    );
  });

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
