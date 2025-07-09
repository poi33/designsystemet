import { forwardRef } from 'react';
import { Button, type ButtonProps } from '../button';

/* We omit children since we render the icon with css */
export type SuggestionClearProps = Omit<ButtonProps, 'variant' | 'children'> & {
  /**
   * Aria label for the clear button
   * @default 'Tøm'
   */
  'aria-label'?: string;
};

/**
 * Component that provides a clear button for the Suggestion input.
 *
 * Place as a descendant of `Suggestion`
 *
 * @example
 * <Suggestion>
 *   <Suggestion.Input />
 *   <Suggestion.Clear />
 *   <Suggestion.List />
 * </Suggestion>
 */
export const SuggestionClear = forwardRef<
  HTMLButtonElement,
  SuggestionClearProps
>(function SuggestionClear(
  { 'aria-label': label = 'Tøm', onClick, ...rest },
  ref,
) {
  return (
    <Button
      aria-label={label}
      asChild
      icon
      hidden
      ref={ref}
      variant='tertiary'
      {...rest}
    >
      <del />
    </Button>
  );
});
