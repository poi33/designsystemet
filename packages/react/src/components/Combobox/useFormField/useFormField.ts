import cl from 'clsx/lite';
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { useContext, useId } from 'react';

import type { Size } from '../../../types';
import { FieldsetContext } from './FieldsetContext';

export type FormFieldProps = {
  /** Error message for form field */
  error?: ReactNode;
  /** Override generated errorId */
  errorId?: string;
  /** Disables element
   * @note Avoid using if possible for accessibility purposes
   */
  disabled?: boolean;
  /** Description for field */
  description?: ReactNode;
  /** Override internal id */
  id?: string;
  /** Toggle `readOnly` */
  readOnly?: boolean;
  /**
   * Changes field size and paddings
   * @default md
   */
  size?: Size;
} & Pick<HTMLAttributes<HTMLElement>, 'aria-describedby'>;

export type FormField = {
  hasError: boolean;
  errorId: string;
  descriptionId: string;
  inputProps: {
    id: string;
  } & Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'aria-invalid' | 'aria-describedby'
  >;
} & Pick<FormFieldProps, 'size' | 'readOnly'>;

/**
 * Handles props and their state for various form-fields in context with Fieldset
 */
export const useFormField = (
  props: FormFieldProps,
  prefix: string,
): FormField => {
  const fieldset = useContext(FieldsetContext);

  const randomId = useId();

  const id = props.id ?? `${prefix}-${randomId}`;
  const errorId = props.errorId ?? `${prefix}-error-${randomId}`;
  const descriptionId = `${prefix}-description-${randomId}`;
  const size = props.size ?? fieldset?.size ?? 'md';

  const disabled = fieldset?.disabled || props?.disabled;

  const hasError = !disabled && !!(props.error || fieldset?.error);

  return {
    hasError,
    errorId,
    descriptionId,
    size,
    inputProps: {
      id,
      disabled,
      'aria-invalid': hasError ? true : undefined,
      'aria-describedby':
        cl(
          props['aria-describedby'],
          !!props?.description &&
            typeof props?.description === 'string' &&
            descriptionId,
          hasError && !fieldset?.error && errorId,
          hasError && !!fieldset?.error && fieldset?.errorId,
        ) || undefined,
    },
  };
};
