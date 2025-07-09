import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FormEvent } from 'react';

import { ToggleGroup } from '.';

const user = userEvent.setup();

describe('ToggleGroup', () => {
  test('has generated name for ToggleGroupItem children', () => {
    render(
      <ToggleGroup>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item = screen.getByRole('radio');
    expect(item).toHaveAttribute('name');
  });

  test('has passed name to ToggleGroupItem children', (): void => {
    render(
      <ToggleGroup name='my name'>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item = screen.getByRole<HTMLButtonElement>('radio');
    expect(item.name).toEqual('my name');
  });

  test('can navigate with tab and arrow keys', async () => {
    render(
      <ToggleGroup>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
        <ToggleGroup.Item value='test2'>test2</ToggleGroup.Item>
        <ToggleGroup.Item value='test3'>test3</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item1 = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test',
    });
    const item2 = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test2',
    });
    const item3 = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test3',
    });
    await user.tab();
    expect(item1).toHaveFocus();
    await user.type(item1, '{arrowright}');
    expect(item2).toHaveFocus();
    await user.type(item2, '{arrowright}');
    expect(item3).toHaveFocus();
    await user.type(item3, '{arrowleft}');
    expect(item2).toHaveFocus();
  });
  test('has correct ToggleGroupItem defaultChecked & checked when defaultValue is used', () => {
    render(
      <ToggleGroup defaultValue='test2'>
        <ToggleGroup.Item value='test1'>test1</ToggleGroup.Item>
        <ToggleGroup.Item value='test2'>test2</ToggleGroup.Item>
        <ToggleGroup.Item value='test3'>test3</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test2',
    });
    expect(item).toHaveAttribute('aria-checked', 'true');
  });
  test('has passed clicked ToggleGroupItem value to onChange', async () => {
    const onChangeMock = vi.fn();

    render(
      <ToggleGroup onChange={onChangeMock}>
        <ToggleGroup.Item value='test1'>test1</ToggleGroup.Item>
        <ToggleGroup.Item value='test2value'>test2</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test2',
    });

    expect(item).toHaveAttribute('aria-checked', 'false');

    await user.click(item);

    expect(onChangeMock).toHaveBeenCalledWith('test2value');
    expect(item).toHaveAttribute('aria-checked', 'true');
  });
  test('has correct aria-checked on correct ToggleGroupItem when clicked', async () => {
    const onChangeMock = vi.fn();

    render(
      <ToggleGroup defaultValue='test1' onChange={onChangeMock}>
        <ToggleGroup.Item value='test1'>test1</ToggleGroup.Item>
        <ToggleGroup.Item value='test2'>test2</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const item1 = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test1',
    });
    const item2 = screen.getByRole<HTMLButtonElement>('radio', {
      name: 'test2',
    });

    expect(item1).toHaveAttribute('aria-checked', 'true');
    expect(item2).toHaveAttribute('aria-checked', 'false');

    await user.click(item2);

    expect(onChangeMock).toHaveBeenCalledWith('test2');
    expect(item2).toHaveAttribute('aria-checked', 'true');
  });

  test('if we pass a name, we should have a hidden input with that name', () => {
    const name = 'my-name';
    const { container } = render(
      <ToggleGroup name={name}>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const input = container.querySelector(`input[name="${name}"]`);
    expect(input).toBeDefined();
  });

  test('if we pass a name, we should have a hidden input with that name and value', () => {
    const name = 'my-name';
    const { container } = render(
      <ToggleGroup name='my-name' defaultValue='test'>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const input = container.querySelector(`input[name="${name}"]`);
    expect(input).toHaveAttribute('value', 'test');
  });

  test('should send the value to a form when the form is submitted', async () => {
    const formSubmitPromise = new Promise<FormData>((resolve) => {
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        resolve(new FormData(event.currentTarget));
      };

      render(
        <form onSubmit={handleSubmit}>
          <ToggleGroup name='test' defaultValue='test2'>
            <ToggleGroup.Item value='test1'>test1</ToggleGroup.Item>
            <ToggleGroup.Item value='test2'>test2</ToggleGroup.Item>
          </ToggleGroup>
          <button type='submit'>Submit</button>
        </form>,
      );
    });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);

    const formData = await formSubmitPromise;
    expect(formData.get('test')).toBe('test2');
  });

  test('if we dont pass a name, we should not have a hidden input', () => {
    render(
      <ToggleGroup>
        <ToggleGroup.Item value='test'>test</ToggleGroup.Item>
      </ToggleGroup>,
    );

    const input = document.querySelector('input[type="hidden"]');
    expect(input).toBeNull();
  });
});
