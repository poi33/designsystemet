// Logic from: https://www.joshuawootonn.com/react-roving-tabindex
// Inspired by: https://github.com/radix-ui/primitives/tree/main/packages/react/roving-focus/src

import { createContext, useRef, useState, forwardRef } from 'react';
import type {
  MutableRefObject,
  ReactNode,
  HTMLAttributes,
  FocusEvent,
} from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { Slot } from '@radix-ui/react-slot';

import type { OverridableComponent } from '../../types/OverridableComponent';

type RovingFocusRootBaseProps = {
  /** The children of the `RovingFocusRoot`. The children should get their roving-relevant props from the `useRovingFocus` hook. */
  children: ReactNode;
  /** The value of the element that should be focused when the `RovingFocusRoot` receives focus. */
  valueId?: string;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & HTMLAttributes<HTMLElement>;

export type RovingFocusElement = {
  value: string;
  element: HTMLElement;
};

export type RovingFocusProps = {
  elements: MutableRefObject<Map<string, HTMLElement>>;
  getOrderedItems: () => RovingFocusElement[];
  setFocusableValue: (value: string) => void;
  focusableValue: string | null;
  onShiftTab: () => void;
};

export const RovingFocusContext = createContext<RovingFocusProps>({
  elements: { current: new Map<string, HTMLElement>() },
  getOrderedItems: () => [],
  setFocusableValue: () => {
    /* intentionally empty */
  },
  onShiftTab: () => {
    /* intentionally empty */
  },
  focusableValue: null,
});

export const RovingFocusRoot: OverridableComponent<
  RovingFocusRootBaseProps,
  HTMLElement
> = forwardRef(
  ({ valueId, as = 'div', asChild, onBlur, onFocus, ...rest }, ref) => {
    const Component = asChild ? Slot : as;

    const [focusableValue, setFocusableValue] = useState<string | null>(null);
    const [isShiftTabbing, setIsShiftTabbing] = useState(false);
    const elements = useRef(new Map<string, HTMLElement>());
    const myRef = useRef<HTMLElement>();

    const refs = useMergeRefs([ref, myRef]);

    const getOrderedItems = (): RovingFocusElement[] => {
      if (!myRef.current) return [];
      const elementsFromDOM = Array.from(
        myRef.current.querySelectorAll<HTMLElement>(
          '[data-roving-tabindex-item]',
        ),
      );

      return Array.from(elements.current)
        .sort(
          (a, b) =>
            elementsFromDOM.indexOf(a[1]) - elementsFromDOM.indexOf(b[1]),
        )
        .map(([value, element]) => ({ value, element }));
    };

    return (
      <RovingFocusContext.Provider
        value={{
          elements,
          getOrderedItems,
          focusableValue,
          setFocusableValue,
          onShiftTab: () => {
            setIsShiftTabbing(true);
          },
        }}
      >
        <Component
          {...rest}
          tabIndex={isShiftTabbing ? -1 : 0}
          onBlur={(e: FocusEvent<HTMLElement>) => {
            onBlur?.(e);
            setIsShiftTabbing(false);
          }}
          onFocus={(e: FocusEvent<HTMLElement>) => {
            onFocus?.(e);
            if (e.target !== e.currentTarget) return;
            const orderedItems = getOrderedItems();
            if (orderedItems.length === 0) return;

            if (focusableValue != null) {
              elements.current.get(focusableValue)?.focus();
            } else if (valueId != null) {
              elements.current.get(valueId)?.focus();
            } else {
              orderedItems.at(0)?.element.focus();
            }
          }}
          ref={refs}
        />
      </RovingFocusContext.Provider>
    );
  },
);
