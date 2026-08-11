import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
  resolve: {
    alias: {
      // Absolute imports: `@/components/...` instead of `../../../components/...`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
