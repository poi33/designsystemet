import type { HTMLAttributes } from 'react';
import { forwardRef, useContext } from 'react';

import { RovingFocusRoot } from '../../utilities/roving-focus';

import { Context } from './tabs';

export type TabsListProps = HTMLAttributes<HTMLDivElement>;

/**
 * The container for all `Tab` components.
 *
 * @example
 * <Tabs.List>
 *  <Tabs.Tab value='1'>Tab 1</Tabs.Tab>
 *  <Tabs.Tab value='2'>Tab 2</Tabs.Tab>
 * </Tabs.List>
 */
export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  function TabsList({ children, ...rest }, ref) {
    const { value } = useContext(Context);

    return (
      <RovingFocusRoot
        role='tablist'
        activeValue={value}
        orientation='ambiguous'
        ref={ref}
        {...rest}
      >
        {children}
      </RovingFocusRoot>
    );
  },
);
