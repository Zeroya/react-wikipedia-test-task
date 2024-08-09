import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import {UserConfigExport} from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/react-wikipedia-test-task/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts'
  }
} as UserConfigExport);
