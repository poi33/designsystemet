import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/create-single-story';
import { Label } from './label';
import * as LabelStories from './label.stories';

const meta: Meta = {
  title: 'Chromatic/Label',
  component: Label,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(LabelStories, meta);
