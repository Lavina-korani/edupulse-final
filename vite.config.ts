import { defineConfig } from 'vite'

// Provide a minimal module declaration to satisfy TypeScript when types are absent
import react from '@vitejs/plugin-react';
  

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173
  }
})
