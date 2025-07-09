import cl from 'clsx/lite';
import type { HTMLAttributes } from 'react';
import { createContext, forwardRef, useState } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';

export type TabsProps = MergeRight<
  DefaultProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'>,
  {
    /**
     * Controlled state for `Tabs` component
     * @default undefined
     */
    value?: string;
    /**
     * Default selected tab value
     * @default undefined
     */
    defaultValue?: string;
    /**
     * Callback with selected `TabItem` `value`
     * @default undefined
     */
    onChange?: (value: string) => void;
  }
>;

export type ContextProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const Context = createContext<ContextProps>({});

/**
 * Display a group of tabs that can be toggled between.
 *
 * @example
 * <Tabs onChange={(value) => console.log(value)}>
 *   <Tabs.List>
 *     <Tabs.Tab value='1'>Tab 1</Tabs.Tab>
 *     <Tabs.Tab value='2'>Tab 2</Tabs.Tab>
 *     <Tabs.Tab value='3'>Tab 3</Tabs.Tab>
 *   </Tabs.List>
 *   <Tabs.Panel value='1'>content 1</Tabs.Panel>
 *   <Tabs.Panel value='2'>content 2</Tabs.Panel>
 *   <Tabs.Panel value='3'>content 3</Tabs.Panel>
 * </Tabs>
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { value, defaultValue, className, onChange, ...rest },
  ref,
) {
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(defaultValue);

  let onValueChange = onChange;
  if (!isControlled) {
    onValueChange = (newValue: string) => {
      setUncontrolledValue(newValue);
      onChange?.(newValue);
    };
    value = uncontrolledValue;
  }
  return (
    <Context.Provider
      value={{
        value,
        defaultValue,
        onChange: onValueChange,
      }}
    >
      <div className={cl('ds-tabs', className)} ref={ref} {...rest} />
    </Context.Provider>
  );
});
