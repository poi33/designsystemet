import {
  type Meta,
  type ReactRenderer,
  type StoryFn,
  type StoryObj,
  composeStories,
} from '@storybook/react-vite';
import { type PropsWithChildren, createElement } from 'react';
import type {
  Store_CSFExports,
  StoryAnnotationsOrFn,
} from 'storybook/internal/types';

type Story<T> = StoryObj<T> | StoryFn<T>;

// biome-ignore lint/suspicious/noExplicitAny: "any" type is used to align with Storybook's usage
type StoryExports = Record<string, Story<any>>;

export function createSingleStory<
  // biome-ignore lint/suspicious/noExplicitAny: "any" type is used to align with Storybook's usage
  S extends Store_CSFExports<ReactRenderer, any>,
  M extends Meta,
>(rawStories: S, meta: M): StoryAnnotationsOrFn<ReactRenderer> {
  const stories = composeStories(rawStories) as StoryExports;
  return {
    render: (_, context) => {
      return (
        <>
          {Object.entries(stories).map(([storyName, story]) => {
            const { story: storyStyles, ...style } =
              story.parameters?.customStyles ?? {};
            const StoryStyles = ({ children }: PropsWithChildren) => (
              <div
                style={{
                  ...style,
                  ...storyStyles,
                }}
                data-pseudo-state={
                  story.parameters?.pseudo?.hover
                    ? 'hover'
                    : story.parameters?.pseudo?.active
                      ? 'active'
                      : story.parameters?.pseudo?.focusVisible
                        ? 'focusVisible'
                        : undefined
                }
              >
                {children}
              </div>
            );
            const args = { ...story.args, key: storyName };
            if (typeof story === 'function') {
              return <StoryStyles>{story(args, context)}</StoryStyles>;
            }
            if (story.render) {
              return <StoryStyles>{story.render(args, context)}</StoryStyles>;
            }
            if (meta.component) {
              return (
                <StoryStyles>{createElement(meta.component, args)}</StoryStyles>
              );
            }
          })}
        </>
      );
    },
    parameters: {
      chromatic: {
        disableSnapshot: false,
      },
      customStyles: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-size-2)',
      },
      pseudo: {
        hover: ['[data-pseudo-state="hover"] > *'],
        active: ['[data-pseudo-state="active"] > *'],
        focusVisible: ['[data-pseudo-state="focusVisible"] > *'],
      },
    },
  };
}
