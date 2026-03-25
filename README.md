# Níos Fearr Website

A modern, premium brochure-style consultancy website built with Astro and Tailwind CSS. This is a complete rebuild of the existing Níos Fearr site, designed to be visually polished, fully responsive, and easy to maintain.

---

## Project Overview

**What it is:** A professional consultancy website for Níos Fearr, an Irish technology consultancy and advisory firm based in Cork.

**Who it's for:** Executive-level stakeholders and their teams seeking technology consultancy, programme management, and developmental mentoring services.

**Purpose of the rebuild:**
- Modernise the visual presentation to reflect a premium, confident brand
- Improve responsiveness across all device sizes
- Create a maintainable codebase that can evolve with the business
- Stay true to the existing brochure content and business positioning
- Provide a polished user experience without over-engineering

**Design direction:** The site is intentionally brochure-led — it presents the company's services, values, and expertise clearly and confidently, without unnecessary complexity. The goal is to feel premium and professional while remaining lightweight and fast.

---

## Objectives of the Rebuild

| Objective | Approach |
|-----------|----------|
| **Modernise look and feel** | Fresh typography, refined spacing, subtle animations, premium color palette |
| **Improve responsiveness** | Mobile-first refinements, tested across breakpoints, touch-friendly interactions |
| **Improve maintainability** | Component-based Astro architecture, centralised data files, clean CSS structure |
| **Keep it brochure-led** | Content-focused design, no unnecessary features or admin complexity |
| **Stay truthful to the business** | Content adapted from existing brochure and site, not invented |
| **Improve UX and consistency** | Unified visual language, predictable interactions, clear hierarchy |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro 6.x** | Static site generator with component islands |
| **Tailwind CSS 4.x** | Utility-first styling with custom theme |
| **Plus Jakarta Sans** | Display font for headings (modern, premium feel) |
| **Inter** | Body font for readability |
| **Swiper** | Testimonials carousel |
| **Cloudflare Pages** | Hosting and deployment |
| **GitHub** | Version control and CI/CD trigger |

---

## Project Structure

```
nios-fearr/
├── public/
│   └── images/
│       ├── brand/           # Logo and brand assets
│       ├── clients/         # Client logo images
│       └── favicon/         # Favicon files
├── src/
│   ├── components/          # Reusable Astro components
│   ├── data/                # Centralised content data
│   ├── layouts/             # Page layout wrapper
│   ├── pages/               # Route pages
│   └── styles/              # Global CSS and theme
├── astro.config.mjs         # Astro configuration
├── wrangler.jsonc           # Cloudflare Pages config
└── package.json
```

### Key Directories

**`src/components/`** — All major page sections as standalone components:
- `Navbar.astro` — Header with responsive mobile menu
- `Hero.astro` — Full-width hero with animated background elements
- `TrustBar.astro` — Client logos marquee
- `ConsultancyServices.astro` — Interactive 5-pillar framework section
- `MentoringSection.astro` — Developmental mentoring with accordion
- `Process.astro` — "A Clear Approach" timeline
- `WhyUs.astro` — Trust-building section with key differentiators
- `Testimonials.astro` — Swiper-based testimonial carousel
- `Contact.astro` — Contact form with mailto integration
- `Footer.astro` — Site footer with links and company info

**`src/data/`** — Centralised content files:
- `services.ts` — Service categories and descriptions
- `testimonials.ts` — Client testimonials
- `process-steps.ts` — Process/approach steps
- `clients.ts` — Client logo references

**`src/pages/`** — Route pages:
- `index.astro` — Homepage (assembles all components)
- `careers.astro` — Careers/join us page
- `legal.astro` — Privacy policy and terms

---

## Section-by-Section Design Decisions

### Header / Navigation

**Purpose:** Primary navigation and brand presence.

**Design decisions:**
- Fixed header with subtle backdrop blur for modern feel
- Logo prominently positioned on the left
- Desktop: horizontal nav links with clear hover states
- Mobile: hamburger menu with full-screen overlay
- Smooth scroll to anchor sections
- "Contact Us" CTA button stands out with brand magenta

**Responsive:** Mobile menu is touch-friendly with generous tap targets. Menu closes on link click and on outside tap.

---

### Hero

**Purpose:** Immediate brand impact and value proposition.

**Design decisions:**
- Full-width with brand purple gradient background
- Large, confident headline using Plus Jakarta Sans (font-black weight)
- Animated geometric shapes in background for visual interest (subtle, not distracting)
- Clear CTA buttons with good contrast
- Tagline reinforces the company positioning

**Typography:** Headline is the largest on the page (responsive sizing from 5xl to 8xl) to establish immediate hierarchy.

**Responsive:** Text scales down gracefully; buttons stack on mobile.

---

### Client Logos / Trust Bar

**Purpose:** Social proof through client recognition.

**Design decisions:**
- Marquee-style infinite scroll (CSS animation, not JS)
- Logos displayed in grayscale for visual consistency
- Subtle hover effect to reveal original colors
- Duplicated content for seamless loop

