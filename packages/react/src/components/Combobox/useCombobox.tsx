import type { ReactElement, ReactNode } from 'react';
import { Children, useCallback, useMemo, useState } from 'react';

import type { ComboboxProps } from './Combobox';
import type { ComboboxCustomProps } from './Custom';
import { type ComboboxOptionProps, isComboboxOption } from './Option/Option';
import { isInteractiveComboboxCustom, prefix } from './utilities';

export type UseComboboxProps = {
  children: ReactNode;
  inputValue: string;
  multiple: boolean;
  filter?: NonNullable<ComboboxProps['filter']>;
  initialValue?: string[];
};

export type Option = {
  value: string;
  label: string;
  displayValue?: string;
  description?: string;
};

const isOption = (option: Option | undefined): option is Option => !!option;

export function useCombobox({
  children,
  inputValue,
  multiple,
  filter = (inputValue, option) => {
    return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
  },
  initialValue,
}: UseComboboxProps) {
  const filterCallback = useCallback(filter, [filter]);

  const { optionsChildren, customIds, restChildren, interactiveChildren } =
    useMemo(() => {
      const allChildren = Children.toArray(children);

      const result = allChildren.reduce<{
        optionsChildren: ReactElement<ComboboxOptionProps>[];
        customIds: string[];
        restChildren: ReactNode[];
        interactiveChildren: ReactElement<ComboboxCustomProps>[];
      }>(
        (acc, child) => {
          if (isComboboxOption(child)) {
            acc.optionsChildren.push(child);
          } else {
            acc.restChildren.push(child);
            if (isInteractiveComboboxCustom(child)) {
              const childElement = child;
              acc.interactiveChildren.push(childElement);
              if (!childElement.props.id) {
                throw new Error(
                  'If ComboboxCustom is interactive, it must have an id',
                );
              }
              acc.customIds.push(childElement.props.id);
            }
          }
          return acc;
        },
        {
          optionsChildren: [],
          customIds: [],
          restChildren: [],
          interactiveChildren: [],
        },
      );

      return result;
    }, [children]);

  const options = useMemo(() => {
    const values: string[] = [];
    const allOptions: {
      [key: string]: Option;
    } = {};
    optionsChildren.map((child) => {
      const props = child.props;
      let label = props.displayValue || '';

      if (!props.displayValue) {
        let childrenLabel = '';

        // go over children and find all strings
        Children.forEach(props.children, (child) => {
          if (typeof child === 'string') {
            childrenLabel += child;
          } else {
            throw new Error(
              'If ComboboxOption is not a string, it must have a displayValue prop',
            );
          }
        });

        label = childrenLabel;
      }

      if (values.includes(props.value)) {
        console.warn(
          `Combobox has multiple options with the same value: ${props.value}`,
        );
      }

      values.push(props.value);

      allOptions[prefix(String(props.value))] = {
        value: String(props.value),
        label,
        displayValue: props.displayValue,
        description: props.description,
      };

      return null;
    });

    return allOptions;
  }, [optionsChildren]);

  const preSelectedOptions = useMemo(
    () =>
      (
        initialValue?.map((key) => {
          return prefix(key);
        }) || []
      ).reduce<{
        [key: string]: Option;
      }>((acc, value) => {
        const option = options[value];
        if (isOption(option)) {
          acc[value] = option;
        }
        return acc;
      }, {}),
    [initialValue, options],
  );

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: Option;
  }>(preSelectedOptions);

  const { filteredOptions, filteredOptionsChildren } = useMemo(() => {
    const filteredOptions: string[] = [];

    const filteredOptionsChildren = Object.keys(options)
      .map((option, index) => {
        /* If we have a selected value in single mode and the input matches an option, return all children */
        if (!multiple && Object.keys(selectedOptions).length === 1) {
          filteredOptions.push(option);
          return optionsChildren[index];
        }

        if (multiple && selectedOptions[option]) {
          filteredOptions.push(option);
          return optionsChildren[index];
        }

        if (filterCallback(inputValue, options[option])) {
          filteredOptions.push(option);
          return optionsChildren[index];
        }

        return null;
      })
      .filter((child) => child);

    return { filteredOptions, filteredOptionsChildren };
  }, [
    filterCallback,
    inputValue,
    multiple,
    options,
    optionsChildren,
    selectedOptions,
  ]);

  return {
    filteredOptionsChildren,
    filteredOptions,
    restChildren,
    options,
    customIds,
    selectedOptions,
    interactiveChildren,
    setSelectedOptions,
  };
}
