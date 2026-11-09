// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production URL — used for canonical tags, OG URLs and the sitemap.
export const SITE_URL = 'https://tradehelpdesk.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  // Emit /contact.html etc. so Vercel's cleanUrls serves /contact and old .html links keep working.
  build: { format: 'file' },
  integrations: [sitemap()],
});
