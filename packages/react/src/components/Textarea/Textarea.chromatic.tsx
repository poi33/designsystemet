import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/createSingleStory';
import { Textarea } from '.';
import * as TextareaStories from './Textarea.stories';

const meta: Meta = {
  title: 'Chromatic/Textarea',
  component: Textarea,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(TextareaStories, meta);
