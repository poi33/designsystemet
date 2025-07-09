import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, useState } from 'react';

import {
  Button,
  Checkbox,
  Fieldset,
  ValidationMessage,
} from '../../../components';
import type {
  GetCheckboxProps,
  UseCheckboxGroupProps,
} from './use-checkbox-group';
import { useCheckboxGroup } from './use-checkbox-group';

const CheckboxGroup = (args: UseCheckboxGroupProps) => {
  const { getCheckboxProps, validationMessageProps } = useCheckboxGroup(args);
  return (
    <Fieldset>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Checkbox
        aria-label='All'
        {...getCheckboxProps({ allowIndeterminate: true, value: 'all' })}
      />
      <Checkbox
        label='Test 1'
        {...getCheckboxProps({
          value: 'test1',
          'aria-describedby': 'custom aria-describedby',
        })}
      />
      <Checkbox label='Test 2' {...getCheckboxProps('test2')} />
      <ValidationMessage {...validationMessageProps} />
    </Fieldset>
  );
};

const ConditionalCheckboxGroup = (args: UseCheckboxGroupProps) => {
  const { getCheckboxProps } = useCheckboxGroup({
    value: ['epost'],
    ...args,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>
      {open ? (
        <Fieldset>
          <Checkbox
            aria-label='All'
            {...getCheckboxProps({ allowIndeterminate: true, value: 'all' })}
          />
          <Checkbox
            label='Test 1'
            {...getCheckboxProps({
              value: 'test1',
              'aria-describedby': 'custom aria-describedby',
            })}
          />
          <Checkbox label='Test 2' {...getCheckboxProps('test2')} />
        </Fieldset>
      ) : null}
    </>
  );
};

const CheckboxGroupCheckbox = (args: GetCheckboxProps) => {
  const { getCheckboxProps, validationMessageProps } = useCheckboxGroup();
  return (
    <Fieldset>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Checkbox label='Test 1' {...getCheckboxProps(args)} />
      <ValidationMessage {...validationMessageProps} />
    </Fieldset>
  );
};

describe('CheckboxGroup', () => {
  test('has generated name for Checkbox children', () => {
    render(<CheckboxGroup />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toHaveAttribute('name');
    expect(checkbox2).toHaveAttribute('name');
  });
  test('has passed name to Checkbox children', (): void => {
    render(<CheckboxGroup name='my-name' />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toHaveAttribute('name', 'my-name');
    expect(checkbox2).toHaveAttribute('name', 'my-name');
  });
  test('has passed disabled to Checkbox children', (): void => {
    render(<CheckboxGroup disabled />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toHaveAttribute('disabled');
    expect(checkbox2).toHaveAttribute('disabled');
  });
  test('has passed required to Checkbox children', (): void => {
    render(<CheckboxGroup required />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toHaveAttribute('required');
    expect(checkbox2).toHaveAttribute('required');
  });
  test('has passed readOnly to Checkbox children', (): void => {
    render(<CheckboxGroup readOnly />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toHaveAttribute('readonly');
    expect(checkbox2).toHaveAttribute('readonly');
  });
  test('has passed aria-invalid to Checkbox children', (): void => {
    render(<CheckboxGroup error='message' />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    const error = screen.getByText('message');
    expect(checkbox1).toHaveAttribute('aria-invalid', 'true');
    expect(checkbox2).toHaveAttribute('aria-invalid', 'true');
    expect(error).toBeVisible();
  });
  test('has correct Checkbox checked when value is used', () => {
    render(<CheckboxGroup value={['test1']} />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    expect(checkbox1).toBeChecked();
    expect(checkbox2).not.toBeChecked();
  });
  test('has passed clicked Checkbox element to onChange', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();

    render(<CheckboxGroup onChange={onChangeMock} />);

    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');

    await act(async () => await user.click(checkbox1));
    expect(onChangeMock).toHaveBeenCalledWith(['test1'], []);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).not.toBeChecked();
  });
  test('correctly renders indeterminate', async () => {
    render(<CheckboxGroup />);

    const indeterminate = screen.getByLabelText('All');
    const checkbox1 = screen.getByLabelText('Test 1');
    const checkbox2 = screen.getByLabelText('Test 2');
    const user = userEvent.setup();

    // Shoud be neither checked or indeterminate initially
    expect(indeterminate).toHaveProperty('indeterminate', false);
    expect(indeterminate).toHaveProperty('checked', false);
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();

    // Should be indeterminate when first checkbox is checked
    await act(async () => await user.click(checkbox1));
    expect(indeterminate).toHaveProperty('indeterminate', true);
    expect(indeterminate).toHaveProperty('checked', false);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).not.toBeChecked();

    // Should be checked when both checkboxes are checked
    await act(async () => await user.click(checkbox2));
    expect(indeterminate).toHaveProperty('indeterminate', false);
    expect(indeterminate).toHaveProperty('checked', true);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();

    // Should uncheck all when clicking the main checkbox
    await act(async () => await user.click(indeterminate));
    expect(indeterminate).toHaveProperty('indeterminate', false);
    expect(indeterminate).toHaveProperty('checked', false);
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();

    // Should check all when clicking the main checkbox again
    await act(async () => await user.click(indeterminate));
    expect(indeterminate).toHaveProperty('indeterminate', false);
    expect(indeterminate).toHaveProperty('checked', true);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
  });
  test('correctly merges passed props with generated props', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();
    const customAriaDescribedBy = 'custom aria-describedby';

    render(
      <CheckboxGroupCheckbox
        value='test1'
        onChange={onChangeMock}
        aria-describedby={customAriaDescribedBy}
      />,
    );

    const checkbox1 = screen.getByLabelText('Test 1');
    await act(async () => await user.click(checkbox1));

    expect(onChangeMock).toHaveBeenCalledOnce();
    expect(checkbox1).toBeChecked();

    expect(checkbox1).toHaveAttribute(
      'aria-describedby',
      customAriaDescribedBy,
    );
  });

  test('can be conditionally rendered', async () => {
    render(<ConditionalCheckboxGroup />);

    /* click button to show checkboxes */
    const button = screen.getByRole('button', { name: 'Toggle' });
    await act(async () => await userEvent.click(button));
    expect(screen.getByLabelText('Test 1')).toBeVisible();
    expect(screen.getByLabelText('Test 2')).toBeVisible();
  });
});
