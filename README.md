# Aaron Chris Chuku — Portfolio

A modern Astro rebuild of the Aaron Chris Chuku portfolio: a social-media & community-manager
site recreated from a bundled HTML export, with the same design language and layout, on a clean,
componentized, production-ready codebase. Content is sourced from the real CV — no fabricated
clients, quotes, or numbers.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks then builds to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/    One .astro component per page section, plus shared Icon/ImagePlaceholder
  data/           Typed content modules (services, work, results, process, skills, faq, site)
  layouts/        BaseLayout.astro — HTML shell, fonts, SEO meta tags
  scripts/        reveal.ts — scroll-reveal + active-nav-link IntersectionObserver logic
  styles/         tokens.css (design tokens) + global.css (reset + shared component classes)
  pages/          index.astro
```

## Editing content

All copy lives in `src/data/*.ts` — edit those files rather than the components to update
services, case studies, FAQ answers, skills, or site-wide info (name, email, stats).

## Adding real photos

The hero portrait and work-item covers currently render as placeholder plates (via
`ImagePlaceholder.astro`) since no source images were provided. Drop real images into
`public/images/` and pass a `src` prop, e.g.:

```astro
<ImagePlaceholder src="/images/portrait.jpg" alt="Aaron Chris Chuku" ratio="4 / 5" />
```

## Content notes — what changed from the CV, and why

- **No testimonials section.** The original design had a client-quotes section; there were no
  real quotes to put in it, and inventing ones attributed to real employers (Aura Displays, The
  Portable Monitor, Acco Shops) would misrepresent those relationships. The section was removed
  rather than filled with placeholder text.
- **Only the email is a live contact link.** The CV mentions the handle `@ogazilamm` without
  naming a platform (Instagram? TikTok? both?), so it's shown as plain text next to the location
  in the footer and contact section rather than guessed into a possibly-wrong profile URL.
  Update `site.handle` in `src/data/site.ts` to a full URL once you confirm the platform, and
  wire it into `Contact.astro`/`Footer.astro` as a link.
- **"Platform Management" → "Video Direction & Editing."** The original service card described
  managing owned community platforms (Discord/Slack-style); the CV's actual skill set is video
  production (Canva, CapCut, Higgsfield AI), so the card and its icon were swapped to match.
- **Skills are grouped by category** (Social & Community / Content & Creative / Growth &
  Analytics / Collaboration / AI & Productivity Stack) instead of one flat tag list, mirroring the
  CV's own structure — with a one-line Education note underneath, since that's real, verifiable
  information the original design had no slot for.
- **Case studies (Work section)** map 1:1 to the CV's four roles — Aura Displays, The Portable
  Monitor, Acco Shops, and freelance/independent clients — using only figures stated in the CV.

## Design notes

- **Fonts**: only Manrope and Playfair Display are loaded (via `@fontsource`), self-hosted as
  static files.
- **Color contrast**: the brand accent `#b68235` is ~3:1 against the background, which passes
  WCAG AA only for large text. A second token, `--color-accent-ink` (`#7d5411`, ~5.97:1), is used
  for small accent-colored text (kickers, active nav link, outlined tags) so body-scale text
  stays AA-compliant, while the brighter accent is kept for icons, borders, and large display
  numbers.
- **Motion**: the scroll-reveal animation and active-section nav highlighting are plain
  IntersectionObserver logic (see `src/scripts/reveal.ts`) with no framework — all content is
  visible and functional with JavaScript disabled, and both effects respect
  `prefers-reduced-motion`.
