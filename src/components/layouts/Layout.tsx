import { ReactNode } from 'react';

import { IconHamburger } from '@/assets/svg';
import { cx } from '@/styles/classNames';

import Text from '../common/Text/Text';
import * as styles from './Layout.css';

interface LayoutProps {
  content: ReactNode;
}

const Layout = ({ content }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text size="h2" weight="bold">
          chillinmice.dev
        </Text>
        <button className={cx('iconButton', styles.menuButton)}>
          <IconHamburger />
        </button>
      </header>
      <main className={styles.content}>{content}</main>
      <footer className={styles.header}>footer</footer>
    </div>
  );
};

export default Layout;
