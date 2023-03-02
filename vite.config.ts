import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json' assert { type: 'json' };

export default defineConfig((_configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'react-mosaic-autolayout',
      formats: ['es', 'umd'],
      fileName: (format) => `react-mosaic-autolayout.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys({
          ...packageJson.peerDependencies,
          'react/jsx-runtime': null,
          'react-dom/server': null
        }),
      ],
    },
  },
}));