**Rationale:** Keeps the section lightweight while building credibility. Logos are recognisable but don't compete visually with content.

---

### Technology Consultancy & Advisory Section

**Purpose:** Present the core service framework (5 pillars: Manage, Define, Ideate, Automate, Validate).

**Design decisions:**
- Interactive pillar selector with progress line (desktop)
- Auto-advancing every 5 seconds with pause on hover
- Click to select manually; auto-advance resumes after 10 seconds
- Each pillar shows detailed description and capabilities
- Visual pulse animation on active node

**Interaction stability:** Significant work went into preventing race conditions between auto-advance, manual selection, and hover pause. The final implementation uses proper state management to ensure smooth, predictable behaviour.

**Responsive:** Desktop shows horizontal connected pillars; mobile shows vertical timeline layout (no interactivity needed — all content visible).

---

### Developmental Mentoring Section

**Purpose:** Highlight the mentoring offering as distinct from consultancy.

**Design decisions:**
- Purple background to differentiate from other sections
- Accordion-style content reveal for mobile efficiency
- Inspirational quote styled subtly (italic, muted, smaller than heading)
- Clear visual hierarchy: section label → heading → quote → content

**Responsive:** Accordion works well on all sizes; expanded states are touch-friendly.

---

### A Clear Approach Section

**Purpose:** Show the structured process clients can expect.

**Design decisions:**
- Light grey background to visually separate from adjacent sections
- 5-step process with numbered nodes
- Clean, scannable layout
- Icons and brief descriptions for each step

**Rationale:** Clients want to understand "how do you work?" — this answers confidently without overcomplicating.

---

### Why Us / Trust-Building Section

**Purpose:** Reinforce credibility and differentiation.

**Design decisions:**
- Key trust points presented as cards or feature blocks
- Balanced layout (not overwhelming with text)
- Consistent visual treatment with icons

**Rationale:** Supplements the framework section with softer value propositions around experience, approach, and client focus.

---

### Testimonials Carousel

**Purpose:** Social proof through client voice.

**Design decisions:**
- Swiper-based carousel with autoplay
- Pagination dots styled to match brand (magenta active state)
- Draggable on touch devices
- Quotes attributed with name and company

**Responsive:** Works well on mobile; cards resize appropriately.

---

### Contact Form

**Purpose:** Primary conversion point for enquiries.

**Design decisions:**
- Custom-designed form (not a generic embed)
- Fields: Name, Email, Subject (optional), Message
- Client-side validation with real-time feedback
- Opens user's default email client with pre-filled content
- Simple mailto-based solution (no third-party services)

**Implementation:** Form validates input client-side, then generates a mailto: URL with the subject and body populated from form fields. User's email client opens with the message ready to send.

**Responsive:** Form fields stack on mobile; button adapts to full-width.

---

### Footer

**Purpose:** Secondary navigation and company information.

**Design decisions:**
- Dark background (brand purple) for visual closure
- Quick links to main sections
- Contact information and address
- Copyright notice

---

### Legal Page

**Purpose:** Privacy policy and terms (required for business compliance).

**Design decisions:**
- Clean, readable typography
- Proper section headings for scannability
- Consistent with site styling

---

### Careers Page

**Purpose:** Placeholder for future hiring / team information.

**Design decisions:**
- Simple, on-brand layout
- Can be expanded when active roles are available

---

### Mobile Menu

**Purpose:** Navigation on smaller screens.

**Design decisions:**
- Full-screen overlay with dark background
- Large, touch-friendly links
- Smooth open/close animation
- Closes on navigation or outside tap
- Prevents body scroll when open

---

## Key Design Decisions and Thought Process

### Why brochure-style rather than over-engineered?

The business doesn't need a CMS, user accounts, or complex features. A static site is faster, more secure, and easier to maintain. The content changes infrequently and can be updated directly in code.

### Why subtle animations?

Animations should enhance, not distract. I use:
- Fade-in-up on scroll for section reveals
- Smooth transitions on interactive elements
- Gentle hover states

Heavy animations would undermine the professional, executive-level audience.

### Why careful handling of the purple/pink palette?

