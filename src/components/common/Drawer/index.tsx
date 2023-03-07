import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, ReactNode, Ref } from 'react';

import * as styles from './Drawer.css';
import DrawerLayout from './DrawerLayout';

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;

interface DrawerContentProps {
  children: ReactNode;
  ref?: Ref<DialogContentPrimitiveProps>;
  forwardedRef?: Ref<HTMLDivElement> | undefined;
  side?: 'left' | 'right' | 'top' | 'bottom';
  overlay?: boolean;
  title?: ReactNode | string;
  position?: 'first' | 'second';
}

const DrawerContent = forwardRef(
  (
    {
      title,
      children,
      side,
      overlay,
      position,
      ...props
    }: DrawerContentProps & DialogContentPrimitiveProps,
    forwardedRef,
  ) => (
    <DialogPrimitive.Portal>
      {overlay && <DialogPrimitive.Overlay className={styles.overlay} />}
      <DialogPrimitive.Content
        className={styles.styledContent({ side: side, position: position })}
        {...props}
        ref={forwardedRef as Ref<HTMLDivElement> | undefined}
      >
        <DrawerLayout children={children} title={title} />
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);

const DrawerClose = DialogPrimitive.Close;
const DrawerTitle = DialogPrimitive.Title;
const DrawerDescription = DialogPrimitive.Description;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
};
