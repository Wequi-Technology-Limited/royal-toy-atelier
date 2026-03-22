import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< ours
      '@': decodeURIComponent(new URL('./src', import.meta.url).pathname),
=======
      '@': new URL('./src', import.meta.url).pathname,
>>>>>>> theirs
    },
  },
});
