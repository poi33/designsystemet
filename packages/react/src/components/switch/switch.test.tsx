import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';

import { Switch } from './switch';

describe('Switch', () => {
  test('has correct value and label', () => {
    render(<Switch label='label' value='test' />);
    expect(screen.getByLabelText('label')).toBeDefined();
    expect(screen.getByDisplayValue('test')).toBeDefined();
  });

  test('has correct description', () => {
    render(<Switch label='test' value='test' description='description' />);
    expect(
      screen.getByRole('switch', { description: 'description' }),
    ).toBeDefined();
  });
  it('calls onChange and onClick when user clicks', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onClick = vi.fn();

    const value = 'test';

    render(
      <Switch
        label='label'
        value={value}
        onChange={onChange}
        onClick={onClick}
      />,
    );

    const switch_ = screen.getByRole<HTMLInputElement>('switch');

    expect(switch_.checked).toBeFalsy();

    await act(async () => await user.click(switch_));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(switch_.checked).toBeTruthy();
  });

  it('does not call onChange or onClick when user clicks and the Switch is disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onClick = vi.fn();

    render(
      <Switch
        label='disabled switch_'
        value='test'
        disabled
        onClick={onClick}
        onChange={onChange}
      />,
    );

    const switch_ = screen.getByRole('switch');
    await user.click(switch_);

    expect(switch_).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  // TODO: Re-enable when using <Input> component
  // it('does not call onChange when user clicks and the Switch is readOnly', async () => {
  //   const user = userEvent.setup();
  //   const onChange = vi.fn();

  //   render(
  //     <Switch value='test' readOnly onChange={onChange}>
  //       readonly switch_
  //     </Switch>,
  //   );

  //   const switch_ = screen.getByRole('switch');
  //   await act(async () => await user.click(switch_));

  //   console.log(switch_.outerHTML);

  //   expect(switch_).toHaveAttribute('readonly');
  //   expect(onChange).not.toHaveBeenCalled();
  // });

  //TODO is there a good way to test size?
});
