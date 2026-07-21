import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aaronchris.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