The brand colours (purple #50439B and magenta #E91E7B) are strong. Overuse would feel garish. I use:
- Purple as the dominant brand colour (headers, backgrounds, text)
- Magenta as an accent (CTAs, active states, highlights)
- Neutral greys to balance and provide breathing room

### Why mobile refinements were important?

The original site had spacing and readability issues on mobile. I refined:
- Font sizes that scale appropriately
- Adequate padding and margins
- Touch-friendly tap targets (minimum 44px)
- Readable line lengths

### Why visual section differentiation?

Without clear section boundaries, the page would feel monotonous. I use:
- Alternating background colours (white, light grey, purple)
- Consistent section padding
- Clear heading hierarchy

### Why some ideas were rejected or simplified?

- **Complex CMS:** Unnecessary for this business's content workflow
- **Heavy JavaScript frameworks:** Astro's static output is sufficient
- **Elaborate animations:** Would distract from content
- **Multiple page types:** Brochure-style works with a single scrolling homepage

### Why mailto over third-party form services?

Originally used Web3Forms for form submission, but simplified to mailto:
- No third-party dependencies or API keys to manage
- No environment variables required
- User sees exactly what will be sent (transparency)
- Works reliably across all devices and browsers
- Simplest possible solution for a consultancy contact form

---

## Contact Form Implementation

### Why mailto?

- Simplest possible solution with no dependencies
- No API keys or third-party services to manage
- Works reliably on all devices
- User has full control over sending the email
- Transparent — user sees exactly what will be sent

### How it works

1. User fills out form (Name, Email, optional Subject, Message)
2. Client-side validation runs on submit
3. If valid, a mailto: URL is generated with the form data
4. User's default email client opens with the message pre-filled
5. User reviews and sends the email from their own email client

### Features

- **Validation:** Required fields, email format, character limits
- **Real-time feedback:** Field errors shown on blur
- **Clear UX:** Button says "Open Email Client" with explanatory text

### Destination

Emails are directed to: `ckeane@niosfearr.ie`

---

## Deployment Setup

### Pipeline

```
Local Development → Git Push → GitHub → Cloudflare Pages → Live Site
```

### How it works

1. Code is pushed to the `main` branch on GitHub
2. Cloudflare Pages detects the push and triggers a build
3. Astro builds the static site (`npm run build`)
4. Built files are deployed to Cloudflare's edge network
5. Site is live (typically within 1-2 minutes)

### Configuration

- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Node version:** Managed by Cloudflare (compatible with Astro 6.x)

### Environment variables

**No environment variables are required** for production. The contact form uses a simple mailto: solution with no external services.

---

## Responsiveness and Testing Notes

### Areas refined for mobile

- Hero text sizing and spacing
- Navigation menu behaviour and touch targets
- Form field layout and button sizing
- Section padding and margins
- Testimonial card sizing
- Client logo marquee speed

### Interaction issues fixed

- **Consultancy framework carousel:** Fixed race conditions between auto-advance, manual selection, and hover pause. Now transitions smoothly without erratic jumping.
- **Mobile menu:** Closes properly on link click and outside tap.

---

## Resources and Assets Used

### Content sources

- **Company brochure:** Primary source for messaging, service descriptions, and value propositions
- **Existing website:** Reference for structure and content baseline
- **Client conversations:** Refinements based on feedback

### Visual assets

- **Logo:** Provided brand assets in `/public/images/brand/`
- **Client logos:** In `/public/images/clients/` (sourced/provided)
- **Favicon:** Custom favicon set in `/public/images/favicon/`

### External resources

- **Undraw / custom SVGs:** Icon system throughout the site
- **Google Fonts → Fontsource:** Inter and Plus Jakarta Sans (self-hosted via npm)

### Important note

Content and visual direction were adapted to suit the business and audience — not copied blindly from templates. The design reflects the specific positioning of Níos Fearr as a premium consultancy.

---

## Known Limitations / Future Improvements

### Current limitations

- **No CMS:** Content updates require code changes (acceptable for this business)
- **No analytics:** Would benefit from basic tracking (e.g., Plausible, Cloudflare Analytics)
- **Limited accessibility testing:** Should complete formal accessibility audit
- **No automated tests:** Manual testing only currently

### Potential future enhancements

| Enhancement | Notes |
|-------------|-------|
| **Analytics integration** | Plausible or Cloudflare Analytics for privacy-friendly tracking |
| **CMS layer** | Could add Decap CMS or similar if content updates become frequent |
| **Performance optimisation** | Image optimisation, lazy loading audit |
| **Accessibility pass** | WCAG compliance review |
| **Form enhancements** | Field-specific error messages, confirmation email to sender |
| **Blog / insights section** | If thought leadership content is desired |
| **Case studies** | Dedicated pages for client success stories |

---

## Meeting / Handover Summary

### What has been completed

- Full homepage rebuild with all major sections
- Responsive design across desktop, tablet, and mobile
- Interactive consultancy framework with stable behaviour
- Working contact form with mailto integration
- Legal and Careers pages
- Mobile navigation with proper UX
- Deployment pipeline to Cloudflare Pages
- Typography system with premium feel (Plus Jakarta Sans + Inter)

### Key decisions made

- Astro + Tailwind for maintainability and performance
- Brochure-style (no CMS) for simplicity
- Mailto-based contact form (no third-party dependencies)
- Plus Jakarta Sans for premium typography
- Purple/magenta palette used carefully for balance
- Static hosting on Cloudflare Pages

### What remains before final sign-off

- Review all content for accuracy and tone
- Test contact form mailto flow on different devices
- Cross-browser / device testing
- Final visual polish pass if needed
- SEO / meta tag review
- Accessibility spot-check

### Feedback most useful now

- Does the overall tone and positioning feel right?
- Are there any content corrections needed?
- Any sections that need more or less emphasis?
- Is the mobile experience acceptable?
- Any additional pages or features needed for launch?

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Contact

For questions about this project, refer to internal documentation or reach out directly.

---

*Last updated: March 2026*
