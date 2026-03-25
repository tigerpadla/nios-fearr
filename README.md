<p align="center">
  <img src="./public/images/brand/nios-fearr-logo-purple.png" alt="Níos Fearr Logo" width="320">
</p>

<h1 align="center">Níos Fearr Consulting Website</h1>

<p align="center">
  Production-ready source code for the official Níos Fearr Consulting web presence
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-6.x-BC52EE?logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?logo=cloudflarepages&logoColor=white" alt="Cloudflare Pages">
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-4CAF50" alt="Responsive">
  <img src="https://img.shields.io/badge/Static_Site-Fast_&_Secure-2C3E50" alt="Static Site">
</p>

---

## Overview

This repository contains the complete source code for **Níos Fearr** — a modern, premium brochure-style consultancy website. This is a complete rebuild of the existing Níos Fearr site, designed to be visually polished, fully responsive, and easy to maintain.

Built as a performance-optimized static site with Astro and Tailwind CSS, the platform delivers services, expertise, and values to executive-level stakeholders with precision and polish.

**Purpose of the rebuild:**
- Modernise the visual presentation to reflect a premium, confident brand
- Improve responsiveness across all device sizes
- Create a maintainable codebase that can evolve with the business
- Stay true to the existing brochure content and business positioning
- Provide a polished user experience without over-engineering

**Live site:** [niosfearr.ie](https://niosfearr.ie)

---

## Site Sections

| Section | Description |
|---------|-------------|
| **Homepage** | Hero, trust bar, and core value proposition |
| **Technology Consultancy & Advisory** | Interactive 5-pillar service framework |
| **Developmental Mentoring** | Mentoring offering and approach |
| **A Clear Approach** | Process timeline |
| **Why Us** | Trust signals and differentiators |
| **Testimonials** | Client testimonials carousel |
| **Contact** | Enquiry form and contact details |
| **Careers** | Careers information (separate page) |
| **Legal** | Privacy policy and terms (separate page) |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 6.x | Static site generator |
| Tailwind CSS | 4.x | Utility-first styling |
| Plus Jakarta Sans | — | Display typography |
| Inter | — | Body typography |
| Swiper | 12.x | Testimonials carousel |

**Hosting:** Cloudflare Pages with GitHub CI/CD

---

## Features

- **Interactive service framework** — Auto-advancing 5-pillar consultancy visualization with state management
- **Fully responsive** — Individually optimized layouts for desktop, tablet, and mobile
- **Client trust bar** — Infinite-scroll logo marquee with hover effects
- **Touch-enabled carousel** — Swiper-powered testimonials with gesture support
- **Zero-dependency contact** — Client-side mailto form with comprehensive validation
- **Performance-focused** — Hardware-accelerated animations and transitions

---

## Implementation Notes

Architectural decisions and engineering approach:

- **Component isolation** — Each section is a self-contained Astro component with encapsulated markup, styles, and behavior. Changes remain localized without unintended side effects.

- **Content decoupling** — All editable content resides in typed TypeScript modules under `src/data/`. Content updates require no component modifications, enabling non-technical maintenance.

- **Responsive precision** — Layouts were individually calibrated across breakpoints with deliberate attention to spacing, typography hierarchy, and interaction affordances.

- **Static optimization** — Astro generates pure HTML/CSS/JS with zero client-side framework overhead. Combined with Cloudflare's edge network, this achieves consistently fast load times.

- **Pragmatic contact solution** — Following stakeholder evaluation, a mailto-based form was chosen over third-party services. This eliminates external dependencies, API management, and ongoing service costs.

- **Maintenance-first structure** — Clear file organization, explicit naming conventions, and accurate documentation ensure seamless handover and future development.

---

## Project Structure

```
nios-fearr/
├── public/
│   └── images/
│       ├── brand/              # Logo and brand assets
│       ├── clients/            # Client logos for trust bar
│       └── favicon/            # Favicon set
│
├── src/
│   ├── components/             # Page section components
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro
│   │   ├── ConsultancyServices.astro
│   │   ├── MentoringSection.astro
│   │   ├── Process.astro
│   │   ├── WhyUs.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   │
│   ├── data/                   # Centralised content (TypeScript)
│   │   ├── clients.ts
│   │   ├── testimonials.ts
│   │   ├── services.ts
│   │   └── process-steps.ts
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── careers.astro
│   │   └── legal.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── tsconfig.json
├── wrangler.jsonc
└── package.json
```

---

## Requirements

- **Node.js** 18 or higher
- **npm** (included with Node.js)

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:4321`

---

## Deployment

The site deploys to **Cloudflare Pages** via two methods:

### Git Integration (Recommended)

Automatic deployment from GitHub:

1. Push to `main` branch
2. Cloudflare triggers build
3. Site live within 1–2 minutes

### Direct Upload (Alternative)

Manual deployment from local build:

1. Run `npm run build` locally
2. Upload `dist/` folder via Cloudflare Pages dashboard
3. Site updates immediately

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | None required |

---

## Contact Form

The contact form implements a **mailto-based approach**:

1. User completes the form (name, email, subject, message)
2. Client-side validation executes
3. On submit, the user's email client opens with pre-populated fields
4. User sends from their own email application

This approach eliminates third-party services, API keys, and backend infrastructure. A direct email link provides an alternative path.

**Note:** This flow requires the visitor to have a default email client configured. Most users do, but those relying exclusively on webmail without mailto handlers can use the direct email link.

---

## Design

| Aspect | Approach |
|--------|----------|
| **Palette** | Brand purple (#50439B) primary, magenta (#E91E7B) accent |
| **Typography** | Plus Jakarta Sans headings, Inter body |
| **Layout** | Mobile-first, responsive breakpoints |
| **Animation** | Subtle fade-ins, smooth transitions |

---

## Common Updates

Quick reference for routine maintenance tasks:

| Update | Location |
|--------|----------|
| Contact email | `src/components/Contact.astro` — update `CONTACT_EMAIL` constant |
| Client logos | Add image to `public/images/clients/`, update `src/data/clients.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Services content | `src/data/services.ts` |
| Process steps | `src/data/process-steps.ts` |
| Legal page content | `src/pages/legal.astro` |
| Careers page content | `src/pages/careers.astro` |
| Brand assets | `public/images/brand/` |
| Favicon | `public/images/favicon/` |

---

## Future Enhancements

Potential improvements for consideration:

- Analytics integration (Plausible or Cloudflare Analytics)
- Blog or case studies module
- Advanced image optimization and lazy loading

---

## License

Private project for Níos Fearr Consulting. All rights reserved.
