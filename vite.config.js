import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Para que no fallen las rutas en github pages
  build: {
    outDir: 'docs', // Guardar aqui para que funcione github pages
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        formulario: resolve(__dirname, 'formulario.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
