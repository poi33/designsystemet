import type { ColorNames } from '@digdir/designsystemet';
import { omit } from '@digdir/designsystemet-react';
import { Slottable } from '@radix-ui/react-slot';
import cl from 'clsx/lite';
import { forwardRef } from 'react';
import classes from './color.module.css';

type ColorProps = {
  colorName: ColorNames;
  color: string;
  featured?: boolean;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>;

export const Color = forwardRef<HTMLButtonElement, ColorProps>(
  ({ color, featured, ...rest }, ref) => {
    return (
      <Slottable>
        <button
          ref={ref}
          style={{ backgroundColor: color }}
          className={cl(classes.box, featured && classes.featured, 'ds-focus')}
          type='button'
          {...omit(['colorName'], rest)}
        />
      </Slottable>
    );
  },
);
