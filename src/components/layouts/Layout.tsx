import { ReactNode, useReducer } from 'react';

import { IconHamburger } from '@/assets/svg';
import { cx } from '@/styles/classNames';

import Text from '../common/Text/Text';
import * as styles from './Layout.css';
import MenuDrawer from './MenuDrawer';

interface LayoutProps {
  content: ReactNode;
}

const Layout = ({ content }: LayoutProps) => {
  const [open, toggleOpen] = useReducer(state => !state, false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text size="h2" weight="bold">
          chillinmice.dev
        </Text>
        <button
          onClick={toggleOpen}
          className={cx('iconButton', styles.menuButton)}
        >
          <IconHamburger />
        </button>
        <MenuDrawer open={open} onOpenChange={toggleOpen} />
      </header>
      <main className={styles.content}>{content}</main>
      <footer className={styles.header}>footer</footer>
    </div>
  );
};

export default Layout;
