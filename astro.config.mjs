import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aaronchris.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
