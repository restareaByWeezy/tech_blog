import { Drawer, DrawerContent } from '../common/Drawer';
import * as styles from './MenuDrawer.css';
import Menus from './Menus';

interface MenuDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MenuDrawer = ({ open, onOpenChange }: MenuDropdownProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent overlay side="right">
        <div className={styles.menuWrapper}>
          <Menus />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
