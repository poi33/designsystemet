import { Slot } from '@radix-ui/react-slot';
import cl from 'clsx/lite';
import type { LabelHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { DefaultProps } from '../../types';

export type LabelProps = {
  /**
   * Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset
   * @default 'medium'
   */
  weight?: 'regular' | 'medium' | 'semibold';
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement> &
  DefaultProps;

/**
 * Use `Label` for labels. Renders a native `label` element.
 *
 * @example
 * <Label data-size='lg' weight='medium'>Label</Label>
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { className, weight = 'medium', asChild, ...rest },
  ref,
) {
  const Component = asChild ? Slot : 'label';

  return (
    <Component
      ref={ref}
      className={cl('ds-label', className)}
      data-weight={weight}
      {...rest}
    />
  );
});
