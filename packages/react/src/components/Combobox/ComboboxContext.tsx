import type {
  UseFloatingReturn,
  UseListNavigationProps,
  useInteractions,
} from '@floating-ui/react';
import type { Dispatch, Ref, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';
import type { ComboboxProps } from './Combobox';
import type { Option, useCombobox } from './useCombobox';
import type { useFormField } from './useFormField/useFormField';

export type ComboboxContextType = {
  multiple: NonNullable<ComboboxProps['multiple']>;
  disabled: NonNullable<ComboboxProps['disabled']>;
  readOnly: NonNullable<ComboboxProps['readOnly']>;
  htmlSize: ComboboxProps['htmlSize'];
  clearButtonLabel: NonNullable<ComboboxProps['clearButtonLabel']>;
  filteredOptions: ReturnType<typeof useCombobox>['filteredOptions'];
  options: {
    [key: string]: Option;
  };
  selectedOptions: {
    [key: string]: Option;
  };
  size: NonNullable<ComboboxProps['size']>;
  formFieldProps: ReturnType<typeof useFormField>;
  refs: UseFloatingReturn['refs'];
  inputRef: RefObject<HTMLInputElement | null>;
  open: boolean;
  inputValue: string;
  customIds: string[];
  setInputValue: Dispatch<SetStateAction<string>>;
  setOpen: (open: boolean) => void;
  getReferenceProps: (
    props?: Record<string, unknown>,
  ) => Record<string, unknown>;
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
  onOptionClick: (value: string) => void;
  chipSrLabel: NonNullable<ComboboxProps['chipSrLabel']>;
  handleSelectOption: (args: {
    option: Option | null;
    remove?: boolean;
    clear?: boolean;
  }) => void;
  listRef: UseListNavigationProps['listRef'];
  forwareddRef: Ref<HTMLInputElement>;
  setListRef: (index: number, ref: HTMLElement | null) => void;
};

export const ComboboxContext = createContext<ComboboxContextType | undefined>(
  undefined,
);
