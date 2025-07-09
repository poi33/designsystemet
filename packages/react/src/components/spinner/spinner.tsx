import cl from 'clsx/lite';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { useSynchronizedAnimation } from '../../utilities';
import { useMergeRefs } from '../../utilities/hooks';

export type SpinnerProps = {
  /**
   * Accessibile label
   */
  'aria-label'?: string;
  /**
   * Spinner size
   */
  'data-size'?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & ComponentPropsWithoutRef<'svg'> &
  (
    | { 'aria-label': string; 'aria-hidden'?: never }
    | { 'aria-label'?: string; 'aria-hidden': true | 'true' } // Make aria-label optional when aria-hidden is true
  );

/**
 * Spinner component used for indicating busy or indeterminate loading.
 *
 * @example
 * <Spinner aria-label='Loading users...' />
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  { 'aria-label': ariaLabel, className, ...rest }: SpinnerProps,
  ref,
) {
  const svgRef = useSynchronizedAnimation<SVGSVGElement>(
    'ds-spinner-rotate-animation',
  );

  const strokeRef = useSynchronizedAnimation<SVGCircleElement>(
    'ds-spinner-stroke-animation',
  );

  const mergedRefs = useMergeRefs([svgRef, ref]);

  return (
    <svg
      aria-label={ariaLabel}
      className={cl('ds-spinner', className)}
      ref={mergedRefs}
      role='img'
      viewBox='0 0 50 50'
      {...rest}
    >
      <circle
        className={cl('ds-spinner__background')}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
      <circle
        className={cl(`ds-spinner__circle`)}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
        ref={strokeRef}
      />
    </svg>
  );
});
