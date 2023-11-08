import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7200,
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['tailwind.config.ts'],
  },
  resolve: {},
});
