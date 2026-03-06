import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://elsedes.com',
  output: 'static',
  integrations: [sitemap(), mdx(), react()],
  build: {
    inlineStylesheets: 'auto',

  },
});