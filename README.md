# Trade Help Desk — Website

Marketing site for Trade Help Desk (property maintenance & field service management), built with [Astro](https://astro.build) and deployed on Vercel.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
npx astro check   # type-check
```

## Structure

```
src/
  pages/            index, contact, privacy, 404 (each page = one route)
  layouts/          BaseLayout — SEO meta, OG/Twitter, JSON-LD, theme bootstrap
  components/       Header, Footer, Logo, Icon (inline SVG set), CtaBand, PageHeader
  components/home/  Hero, Features, HowItWorks, Clarity (homepage sections)
  data/site.ts      Site name, emails, Formspree endpoint, nav links
  styles/global.css Design tokens (light/dark), buttons, shared primitives
  assets/logo.png   Transparent logo (optimised to WebP at build)
public/             favicons, og-image.png, robots.txt
```

- **Contact form** posts to Formspree (`data/site.ts → formspreeEndpoint`) via `fetch`, with inline validation, real success/error states and a honeypot field.
- **Dark mode** follows the system setting, can be toggled, and is remembered in `localStorage` (no flash on load).
- **SEO**: canonical URLs, OG image, JSON-LD (Organization + SoftwareApplication) and an auto-generated sitemap. Production URL is set in `astro.config.mjs` (`SITE_URL`).
- `build.format: 'file'` + Vercel `cleanUrls` keeps both `/contact` and old `/contact.html` links working.
