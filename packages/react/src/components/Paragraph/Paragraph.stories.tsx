import type { Meta, StoryObj } from '@storybook/react-vite';

import { Paragraph } from '.';

const meta: Meta<typeof Paragraph> = {
  title: 'Komponenter/Typography/Paragraph',
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Preview: Story = {
  args: {
    children:
      'Personvernerklæringen gir informasjon om hvilke personopplysninger vi behandler, hvordan disse blir behandlet og hvilke rettigheter du har.',
    variant: 'default',
  },
};
