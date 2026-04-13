import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://beringov.github.io',
  compressHTML: true,
  vite: {
    build: {
      target: 'es2022'
    }
  }
});