import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thebeerbrother.cl',
  integrations: [sitemap()],
  legacy: {
    collections: true,
  },
});
