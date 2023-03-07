import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import cx from 'classnames';
import { ReactNode } from 'react';

import * as styles from './ScrollArea.css';

interface ScrollAreaProps {
  children?: ReactNode;
  scrollbarStyle?: string;
  thumbStyle?: string;
  className?: string;
}

const ScrollArea = ({
  children,
  scrollbarStyle,
  thumbStyle,
  className,
}: ScrollAreaProps) => (
  <RadixScrollArea.Root className={cx(styles.root)}>
    <RadixScrollArea.Viewport className={cx(styles.viewport, className)}>
      {children}
    </RadixScrollArea.Viewport>
    <RadixScrollArea.Scrollbar
      className={scrollbarStyle || styles.scrollbar()}
      orientation="vertical"
      forceMount
    >
      <RadixScrollArea.Thumb className={thumbStyle || styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Scrollbar
      className={scrollbarStyle || styles.scrollbar()}
      orientation="horizontal"
      forceMount
    >
      <RadixScrollArea.Thumb className={thumbStyle || styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Corner className={styles.corner} />
  </RadixScrollArea.Root>
);

export default ScrollArea;
