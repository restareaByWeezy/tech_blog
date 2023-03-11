import Link from 'next/link';

import { Drawer, DrawerContent } from '../common/Drawer';
import * as styles from './MenuDrawer.css';

interface MenuDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MenuDrawer = ({ open, onOpenChange }: MenuDropdownProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent overlay side="right">
        <ul className={styles.menuWrapper}>
          <li>
            <Link href="/" passHref>
              <a className={styles.menuItem}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <a className={styles.menuItem}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/restareaByWeezy">
              <a className={styles.menuItem}>Github</a>
            </Link>
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
