import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/createSingleStory';
import { Input } from '.';
import * as InputStories from './Input.stories';

const meta: Meta = {
  title: 'Chromatic/Input',
  component: Input,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(InputStories, meta);
