import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from '@navikt/aksel-icons';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../button';
import { Dropdown } from '.';

export default {
  title: 'Komponenter/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
    customStyles: {
      display: 'grid',
      alignItems: 'start',
      justifyItems: 'center',
      story: {
        boxSizing: 'border-box',
        width: '100cqw',
        height: '100cqh',
        maxWidth: '800px',
        maxHeight: '800px',
      },
    },
    chromatic: {
      disableSnapshot: false,
    },
  },
  play: async (ctx) => {
    // When not in Docs mode, automatically open the dropdown
    const button = within(ctx.canvasElement).getByRole('button');
    await userEvent.click(button);
    const dropdown = ctx.canvasElement.querySelector('[popover]');
    await expect(dropdown).toBeVisible();
  },
} satisfies Meta;

export const Preview: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger data-color={args['data-color']}>
        Dropdown
      </Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>First heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Heading>Second heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

Preview.args = {
  placement: 'bottom-end',
};

export const Icons: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a
                href='https://github.com/digdir/designsystemet'
                target='_blank'
                rel='noreferrer'
              >
                <LinkIcon aria-hidden />
                Github
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a
                href='https://designsystemet.no'
                target='_blank'
                rel='noreferrer'
              >
                <LinkIcon aria-hidden />
                Designsystemet.no
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const Controlled: StoryFn<typeof Dropdown> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger onClick={() => setOpen(!open)}>
        Dropdown
        {open ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
      </Dropdown.Trigger>
      <Dropdown open={open} onClose={() => setOpen(false)}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>
              Trykk på meg lukker
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>
              Eg lukker også
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const WithoutTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <>
      <Button popovertarget='dropdown'>Dropdown</Button>
      <Dropdown id='dropdown'>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  );
};
