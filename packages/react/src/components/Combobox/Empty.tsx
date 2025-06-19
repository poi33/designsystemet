import cl from 'clsx/lite';
import type { HTMLAttributes } from 'react';
import { forwardRef, useContext } from 'react';

import { Label } from '../Label';

import { ComboboxContext } from './ComboboxContext';

export type ComboboxEmptyProps = HTMLAttributes<HTMLDivElement>;

const ComboboxEmpty = forwardRef<HTMLDivElement, ComboboxEmptyProps>(
  ({ children, className, ...rest }, ref) => {
    const context = useContext(ComboboxContext);
    if (!context) {
      throw new Error('ComboboxEmpty must be used within a Combobox');
    }

    const { filteredOptions, size } = context;

    return (
      filteredOptions.length === 0 && (
        <Label data-size={size} asChild>
          <div
            ref={ref}
            className={cl('ds-combobox__empty', className)}
            {...rest}
          >
            {children}
          </div>
        </Label>
      )
    );
  },
);

ComboboxEmpty.displayName = 'ComboboxEmpty';

export { ComboboxEmpty };
