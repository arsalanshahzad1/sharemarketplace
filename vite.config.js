import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Absolute imports: `@/components/...` instead of `../../../components/...`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
