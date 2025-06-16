import type { A11yParameters } from '@storybook/addon-a11y';
import type { DocsParameters } from '@storybook/addon-docs';
import type { CSSProperties } from 'react';
import type {} from 'storybook/internal/types';
import type { ThemeVars } from 'storybook/theming';

export type MdxComponentOverrides = {
  [K in keyof React.JSX.IntrinsicElements]?: React.FC<
    Omit<React.JSX.IntrinsicElements[K], 'data-size' | 'data-color'>
  >;
} & Record<string, React.FC>;

type DocsParams = Required<DocsParameters>['docs'];
type SourceBlockParameters = NonNullable<DocsParams['source']>;
// Use Partial here to make `of` not required when setting parameters.docs.{canvas,source}
type DocsCanvasParams = Partial<DocsParams['canvas']>;
type DocsSourceParams = Partial<Omit<SourceBlockParameters, 'transform'>> & {
  /** Source code transformations */
  transform?: (
    code: string,
    storyContext: StoryContext,
  ) => string | Promise<string>; // original type doesn't allow Promise, although support for this was added in 9.0.0. See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#parametersdocssourceformat-removal
};

type ChromaticViewport = {
  width?: number | `${string}px`;
  height?: number | `${string}px`;
};

declare module 'storybook/internal/types' {
  type PseudoState =
    | 'hover'
    | 'active'
    | 'focusVisible'
    | 'focusWithin'
    | 'focus'
    | 'visited'
    | 'link'
    | 'target';

  type PseudoValue = boolean | string | string[];

  interface Globals {
    codePreview?: 'react' | 'html';
    colorScheme?: 'light' | 'dark';
  }

  interface Parameters {
    /**
     * Set custom styling for the story's root element. The default styling is:
     * ```css
     * { overflow: hidden; padding: 1rem; }
     * ```
     *
     * This is a custom parameter, implemented by `customStylesDecorator.ts`.
     * */
    customStyles?: CSSProperties & {
      /** Styles that only apply when viewing a docs page */
      docs?: CSSProperties;
      /** Styles that only apply when viewing an individual story */
      story?: CSSProperties;
    };

    /**
     * Set the story layout.
     *
     * This is a standard Storybook parameter,
     * [see the docs](https://storybook.js.org/docs/configure/story-layout)
     */
    layout?: 'centered' | 'fullscreen' | 'padded';

    /**
     * Configure `@storybook/addon-a11y`. See [the documentation](https://storybook.js.org/addons/@storybook/addon-a11y)
     */
    a11y?: A11yParameters['a11y'] & {
      /**
       * - `'todo'` - show a11y violations in the test UI only
       * - `'error'` - fail CI on a11y violations
       * - `'off'` - skip a11y checks entirely
       */
      test?: 'todo' | 'error' | 'off';
    };

    /**
     * Configure Chromatic. See [the documentation](https://www.chromatic.com/docs/config-with-story-params/).
     */
    chromatic?: {
      /** Disable visual snapshots at the component or story level */
      disableSnapshot?: boolean;
      /**
       * By default, CSS animations are paused at the end of their animation cycle
       * when tests are run in Chromatic. Setting this to false will pause animations
       * at the first frame instead.
       */
      pauseAnimationAtEnd?: false;
      /** Delay in ms before running tests in Chromatic */
      delay?: number;
      /**
       * Allows you to fine-tune the threshold for visual change between snapshots before
       * Chromatic flags them. Must be a number from 0 to 1. 0 is the most accurate, while
       * 1 is the least accurate.
       *
       * @default 0.063
       */
      diffThreshold?: number;
      /**
       * Modes allow separate snapshots and baselines for a collection
       * of parameters like viewport size, theme etc.
       */
      modes?: Record<
        string,
        {
          /**
           * Disable a mode that has been enabled at a higher level.
           * E.g. disable a global mode for a specific story.
           **/
          disable?: true;
          /**
           * The viewport to use.
           *
           * This parameter can either be an object with height and/or width (in px), or
           * the name of one of the viewports configured in `parameters.viewports` in `.storybook/preview.tsx`
           */
          viewport?: ChromaticViewport | string;
          // ...any other globals from Storybook, addons or decorators which we want
          // to use in modes can also be added here
        }
      >;
    };

    /**
     * Docs configuration
     *
     * @see https://storybook.js.org/docs/writing-docs
     */
    docs?: Omit<DocsParams, 'canvas' | 'source'> & {
      canvas?: DocsCanvasParams;
      source?: DocsSourceParams;
      components?: MdxComponentOverrides;
      theme?: ThemeVars;
    };

    /**
     * Toggle pseudo states. Supported states are listed in {@link PseudoState}.
     * Read [Storybook Pseudo States documentation](https://github.com/chromaui/storybook-addon-pseudo-states)
     * for more info.
     *
     * Each state can be toggled on/off:
     * ```ts
     * export const Hover = () => <Button>Label</Button>
     * Hover.parameters = { pseudo: { hover: true } }
     * ```
     *
     * You can also use CSS selectors to target the elements you want to enable the state for:
     * ```ts
     * export const Buttons = () => (
     *   <>
     *     <Button id="one">Hover</Button>
     *     <Button id="two">Hover focus</Button>
     *     <Button id="three">Hover focus active</Button>
     *   </>
     * )
     * Buttons.parameters = {
     *   pseudo: {
     *     hover: ["#one", "#two", "#three"],
     *     focus: ["#two", "#three"],
     *     active: "#three",
     *   },
     * }
     * ```
     */
    pseudo?: {
      /**
       * If you need to render elements outside Storybook's root element, you can set
       * rootSelector to override it. This is convenient for portals, dialogs, tooltips, etc.
       * @default "#storybook-root"
       */
      rootSelector?: string;
    } & {
      [K in PseudoState]?: PseudoValue;
    };
  }
}
