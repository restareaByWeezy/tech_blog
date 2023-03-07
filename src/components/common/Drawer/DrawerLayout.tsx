import { ReactNode } from 'react';

import { CloseIcon } from '@/assets/svgs';

import Text from '../Text/Text';
import { DrawerClose } from '.';
import * as styles from './DrawerLayout.css';

interface DrawerLayoutProps {
  children: ReactNode;
  title: ReactNode | string;
}

const DrawerLayout = ({ children, title }: DrawerLayoutProps) => {
  return (
    <aside className={styles.wrapper}>
      <header className={styles.header}>
        {typeof title === 'string' ? (
          <Text type="h1" size="h2" weight="semiBold">
            {title}
          </Text>
        ) : (
          title
        )}
        <DrawerClose aria-label="Close" className={styles.closeBtn}>
          <CloseIcon width={'100%'} height={'100%'} />
        </DrawerClose>
      </header>
      <section className={styles.content}>{children}</section>
    </aside>
  );
};

export default DrawerLayout;
