import type { Meta, StoryFn } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'Komponenter/Chip',
  component: Chip.Radio,
  parameters: {
    customStyles: { display: 'flex', gap: 'var(--ds-size-2)' },
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta;

export const Preview: StoryFn<typeof Chip.Radio> = (args) => (
  <>
    <Chip.Radio {...args} name='my-radio' value='nynorsk' defaultChecked>
      {args.children}
    </Chip.Radio>
    <Chip.Radio {...args} name='my-radio' value='bokmål'>
      Bokmål
    </Chip.Radio>
  </>
);

Preview.args = {
  children: 'Nynorsk',
};

export const Checkbox: StoryFn<typeof Chip.Checkbox> = (args) => (
  <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>
);

export const Removable: StoryFn<typeof Chip.Removable> = (args) => (
  <Chip.Removable {...args}>Norge</Chip.Removable>
);

Removable.args = {
  'aria-label': 'Slett Norge',
};

export const Button: StoryFn<typeof Chip.Button> = (args) => (
  <>
    <Chip.Button {...args}>Søk etter nynorsk</Chip.Button>
    <Chip.Button {...args}>Søk etter bokmål</Chip.Button>
    <Chip.Button {...args}>Søk etter engelsk</Chip.Button>
  </>
);
