import type { HTMLAttributes } from 'react';
import { forwardRef, useContext, useId } from 'react';

import { RovingFocusItem } from '../../utilities/RovingFocus/RovingFocusItem';
import { Context } from './Tabs';

export type TabsTabProps = {
  /**
   * Unique value that will be set in the `Tabs` components state when the tab is activated
   */
  value: string;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'value'>;

/**
 * A single item in a Tabs component.
 *
 * @example
 * <Tabs.Tab value='1'>Tab 1</Tabs.Tab>
 */
export const TabsTab = forwardRef<HTMLButtonElement, TabsTabProps>(
  function TabsTab({ value, id, ...rest }, ref) {
    const tabs = useContext(Context);
    const generatedId = useId();
    const buttonId = id ?? `tab-${generatedId}`;

    return (
      <RovingFocusItem value={value} {...rest} asChild>
        <button
          {...rest}
          aria-selected={tabs.value === value}
          id={buttonId}
          onClick={() => tabs.onChange?.(value)}
          ref={ref}
          role='tab'
          type='button'
        />
      </RovingFocusItem>
    );
  },
);
