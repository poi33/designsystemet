import { Slot } from '@radix-ui/react-slot';
import { forwardRef, type HTMLAttributes } from 'react';

export type PaginationItemProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & Omit<HTMLAttributes<HTMLLIElement>, 'size'>;

/**
 * PaginationItem component, use within a Pagination.List.
 *
 * @example
 * <PaginationList>
 *   <PaginationItem>
 *     <PaginationButton aria-label='Forrige side'>Forrige</PaginationButton>
 *   </PaginationItem>
 * </PaginationList>
 */
export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  function PaginationItem({ asChild, className, ...rest }, ref) {
    const Component = asChild ? Slot : 'li';

    return <Component ref={ref} {...rest} />;
  },
);
