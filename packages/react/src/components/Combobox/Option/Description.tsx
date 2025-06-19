import cl from 'clsx/lite';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

type ComboboxOptionDescriptionProps = HTMLAttributes<HTMLSpanElement>;

const ComboboxOptionDescription = forwardRef<
  HTMLSpanElement,
  ComboboxOptionDescriptionProps
>(({ children, className, ...rest }, ref) => {
  return (
    <span
      className={cl('ds-combobox__option__description', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  );
});

ComboboxOptionDescription.displayName = 'ComboboxOptionDescription';

export default ComboboxOptionDescription;
