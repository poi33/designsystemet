import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { Dropdown } from '.';
import type { DropdownTriggerContextProps } from './DropdownTriggerContext';

const Comp = (args: Partial<DropdownTriggerContextProps>) => {
  return (
    <Dropdown.TriggerContext {...args}>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown>
        <Dropdown.Heading>Links</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
          {args.children}
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

const render = async (props: Partial<DropdownTriggerContextProps> = {}) => {
  /* Flush microtasks */
  await act(async () => {});
  const user = userEvent.setup();

  return {
    user,
    ...renderRtl(<Comp {...props} />),
  };
};

describe('Dropdown', () => {
  /* We are testing closing and opening in Popover.tests.tsx */
  it('should render children', async () => {
    const { user } = await render({
      children: (
        <Dropdown.Item>
          <Dropdown.Button>Item 2</Dropdown.Button>
        </Dropdown.Item>
      ),
    });
    const dropdownTrigger = screen.getByRole('button');

    await act(async () => await user.click(dropdownTrigger));

    expect(screen.queryByText('Item 2')).toBeInTheDocument();
  });

  it('should be able to render `Dropdown.Button` as a anchor element using asChild', async () => {
    const { user } = await render({
      children: (
        <Dropdown.Item>
          <Dropdown.Button asChild>
            <a href='/'>Anchor</a>
          </Dropdown.Button>
        </Dropdown.Item>
      ),
    });
    const dropdownTrigger = screen.getByRole('button');

    await act(async () => await user.click(dropdownTrigger));

    expect(screen.getByText('Anchor')).toHaveAttribute('href', '/');
    expect(screen.getByText('Anchor').tagName).toBe('A');
  });
});
