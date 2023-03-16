import Link from 'next/link';
import { ReactNode, useReducer } from 'react';

import { IconGithub, IconHamburger, IconLinkedIn } from '@/assets/svg';
import { useIsMobile } from '@/hooks/useReponsive';
import { cx } from '@/styles/classNames';
import { vars } from '@/styles/vars.css';

import Row from '../common/_Grid/Row';
import Text from '../common/Text/Text';
import * as styles from './Layout.css';
import MenuDrawer from './MenuDrawer';
import Menus from './Menus';

interface LayoutProps {
  content: ReactNode;
}

const Layout = ({ content }: LayoutProps) => {
  const [open, toggleOpen] = useReducer(state => !state, false);
  const { isMobile } = useIsMobile();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Text size="h2" weight="bold">
              chillinmice.dev
            </Text>
          </a>
        </Link>
        {isMobile && (
          <>
            <button
              onClick={toggleOpen}
              className={cx('iconButton', styles.menuButton)}
            >
              <IconHamburger />
            </button>
            <MenuDrawer open={open} onOpenChange={toggleOpen} />
          </>
        )}
        {!isMobile && (
          <Row
            gap={vars.space.s30}
            align="center"
            className={styles.menuWrapper}
          >
            <Menus />
          </Row>
        )}
      </header>
      <main className={styles.content}>{content}</main>
      <footer className={styles.footer}>
        <Link href="https://github.com/restareaByWeezy" passHref>
          <a className={styles.link}>
            <IconGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/easurmind" passHref>
          <a className={styles.link}>
            <IconLinkedIn />
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
