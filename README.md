# Mieyar Accounting Consultancy – Website

Bilingual (English / Arabic, RTL) marketing site for Mieyar Accounting Consultancy, built with [Astro](https://astro.build) as a static site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
```

## Editing content

- Contact details (phone, WhatsApp, email, address, Instagram, map): `src/site.ts`. Empty values show "Coming soon".
- Packages and prices: `src/i18n/packages.ts`.
- Navigation / shared labels: `src/i18n/ui.ts`.
- Page text: each page in `src/pages/[lang]/` holds its English and Arabic copy.

Pages are generated for both `/en/...` and `/ar/...`.

## Deploy (Fly.io)

```bash
flyctl deploy --remote-only
```
