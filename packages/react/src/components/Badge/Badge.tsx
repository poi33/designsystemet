import cl from 'clsx/lite';
import { type HTMLAttributes, forwardRef } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';

export type BadgeProps = MergeRight<
  DefaultProps & HTMLAttributes<HTMLSpanElement>,
  {
    /**
     * The number to display in the badge
     */
    count?: number;
    /**
     * The maximum number to display in the badge, when the count exceeds this number, the badge will display `{max}+`
     */
    maxCount?: number;
    children?: never;
  }
>;

/**
 * `Badge` is a non-interactive component for displaying status with or without numbers.
 *
 * @example
 * <Badge count={5} maxCount={10} />
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, count, maxCount, ...rest },
  ref,
) {
  return (
    <span
      className={cl('ds-badge', className)}
      data-count={
        count && maxCount && count > maxCount ? `${maxCount}+` : count
      }
      ref={ref}
      {...rest}
    />
  );
});
