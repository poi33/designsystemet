import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';

import type { ButtonProps } from './button';
import { Button } from './button';

const user = userEvent.setup();

describe('Button', () => {
  it('should render as aria-disabled when aria-disabled is true regardless of variant', () => {
    render({
      'aria-disabled': true,
    });

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-disabled');
  });

  it('should render as disabled when disabled is true regardless of variant', () => {
    render({
      disabled: true,
    });

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should not call onClick when disabled', async () => {
    const fn = vi.fn();
    render({
      disabled: true,
      onClick: fn,
    });

    const button = screen.getByRole('button');
    await act(async () => await user.click(button));
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render children as button text', () => {
    render({ children: 'different button text' });
    expect(
      screen.getByRole('button', { name: 'different button text' }),
    ).toBeInTheDocument();
  });

  it('should handle onClick event', async () => {
    const fn = vi.fn();
    render({ onClick: fn });
    await act(async () => await user.click(screen.getByRole('button')));
    expect(fn).toHaveBeenCalled();
  });

  it('should not have type attribute when asChild is true', () => {
    render({ asChild: true, children: <a href='#'>Link</a> });
    expect(screen.getByRole('link')).not.toHaveAttribute('type');
    expect(screen.queryByRole('button')).toBeNull();
  });
});

const render = (props?: ButtonProps) => renderRtl(<Button {...props} />);
