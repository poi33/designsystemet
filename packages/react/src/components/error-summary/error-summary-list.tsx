import { forwardRef } from 'react';
import { List, type ListUnorderedProps } from '../list';

export type ErrorSummaryListProps = ListUnorderedProps;

export const ErrorSummaryList = forwardRef<
  HTMLOListElement,
  ErrorSummaryListProps
>(function ErrorSummaryList({ ...rest }: ErrorSummaryListProps, ref) {
  return <List.Unordered {...rest} ref={ref} />;
});
