# PI Electrical - Demo Website

A premium, production-quality one-page marketing website for **PI Electrical**, a real electrical contractor in Bonnyrigg, Scotland.

Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, **TypeScript** (strict) and **Tailwind CSS v4** (CSS-first configuration).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

> Note: if port 3000 is already in use by another client demo, start on a specific port:
> `npm run dev -- -p 3310`

## Project structure

```
public/images/        Real supplied photography + logo
src/app/
  layout.tsx          Root layout, fonts, metadata, JSON-LD structured data
  page.tsx            One-page composition of all sections
  globals.css         Tailwind v4 @theme design tokens + base styles
  icon.png            Site favicon (derived from the logo)
src/components/       One component per section (see below)
src/lib/constants.ts  ALL site content + contact details (edit here)
```

### Components

- `Header` - sticky header, desktop nav, mobile menu, Get a quote CTA
- `Hero` - full-bleed project photo, headline, primary/secondary CTAs
- `TrustStrip` - "On time. Tidy. Done properly." value strip
- `Projects` - editorial gallery with lightbox (portfolio photography)
- `Services` - sophisticated numbered service list
- `FeaturedProject` - full-width feature project section
- `About` - team photo + business introduction
- `Vehicle` - local presence / company vehicle
- `Reviews` - featured review + smaller expandable review cards
- `ContactCTA` - closing call-to-action
- `Footer` - minimal footer with address, contact, nav
- `WhatsAppEnquiry` - pre-WhatsApp enquiry form (bottom-sheet / modal)
- `MobileContactBar` - sticky mobile Call / WhatsApp bar
- `Logo`, `Reveal`, `EnquiryProvider` - shared helpers
- `EnquiryProvider` - React context that opens the enquiry from anywhere

## Before going live - TODO: replace placeholders

Search the codebase for `TODO:` to find every value that needs confirming.
All are also gathered in one place: `src/lib/constants.ts`.

The following are **placeholder values and must not be considered real**:

- **Phone number** - `BUSINESS.phoneDisplay` / `phoneHref`
- **Email address** - `BUSINESS.emailDisplay` / `emailHref`
- **WhatsApp number** - `BUSINESS.whatsappNumber` (used to build `wa.me` links)
- **Site URL** - `metadataBase` in `src/app/layout.tsx` and the JSON-LD `url`/`logo`

The WhatsApp number must be the number *only* (no `+`, spaces, brackets or hyphens),
e.g. `+44 7123 456789` becomes `447123456789`.

Project-specific detail labels in `src/lib/constants.ts` are intentionally neutral
("Residential electrical project", "Lighting project", etc.) because the exact job
details were not supplied. Fill these in as real information becomes available.

## Design notes

- **Mobile-first**: the mobile experience (375px → 430px) is the priority; the desktop
  layout is a deliberate recomposition, not a shrunken version.
- **Quiet-premium positioning**: restrained warm-white / ivory / stone / charcoal
  palette, editorial spacing and typography, real project photography - no electrician
  stock imagery, no glowing gradients, no template look.
- **Contact-first**: Call and WhatsApp appear in the header, hero, project and closing
  sections, plus a sticky mobile bar. WhatsApp flows open a short pre-enquiry form that
  pre-fills a `wa.me` message so the customer doesn't retype anything.

## Accessibility & performance

- Semantic HTML, single `H1`, logical `H2`/`H3` hierarchy, visible focus states,
  labelled forms with inline errors, descriptive alt text, large touch targets.
- `next/image` for AVIF/WebP, responsive sizes, lazy loading below the fold and
  priority only on the hero. No animation libraries - lightweight CSS reveals.
