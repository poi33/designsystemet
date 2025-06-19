import type { KeyboardEvent } from 'react';
import { useDebounceCallback } from '../../utilities';
import type { ComboboxContextType } from './ComboboxContext';
import { useComboboxId } from './ComboboxIdContext';
import type { useCombobox } from './useCombobox';

type UseComboboxKeyboardProps = {
  filteredOptions: ReturnType<typeof useCombobox>['filteredOptions'];
  selectedOptions: ReturnType<typeof useCombobox>['selectedOptions'];
  interactiveChildren: ReturnType<typeof useCombobox>['interactiveChildren'];
  options: ReturnType<typeof useCombobox>['options'];
  readOnly: boolean;
  disabled: boolean;
  inputValue: string;
  multiple: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
  setInputValue: (value: string) => void;
  handleSelectOption: ComboboxContextType['handleSelectOption'];
};

export const useComboboxKeyboard = ({
  readOnly,
  disabled,
  interactiveChildren,
  filteredOptions,
  inputValue,
  selectedOptions,
  multiple,
  open,
  options,
  setOpen,
  handleSelectOption,
}: UseComboboxKeyboardProps) => {
  const { activeIndex } = useComboboxId();

  // handle keyboard navigation in the list
  const handleKeyDownFunc = (event: KeyboardEvent) => {
    if (readOnly || disabled) return;
    if (!event) return;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (open) break;

        setOpen(true);
        break;
      case 'ArrowUp':
        event.preventDefault();
        /* If we are on the first item, close */
        if (activeIndex !== 0) break;

        setOpen(false);
        break;
      case 'Enter': {
        event.preventDefault();
        // ignore if it is closed
        if (!open) break;

        // check if we are in the custom components
        if (activeIndex <= interactiveChildren.length - 1) {
          const selectedComponent = interactiveChildren[activeIndex];
          if (selectedComponent.props.onSelect) {
            selectedComponent?.props.onSelect();
            return;
          }
        }

        // if we are in the options, find the actual index
        const valueIndex = activeIndex - interactiveChildren.length;

        const option = filteredOptions[valueIndex];

        handleSelectOption({ option: options[option] });
        break;
      }

      case 'Backspace':
        // if we are in single mode, we need to set selectedOptions to empty
        if (!multiple) {
          const lastOption = Object.keys(selectedOptions).pop();
          lastOption &&
            handleSelectOption({
              option: selectedOptions[lastOption],
              remove: true,
            });
          break;
        }

        if (inputValue === '' && multiple) {
          const lastOption = Object.keys(selectedOptions).pop();
          /* Remove last option, and use handleSelectOption */
          lastOption &&
            handleSelectOption({
              option: selectedOptions[lastOption],
              remove: true,
            });
        }
        break;

      default:
        break;
    }
  };

  const handleKeyDown = useDebounceCallback(handleKeyDownFunc, 20);

  return handleKeyDown;
};
