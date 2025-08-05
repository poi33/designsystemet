import { useMergeRefs } from '@floating-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import cl from 'clsx/lite';
import type {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { useContext, useRef } from 'react';
import { Paragraph } from '../../paragraph/paragraph';
import type { ComboboxProps } from '../Combobox';
import { ComboboxContext } from '../ComboboxContext';
import { useComboboxIdDispatch } from '../ComboboxIdContext';
import { omit } from '../omit/omit';
import { prefix } from '../utilities';
import ComboboxChips from './ComboboxChips';
import ComboboxClearButton from './ComboboxClearButton';

type ComboboxInputProps = {
  hideClearButton: ComboboxProps['hideClearButton'];
  listId: string;
  error: ComboboxProps['error'];
  hideChips: NonNullable<ComboboxProps['hideChips']>;
  handleKeyDown: (event: KeyboardEvent) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const ComboboxInput = ({
  hideClearButton,
  listId,
  error,
  hideChips,
  handleKeyDown,
  ...rest
}: ComboboxInputProps) => {
  const context = useContext(ComboboxContext);
  const idDispatch = useComboboxIdDispatch();
  const clearButtonRef = useRef<HTMLButtonElement>(null);

  if (!context) {
    throw new Error('ComboboxContext is missing');
  }

  const setActiveIndex = (id: number) => {
    idDispatch?.({ type: 'SET_ACTIVE_INDEX', payload: id });
  };

  const {
    forwareddRef,
    readOnly,
    disabled,
    open,
    inputRef,
    refs,
    inputValue,
    multiple,
    selectedOptions,
    formFieldProps,
    htmlSize,
    options,
    setOpen,
    getReferenceProps,
    setInputValue,
    handleSelectOption,
    size,
  } = context;

  const mergedRefs = useMergeRefs([forwareddRef, inputRef]);

  // onChange function for the input
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setActiveIndex(0);

    // check if input value is the same as a label, if so, select it
    for (const option of Object.values(options)) {
      if (option.label.toLowerCase() === value.toLowerCase()) {
        /* if option is already selected, discard selecting it, since it would de-select */
        if (selectedOptions[prefix(option.value)]) continue;
        handleSelectOption({ option });
      }
    }
  };

  const showClearButton =
    !hideClearButton && Object.keys(selectedOptions).length > 0;

  /* Props from floating-ui */
  const props = getReferenceProps({
    ref: refs?.setReference,
    role: null,
    'aria-controls': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    /* If we click the wrapper, toggle open, set index to first option, and focus the input */
    onClick(event: MouseEvent<HTMLDivElement>) {
      if (disabled) return;
      if (readOnly) return;
      if (clearButtonRef.current?.contains(event.target as Node)) return;
      setOpen(!open);
      setActiveIndex(0);
      inputRef.current?.focus();
    },
    /* Handles list navigation */
    onKeyDown: handleKeyDown,
    // preventDefault on keydown to avoid sending in form
    onKeyPress(event: KeyboardEvent<HTMLDivElement>) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    },
  });

  return (
    <Paragraph data-size={size} asChild>
      <div
        {...props}
        aria-disabled={disabled ? 'true' : undefined}
        className={cl(
          'ds-textfield__input',
          'ds-combobox__input__wrapper',
          readOnly && 'ds-combobox--readonly',
          error && 'ds-combobox--error',
        )}
      >
        <div className={'ds-combobox__chip-and-input'}>
          {/* If the input is in multiple mode, we need to display chips */}
          {multiple && !hideChips && <ComboboxChips />}
          <Paragraph data-size={size} asChild>
            {/* biome-ignore lint/a11y/useSemanticElements: This is a combobox input */}
            <input
              ref={mergedRefs}
              aria-activedescendant={props['aria-activedescendant'] as string}
              readOnly={readOnly}
              aria-autocomplete='list'
              role='combobox'
              aria-expanded={open}
              aria-controls={open ? listId : undefined}
              autoComplete='off'
              size={htmlSize}
              value={inputValue}
              {...omit(['style', 'className'], rest)}
              {...formFieldProps.inputProps}
              className='ds-combobox__input'
              onChange={(e) => {
                onChange(e);
                !open && setOpen(true);
                rest.onChange?.(e);
              }}
            />
          </Paragraph>
        </div>
        {/* Clear button if we are in multiple mode and have at least one active value */}
        {showClearButton && <ComboboxClearButton ref={clearButtonRef} />}
        {/* Arrow for combobox. Click is handled by the wrapper */}
        <div className={'ds-combobox__arrow'}>
          {open ? (
            <ChevronUpIcon title='arrow up' fontSize='1.5em' />
          ) : (
            <ChevronDownIcon title='arrow down' fontSize='1.5em' />
          )}
        </div>
      </div>
    </Paragraph>
  );
};

ComboboxInput.displayName = 'ComboboxInput';

export default ComboboxInput;
