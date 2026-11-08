import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mieyar-website.fly.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
