import type {
  Color,
  SeverityColors,
} from '@digdir/designsystemet-react/colors';
import type { MiddlewareState, Placement } from '@floating-ui/dom';
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';
import { Slot } from '@radix-ui/react-slot';
import cl from 'clsx/lite';
import type { HTMLAttributes } from 'react';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { useMergeRefs } from '../../utilities/hooks';
import { Context } from './popover-trigger-context';

// Make React support popovertarget attribute
// https://github.com/facebook/react/issues/27479
declare global {
  namespace React.JSX {
    interface IntrinsicAttributes {
      popovertarget?: string;
    }
  }
  namespace React {
    // biome-ignore lint/correctness/noUnusedVariables: we overwrite React's HTMLAttributes to add custom attributes
    interface HTMLAttributes<T> {
      popovertarget?: string;
    }
  }
}

export type PopoverProps = MergeRight<
  DefaultProps & HTMLAttributes<HTMLDivElement>,
  {
    /**
     * id to connect the trigger with the popover - required when not using Popover.Context.
     */
    id?: string;
    /**
     * Placement of the popover on the trigger.
     * @default 'top'
     */
    placement?: Placement;
    /**
     * When a boolean is provided, the popover will be controlled.
     * @default undefined
     */
    open?: boolean;
    /**
     * Change the background color of the popover.
     *
     * @default 'default'
     */
    variant?: 'default' | 'tinted';
    /**
     * Change the color scheme of the popover
     */
    'data-color'?: Color | SeverityColors;
    /**
     * Callback when the popover wants to open.
     */
    onOpen?: () => void;
    /**
     * Callback when the popover wants to close.
     */
    onClose?: () => void;
    /**
     * Whether to enable auto placement.
     * @default true
     */
    autoPlacement?: boolean;
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default false
     */
    asChild?: boolean;
  }
>;

/**
 * Popover component, used to display content in a popover over an element.
 *
 * @example with TriggerContext
 * <Popover.TriggerContext>
 *   <Popover.Trigger>Open Popover</Popover.Trigger>
 *   <Popover>
 *     Content
 *   </Popover>
 * </Popover.TriggerContext>
 *
 * @example without TriggerContext
 * <Button popovertarget="my-popover">Open Popover</Button>
 * <Popover id="my-popover">
 *   Content
 * </Popover>
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    {
      id,
      className,
      onClose,
      onOpen,
      open,
      variant = 'default',
      placement = 'top',
      autoPlacement = true,
      asChild = false,
      ...rest
    },
    ref,
  ) {
    const Component = asChild ? Slot : 'div';

    const popoverRef = useRef<HTMLDivElement>(null);
    const mergedRefs = useMergeRefs([popoverRef, ref]);
    const { popoverId, setPopoverId } = useContext(Context);
    const [internalOpen, setInternalOpen] = useState(false);
    const controlledOpen = open ?? internalOpen;

    // NOTE: This code is purely to add React controlled component ability to Popover API
    useEffect(() => {
      const popover = popoverRef.current;
      const handleClick = (event: MouseEvent) => {
        const el = event.target as Element | null;
        const isTrigger = el?.closest?.(`[popovertarget="${popover?.id}"]`);
        const isOutside = !isTrigger && !popover?.contains(el as Node);

        if (isTrigger) {
          event.preventDefault(); // Prevent native Popover API
          setInternalOpen((open) => !open);
          onOpen?.();
        }
        if (isOutside) {
          setInternalOpen(false);
          onClose?.();
        }
      };

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key !== 'Escape' || !controlledOpen) return;
        event.preventDefault(); // Prevent closing fullscreen in Safari
        setInternalOpen(false);
        onClose?.();
      };

      popover?.togglePopover?.(controlledOpen);
      document.addEventListener('click', handleClick, true); // Use capture to execute before React event API
      document.addEventListener('keydown', handleKeydown);
      return () => {
        document.removeEventListener('click', handleClick, true);
        document.removeEventListener('keydown', handleKeydown);
      };
    }, [controlledOpen]);

    // Position with floating-ui
    useEffect(() => {
      const popover = popoverRef.current;
      const trigger = document.querySelector(
        `[popovertarget="${popover?.id}"]`,
      );

      if (popover && trigger && controlledOpen)
        return autoUpdate(trigger, popover, () => {
          computePosition(trigger, popover, {
            placement,
            strategy: 'fixed',
            middleware: [
              offset((data) => {
                // get pseudo element arrow size
                const styles = getComputedStyle(
                  data.elements.floating,
                  '::before',
                );
                return parseFloat(styles.height);
              }),
              ...(autoPlacement
                ? [flip({ fallbackAxisSideDirection: 'start' }), shift()]
                : []),
              arrowPseudoElement,
            ],
          }).then(({ x, y }) => {
            popover.style.translate = `${x}px ${y}px`;
          });
        });
    }, [controlledOpen, placement, id, autoPlacement]);

    // Update context with id
    useEffect(() => {
      if (id) setPopoverId?.(id);
    }, [id]);

    return (
      <Component
        className={cl('ds-popover', className)}
        id={id || popoverId}
        popover='manual'
        data-variant={variant}
        ref={mergedRefs}
        {...rest}
      />
    );
  },
);

const arrowPseudoElement = {
  name: 'ArrowPseudoElement',
  fn(data: MiddlewareState) {
    const { elements, rects, placement } = data;

    let arrowX = `${Math.round(rects.reference.width / 2 + rects.reference.x - data.x)}px`;
    let arrowY = `${Math.round(rects.reference.height / 2 + rects.reference.y - data.y)}px`;

    if (rects.reference.width > rects.floating.width) {
      arrowX = `${Math.round(rects.floating.width / 2)}px`;
    }

    if (rects.reference.height > rects.floating.height) {
      arrowY = `${Math.round(rects.floating.height / 2)}px`;
    }

    switch (placement.split('-')[0]) {
      case 'top':
        arrowY = '100%';
        break;
      case 'right':
        arrowX = '0';
        break;
      case 'bottom':
        arrowY = '0';
        break;
      case 'left':
        arrowX = '100%';
        break;
    }

    elements.floating.setAttribute('data-placement', placement.split('-')[0]); // We only need top/left/right/bottom
    elements.floating.style.setProperty('--ds-popover-arrow-x', arrowX);
    elements.floating.style.setProperty('--ds-popover-arrow-y', arrowY);
    return data;
  },
};
