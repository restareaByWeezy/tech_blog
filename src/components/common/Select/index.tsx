import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import cx from 'classnames';
import React, { forwardRef } from 'react';

import Text from '../Text/Text';
import * as styles from './SelectStyle.css';

interface SelectItemProps extends RadixSelect.SelectItemProps {
  children: React.ReactNode;
  className?: string;
}

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cx('SelectItem', className)}
        ref={forwardedRef}
        {...props}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  },
);

interface SelectProps {
  items: string[];
  label?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  value: string;
  onChange: (value: string) => void;
}

const Select = ({
  items,
  label,
  placeholder,
  value,
  onChange,
}: SelectProps) => {
  const itemList = items.map(item => {
    return (
      <SelectItem key={item} className={styles.selectItem} value={item}>
        {item}
      </SelectItem>
    );
  });

  return (
    <RadixSelect.Root value={value} onValueChange={onChange}>
      <RadixSelect.Trigger className={styles.selectTrigger} aria-label={label}>
        <RadixSelect.Value placeholder={placeholder}>
          <Text className={styles.selectValue}>{value}</Text>
        </RadixSelect.Value>
        <RadixSelect.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content className={styles.selectContent}>
        <RadixSelect.ScrollUpButton className={styles.selectScrollButton}>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className={styles.selectViewport}>
          <RadixSelect.Group>
            {label && (
              <RadixSelect.Label className={styles.selectLabel}>
                {label}
              </RadixSelect.Label>
            )}
            {itemList}
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className={styles.selectScrollButton}>
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

export default Select;
