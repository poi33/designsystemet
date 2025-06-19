import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/createSingleStory';
import { ValidationMessage } from '.';
import * as ValidationMessageStories from './ValidationMessage.stories';

const meta: Meta = {
  title: 'Chromatic/ValidationMessage',
  component: ValidationMessage,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(ValidationMessageStories, meta);
