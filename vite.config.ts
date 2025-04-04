import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const dirname = import.meta.dirname || __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@doc-components': path.resolve(
        dirname,
        './apps/storybook/docs-components',
      ),
      '@assets': path.resolve(dirname, './apps/storybook/assets'),
    },
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  // Temporary "fix" https://github.com/storybookjs/storybook/issues/28542
  optimizeDeps: {
    exclude: ['./node_modules/.cache/storybook'],
  },
});
