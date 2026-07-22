import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: update to the real production domain before deploying — canonical
  // URLs, the sitemap, robots.txt, and Open Graph tags all derive from this.
  site: 'https://aaronchris.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
