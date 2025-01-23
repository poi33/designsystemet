import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { Button } from '../Button/Button';
import { Context } from './ModalTriggerContext';

export type ModalTriggerProps = ComponentPropsWithRef<typeof Button>;

/**
 * ModalTrigger component, used within a Modal.TriggerContext to open a modal.
 *
 * @example
 * <Modal.TriggerContext>
 *   <Modal.Trigger>Open Modal</Modal.Trigger>
 *   <Modal>
 *     Content
 *   </Modal>
 * </Modal.TriggerContext>
 */
export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  function ModalTrigger({ asChild, ...rest }, ref) {
    const contextRef = useContext(Context);
    const Component = asChild ? Slot : Button;

    return (
      <Component
        aria-haspopup='dialog'
        onClick={() => contextRef?.current?.showModal()}
        ref={ref}
        {...rest}
      />
    );
  },
);
