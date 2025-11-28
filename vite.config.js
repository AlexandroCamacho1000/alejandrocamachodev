import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://AlexandroCamacho1000.github.io/alejandrocamachodev', // Debe coincidir con el nombre del repo
});
