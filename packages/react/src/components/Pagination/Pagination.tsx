import { Slot } from '@radix-ui/react-slot';
import cl from 'clsx/lite';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';

export type PaginationProps = MergeRight<
  DefaultProps & HTMLAttributes<HTMLElement>,
  {
    /**
     * Sets the screen reader label for the Pagination area
     * @default Sidenavigering
     */
    'aria-label'?: string;
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default false
     */
    asChild?: boolean;
  }
>;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    { 'aria-label': ariaLabel = 'Sidenavigering', asChild, className, ...rest },
    ref,
  ) {
    const Component = asChild ? Slot : 'nav';

    return (
      <Component
        aria-label={ariaLabel}
        className={cl('ds-pagination', className)}
        ref={ref}
        {...rest}
      />
    );
  },
);
