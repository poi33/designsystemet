import type { Loader } from '@storybook/react-vite';

export const fontsLoader: Loader = async () => ({
  fonts: await Promise.all([document.fonts.load('400 1em Inter')]),
});
