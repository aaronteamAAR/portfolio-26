# Aaron Chris — Portfolio

A modern Astro rebuild of the Aaron Chris portfolio: a social-media & community-manager site
recreated from a bundled HTML export, with the same design language, layout, and copy, on a
clean, componentized, production-ready codebase.

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
  data/           Typed content modules (services, work, testimonials, process, skills, faq, site)
  layouts/        BaseLayout.astro — HTML shell, fonts, SEO meta tags
  scripts/        reveal.ts — scroll-reveal + active-nav-link IntersectionObserver logic
  styles/         tokens.css (design tokens) + global.css (reset + shared component classes)
  pages/          index.astro
```

## Editing content

All copy lives in `src/data/*.ts` — edit those files rather than the components to update
services, projects, testimonials, FAQ answers, skills, or site-wide info (email, social links).

`src/data/site.ts` also holds the placeholder social links (`#`) — point `social.instagram`,
`social.linkedin`, and `social.schedule` at real URLs when you have them.

## Adding real photos

The hero portrait, work-item covers, and testimonial avatars currently render as placeholder
plates (via `ImagePlaceholder.astro`) since no source images were provided. Drop real images into
`public/images/` and pass a `src` prop, e.g.:

```astro
<ImagePlaceholder src="/images/portrait.jpg" alt="Aaron Chris" ratio="4 / 5" />
```

## Design notes

- **Fonts**: only Manrope and Playfair Display are loaded (via `@fontsource`), self-hosted as
  static files — the original export also inlined Cormorant Garamond and Lora as base64, but
  neither was ever actually applied by the page's own CSS, so they were dropped as dead weight.
- **Color contrast**: the brand accent `#b68235` is ~3:1 against the background, which passes
  WCAG AA only for large text. A second token, `--color-accent-ink` (`#7d5411`, ~5.97:1), is used
  for small accent-colored text (kickers, active nav link, outlined tags) so body-scale text
  stays AA-compliant, while the brighter accent is kept for icons, borders, and large display
  numbers. This is the one deliberate deviation from the source's literal colors.
- **Motion**: the scroll-reveal animation and active-section nav highlighting are plain
  IntersectionObserver logic (see `src/scripts/reveal.ts`) with no framework — all content is
  visible and functional with JavaScript disabled, and both effects respect
  `prefers-reduced-motion`.
- **Unused source components dropped**: the original bundle's generic design system also shipped
  `.dialog`, `.table`, `.field`/`.input`, `.radio`, and `.seg` classes that were never referenced
  by the actual page markup — these were intentionally not ported.
