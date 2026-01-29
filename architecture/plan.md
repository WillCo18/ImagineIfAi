# Implementation Plan: imagine-if.ai Landing Page

**Focus keyword**: anti-gravity

---

## Segments Overview

### Segment A: Project Setup & Configuration
**Goal**: Initialize Next.js project, configure design system, copy assets, set up environment variables  
**Tasks**: A1-A4 (4 tasks)  
**Acceptance**: Dev server runs, design tokens defined, assets copied, env vars documented

### Segment B: Layout & Navigation
**Goal**: Build root layout, navigation, and footer components  
**Tasks**: B1-B3 (3 tasks)  
**Acceptance**: SEO metadata configured, nav functional with smooth scroll, footer complete

### Segment C: Homepage Sections
**Goal**: Build all homepage sections (Hero, Services, Trust, Qualification, CTA)  
**Tasks**: C1-C6 (6 tasks)  
**Acceptance**: All sections render correctly, hero illustration created, content matches brief

### Segment D: Contact Form
**Goal**: Build contact form with validation and TypeScript types  
**Tasks**: D1-D3 (3 tasks)  
**Acceptance**: Form validates input, shows errors, handles submission, honeypot implemented

### Segment E: Email Integration
**Goal**: Integrate Resend for autoresponse and admin notifications  
**Tasks**: E1-E3 (3 tasks)  
**Acceptance**: Form submissions send both emails, templates render correctly, deliverability verified

### Segment F: Testing & Verification
**Goal**: Write Playwright tests, run build verification, Lighthouse audit, cross-browser testing  
**Tasks**: F1-F5 (5 tasks)  
**Acceptance**: All tests pass, Lighthouse scores meet targets, emails delivered successfully

### Segment G: Deployment
**Goal**: Deploy to Vercel production with custom domain  
**Tasks**: G1-G3 (3 tasks)  
**Acceptance**: Site live at imagine-if.ai, HTTPS enforced, form works in production

---

## Risks & Mitigations

### Risk 1: Email Deliverability
**Mitigation**: Use Resend (high deliverability), configure SPF/DKIM, test with multiple providers

### Risk 2: Form Spam
**Mitigation**: Honeypot field, rate limiting, consider Turnstile if spam persists

### Risk 3: Mobile Performance
**Mitigation**: Next.js Image optimization, WebP format, lazy loading

### Risk 4: Illustration Creation
**Mitigation**: Use generate_image tool, iterate based on feedback, fallback to banner reference

---

**Total tasks**: 28  
**Estimated completion**: 2-3 days (with testing and iteration)
