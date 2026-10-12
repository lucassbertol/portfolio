import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lucasbertol.dev.br',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
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