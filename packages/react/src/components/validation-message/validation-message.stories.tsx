import type { Meta, StoryObj } from '@storybook/react-vite';

import { ValidationMessage } from '.';

const meta: Meta<typeof ValidationMessage> = {
  title: 'Komponenter/Typography/ValidationMessage',
  component: ValidationMessage,
};

export default meta;

type Story = StoryObj<typeof ValidationMessage>;

export const Preview: Story = {
  args: {
    children: 'Dette er en valideringsmelding.',
  },
};
