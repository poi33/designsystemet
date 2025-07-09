import { useMergeRefs } from '@floating-ui/react';
import type { Ref } from 'react';
import { useContext, useEffect, useId, useMemo } from 'react';

import { useDebounceCallback } from '../../../utilities/hooks/use-debounce-callback/use-debounce-callback';
import { ComboboxContext } from '../ComboboxContext';
import { useComboboxId, useComboboxIdDispatch } from '../ComboboxIdContext';
import type { Option } from '../useCombobox';
import { prefix } from '../utilities';

type UseComboboxOptionProps = {
  id?: string;
  ref: Ref<HTMLButtonElement>;
  value: string;
};

type UseComboboxOptionReturn = {
  id: string;
  ref: Ref<HTMLButtonElement>;
  selected: Option;
  active: boolean;
  onOptionClick: () => void;
};

export const useComboboxOption = ({
  id,
  ref,
  value,
}: UseComboboxOptionProps): UseComboboxOptionReturn => {
  const generatedId = useId();
  const newId = id || generatedId;

  const context = useContext(ComboboxContext);
  const { activeIndex } = useComboboxId();
  const dispatch = useComboboxIdDispatch();
  if (!context) {
    throw new Error('ComboboxOption must be used within a Combobox');
  }
  const {
    selectedOptions,
    onOptionClick,
    setListRef,
    customIds,
    filteredOptions,
  } = context;

  const index = useMemo(
    () => filteredOptions.indexOf(prefix(String(value))) + customIds.length,
    [customIds.length, filteredOptions, value],
  );

  const combinedRef = useMergeRefs([
    (node: HTMLElement | null) => {
      setListRef(index, node);
    },
    ref,
  ]);

  if (index === -1) {
    throw new Error('Internal error: ComboboxOption did not find index');
  }

  const selected = selectedOptions[prefix(value)];
  const active = activeIndex === index;

  useEffect(() => {
    if (active) {
      dispatch?.({ type: 'SET_ACTIVE_INDEX', payload: index });
    }
  }, [generatedId, id, dispatch, active, index]);

  const onOptionClickDebounced = useDebounceCallback(
    () => onOptionClick(value),
    50,
  );

  return {
    id: newId,
    ref: combinedRef,
    selected,
    active,
    onOptionClick: onOptionClickDebounced,
  };
};
