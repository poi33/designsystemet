import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/create-single-story';
import { Badge } from '.';
import * as BadgeStories from './badge.stories';

const meta: Meta = {
  title: 'Chromatic/Badge',
  component: Badge,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(BadgeStories, meta);
