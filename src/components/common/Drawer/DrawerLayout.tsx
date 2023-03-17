import { Cross1Icon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

import { vars } from '@/styles/vars.css';

import Text from '../Text/Text';
import { DrawerClose } from '.';
import * as styles from './DrawerLayout.css';

interface DrawerLayoutProps {
  children: ReactNode;
  title: ReactNode | string;
  closeIcon?: boolean;
}

const DrawerLayout = ({ children, title, closeIcon }: DrawerLayoutProps) => {
  return (
    <aside className={styles.wrapper}>
      {title && (
        <header className={styles.header}>
          {typeof title === 'string' ? (
            <Text type="h1" size="h2" weight="semiBold">
              {title}
            </Text>
          ) : (
            title
          )}
          {closeIcon && (
            <DrawerClose aria-label="Close" className={styles.closeBtn}>
              <Cross1Icon
                color={vars.color.white}
                width={'100%'}
                height={'100%'}
              />
            </DrawerClose>
          )}
        </header>
      )}
      <section className={styles.content}>{children}</section>
    </aside>
  );
};

export default DrawerLayout;
