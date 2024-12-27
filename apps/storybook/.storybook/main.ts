import { dirname, join, resolve } from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';
import type { PropItem } from 'react-docgen-typescript';

const config: StorybookConfig = {
  typescript: {
    check: true,
    /* If in prod, use docgen-typescript, locally use docgen */
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: [resolve(__dirname, '../../../packages/react/**/**.tsx')], // <- This is the important line.
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop: PropItem) => {
        // Keep the default filter logic from storybook:
        // https://github.com/storybookjs/storybook/blob/40523765403480c4065373664553bb6cbdf9543d/code/core/src/core-server/presets/common-preset.ts#L169C5-L169C98
        const defaultLogicFromStorybook = prop.parent
          ? !/node_modules/.test(prop.parent.fileName)
          : true;
        return defaultLogicFromStorybook && prop.name !== 'popovertarget'; // Skip popovertarget @types/react-dom patch}
      },
    },
  },
  stories: [
    '../stories/*.mdx',
    '../stories/*.stories.ts?(x)',
    '../../../packages/*.mdx',
    '../../../packages/css/**/*.mdx',
    '../../../packages/theme/**/*.mdx',
    '../../../packages/react/**/*.mdx',
    '../../../packages/react/**/*.stories.ts?(x)',
  ],
  refs: {
    "web-components": { // We should do this for both react and web components in a release
      title: "web-components",
      url: "http://localhost:6007",
      expanded: false,
    }
  },
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-storysource'),
    '@storybook/addon-themes',
    'storybook-addon-pseudo-states',
  ],
  staticDirs: ['../assets'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, '../../../vite.config.ts'),
      },
    },
  },
};

export default config;

function getAbsolutePath(value: string): StorybookConfig['framework'] {
  return dirname(
    require.resolve(join(value, 'package.json')),
  ) as StorybookConfig['framework'];
}
