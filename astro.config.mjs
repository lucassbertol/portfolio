import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lucasbertol.dev.br',
  base: '/',
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  }
});