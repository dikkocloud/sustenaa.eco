# Sustenaa website

A two-page static site: `index.html` (home) and `about.html`. No build step —
Tailwind is loaded via CDN, so it deploys as-is.

## Before you launch — things to edit

1. **Email address** — currently a placeholder: `hello@sustenaa.com`.
   Find-and-replace it across `index.html`, `about.html`, and the footer
   (appears 3 times per page: nav button, contact strip, footer).

2. **Logo** — `assets/mark.svg` is a placeholder mark I made (a leaf grown
   from circuit traces) since your uploaded logo file didn't come through
   with a visible graphic. Drop your real logo file into `assets/` and swap
   the `src="assets/mark.svg"` references in both HTML files (3 spots per page:
   header, hero, footer).

3. **Founder & CEO section** — in `index.html`, search for `[Founder Name]`
   and `[CEO Name]`. Replace the names, titles (if different), and the bio
   paragraphs. Each has an HTML comment showing exactly where to swap in a
   photo, e.g.:
   ```html
   <img src="assets/founder.jpg" alt="[Founder name]" class="w-full h-full object-cover">
   ```
   Add `founder.jpg` and `ceo.jpg` (portrait orientation works best, ~4:5 ratio)
   to `assets/`.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd sustenaa
vercel
```
Accept the defaults — it's a static site, no framework/build command needed.

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Other** (or "Static"). Leave build command empty,
   output directory as root (`.`).
4. Deploy.

## Structure
```
sustenaa/
├── index.html      Home page
├── about.html       About page
├── css/style.css     Design tokens + custom styles
├── js/main.js       Mobile nav + scroll reveal
└── assets/mark.svg    Logo placeholder
```
