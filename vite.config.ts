import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  plugins: [react()],
  cacheDir: './node_modules/.vite/.',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
    },
  },
});
