import * as Dialog from '@radix-ui/react-dialog';
import React, { forwardRef, ReactNode, Ref } from 'react';

import { cx } from '@/styles/classNames';

import { button } from '../Button/Button.css';
import * as styles from './Modal.css';

interface ModalProps {
  children?: ReactNode;
  overlay?: boolean;
  contentClassName?: string;
  trigger?: string;
  triggerClassName?: string;
}

const Modal = forwardRef(
  (
    {
      children,
      contentClassName,
      overlay,
      trigger,
      triggerClassName,
    }: ModalProps,
    forwardedRef,
  ) => (
    <Dialog.Root>
      {trigger && (
        <Dialog.Trigger className={cx(triggerClassName || button())}>
          {trigger}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        {overlay && <Dialog.Overlay className={styles.overlay} />}
        <Dialog.Content
          ref={forwardedRef as Ref<HTMLDivElement> | undefined}
          className={contentClassName || styles.content}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
);

const ModalClose = Dialog.Close;
const ModalTitle = Dialog.Title;
const ModalDescription = Dialog.Description;
const ModalTrigger = Dialog.Trigger;

export { Modal, ModalClose, ModalDescription, ModalTitle, ModalTrigger };
