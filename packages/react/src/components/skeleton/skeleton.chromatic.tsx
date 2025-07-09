import type { Meta } from '@storybook/react-vite';
import { createSingleStory } from '../../../stories/utils/create-single-story';
import { Skeleton } from '.';
import * as SkeletonStories from './skeleton.stories';

const meta: Meta = {
  title: 'Chromatic/Skeleton',
  component: Skeleton,
  tags: ['chromatic'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

export const Snapshots = createSingleStory(SkeletonStories, meta);
