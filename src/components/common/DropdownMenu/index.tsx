import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { ComponentProps, ElementRef, forwardRef } from 'react';

import Col from '../_Grid/Col';

type DropdownMenuContentPrimitiveProps = ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
      {props.children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

type DialogMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps;

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
    <div>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </div>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DialogMenuRadioItemPrimitiveProps = ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps;

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
    <div style={{ position: 'absolute' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Col center>
          <div />
        </Col>
      </DropdownMenuPrimitive.ItemIndicator>
    </div>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuSubTrigger = DropdownMenuPrimitive.SubTrigger;
const DropdownMenuSubContent = DropdownMenuPrimitive.SubContent;
const DropdownPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuItem = DropdownMenuPrimitive.Item;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuLabel = DropdownMenuPrimitive.Label;
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;

export {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownPortal,
};
