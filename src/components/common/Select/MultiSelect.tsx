import { ChevronDownIcon } from '@radix-ui/react-icons';
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

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
  value: SelectType;
  setValue: Dispatch<SetStateAction<T>>;
  objKey: keyof T;
}

const Select = <T,>({ items, value, setValue, objKey }: SelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<ValidRefTarget>(null);

  const handleClickItem = (e: MouseEvent<HTMLLIElement>) => {
    const { itemvalue, itemlabel } = e.currentTarget.dataset;
    if (!itemvalue) return;
    setValue(prev => ({
      ...prev,
      [objKey]: { value: itemvalue, label: itemlabel },
    }));
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
        data-itemlabel={item.label}
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
      {open && (
        <div className={styles.selectContent}>
          <div className={styles.selectViewport}>
            <ul>{itemList}</ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
