import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mieyaraccounting.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
