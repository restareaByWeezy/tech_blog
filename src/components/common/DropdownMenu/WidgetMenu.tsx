import { ChevronRightIcon } from '@radix-ui/react-icons';

import {
  ChatIcon,
  CopyIcon,
  DotsVerticalIcon,
  DownloadIcon,
  GearIcon,
  InputIcon,
  TrashIcon,
} from '@/assets/svgs';
import { useTableStore } from '@/store/tableStore';
import { cx } from '@/styles/classNames';
import { iconHover } from '@/styles/utils.css';

import Text from '../Text/Text';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '.';
import * as styles from './DropdownMenu.css';

const WidgetMenu = () => {
  const { toggleDrawer } = useTableStore();

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button
          className={cx(styles.IconButton, iconHover)}
          aria-label="Customise options"
        >
          <DotsVerticalIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={styles.DropdownMenuContent}
        sideOffset={5}
      >
        <DropdownMenuItem
          className={styles.DropdownMenuItem}
          onClick={toggleDrawer}
        >
          <GearIcon /> <Text className={styles.MenuText}>설정</Text>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.DropdownMenuItem}>
          <ChatIcon /> <Text className={styles.MenuText}>코멘트 추가</Text>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={styles.DropdownMenuItem}>
            <DownloadIcon /> <Text className={styles.MenuText}>다운로드</Text>
            <div className={styles.RightSlot}>
              <ChevronRightIcon />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent
            className={styles.DropdownMenuContent}
            sideOffset={2}
            alignOffset={-5}
          >
            <DropdownMenuItem className={styles.DropdownMenuItem}>
              Save Page As… <div className={styles.RightSlot}>⌘+S</div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem className={styles.DropdownMenuItem}>
          <InputIcon /> <Text className={styles.MenuText}>이름 수정</Text>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.DropdownMenuItem}>
          <CopyIcon /> <Text className={styles.MenuText}>위젯 복사</Text>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.DropdownMenuItem}>
          <TrashIcon /> <Text className={styles.MenuText}>위젯 삭제</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export default WidgetMenu;
