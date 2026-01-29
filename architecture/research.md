# Research Document: imagine-if.ai Landing Page

**Focus keyword**: anti-gravity

---

## 1. Problem Statement

Build a modern, conversion-focused landing page for imagine-if.ai that:
- Communicates practical AI automation for hospitality and local SMEs
- Matches the existing LinkedIn banner's restrained, human-centered visual language
- Positions data normalization, CRM infrastructure, and workflow automation as the core offering
- Qualifies leads (multi-site hospitality groups, 8-figure turnover) while disqualifying poor fits
- Deploys to Vercel with clean Next.js architecture

## 2. Assumptions

### Explicit Assumptions
- **Target audience**: Decision-makers at multi-site hospitality groups (hotels, leisure operators, attractions) with meaningful admin load
- **Brand positioning**: Premium but approachable, human-in-the-loop automation (not "AI will replace you")
- **Visual language**: White canvas, soft fades, minimal line illustrations, one accent color, no tech clichés
- **Color palette**: 
  - Primary: `#093B73` (deep blue)
  - Secondary: `#4E6188` (grey-blue)
  - Accent: `#E29C41` (orange, used sparingly)
  - Base: `#FFFFFF` (brilliant white)
- **No backend required for MVP**: Static content, potential form integration later
- **Domain ready**: `imagine-if.ai` already registered and connected to Vercel
- **Assets provided**: LinkedIn banner reference, logo file

### Technical Assumptions
- Modern browser support (last 2 versions)
- Mobile-first responsive design required
- Performance matters (hospitality decision-makers often review on mobile)
- SEO optimization needed (organic discovery channel)

## 3. Key Unknowns

### Answered
✅ Color palette confirmed  
✅ Logo provided  
✅ Domain status confirmed  
✅ Deployment target confirmed (Vercel)

### Remaining
- **Contact form requirements**: Should the MVP include a contact form, or just link to email/calendar booking?
- **Analytics**: Should we include Google Analytics, Plausible, or other tracking?
- **CTA destinations**: Where should "Book a quick call" and "Request a Foundation Review" link to? (Calendly, email, form?)

## 4. Proven Patterns

### From B2B Landing Page Research

**Key patterns from successful B2B consultancy pages:**

1. **Hero Structure**
   - Clear value proposition above the fold
   - Single primary CTA + optional secondary CTA
   - Visual that reinforces human element (not abstract tech)
   - Trust signal immediately visible (client logos, certifications, or subtle proof)

2. **Service Presentation**
   - 3-5 service cards maximum (avoid overwhelming)
   - Icon + headline + 2-3 line description format
   - Outcome-focused language ("Remove repetitive work" vs "Automation tools")

3. **Trust Without Testimonials**
   - Process transparency ("Here's how we work")
   - Audit trail / documentation emphasis
   - "Built on tools you already use" messaging
   - Compliance/security mentions (GDPR, data handling)

4. **Qualification Messaging**
   - Soft disqualification works better than hard ("We're not the right fit if...")
   - Positioned after value prop, before final CTA
   - Frames as mutual fit, not gatekeeping

5. **Visual Restraint**
   - White space as a premium signal
   - Limited color palette (2-3 colors max)
   - Typography hierarchy over decorative elements
   - Subtle animations on scroll/hover only

### From Hospitality-Specific Research

1. **Industry Credibility**
   - Speak the language (mention "multi-site," "head office vs site," "recurring workflows")
   - Reference familiar pain points (messy exports, duplicate contacts, manual follow-ups)

2. **Human-Centered Messaging**
   - Emphasize "human judgment stays in control"
   - Show people in visuals (not just dashboards)
   - "Removes admin, not jobs" framing

## 5. Stack Options

### Option 1: Next.js 15 + App Router (Recommended)
**Pros:**
- Modern React framework with excellent Vercel integration
- Built-in image optimization (critical for hero images)
- App Router provides better SEO and performance
- TypeScript support for maintainability
- Easy to add API routes later (for forms)

**Cons:**
- Slightly more complex than pure static HTML
- Requires Node.js knowledge for future updates

**Best for:** This project (scalable, professional, Vercel-optimized)

### Option 2: Next.js 14 + Pages Router
**Pros:**
- More familiar to developers used to traditional React
- Simpler mental model than App Router
- Still excellent Vercel integration

**Cons:**
- Pages Router is legacy (App Router is the future)
- Missing some performance optimizations

**Best for:** Teams uncomfortable with App Router

### Option 3: Pure HTML/CSS/JS (Static)
**Pros:**
- Simplest possible implementation
- No build step required
- Fastest possible load times

**Cons:**
- No component reusability
- Manual image optimization
- Harder to maintain as site grows
- No easy path to add forms/interactivity later

**Best for:** Ultra-simple one-pagers with no future expansion plans

## 6. Security and Privacy Considerations

### Baseline Requirements
- **No user data collection on MVP**: Static page, no cookies, no tracking (unless analytics added)
- **HTTPS enforced**: Vercel provides this by default
- **Content Security Policy**: Implement basic CSP headers
- **Form security (if added later)**:
  - CSRF protection
  - Rate limiting
  - Honeypot fields for spam prevention
  - Email validation only (no sensitive data collection)

### GDPR Compliance
- No cookies = no cookie banner needed for MVP
- If analytics added: privacy-friendly option (Plausible) or cookie consent
- Contact form: clear privacy statement, no data retention beyond necessary

## 7. Testing Approach

### Baseline Testing Strategy

**Visual Regression**
- Screenshot testing across breakpoints (mobile, tablet, desktop)
- Cross-browser testing (Chrome, Safari, Firefox)
- Verify color contrast ratios (WCAG AA minimum)

**Performance**
- Lighthouse score targets:
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- Core Web Vitals monitoring

**Functional**
- CTA links work correctly
- Navigation smooth scrolling (if implemented)
- Form submission (if implemented)
- Mobile menu functionality

**Content**
- Spelling/grammar review
- Brand voice consistency
- All links valid
- Images have alt text

## 8. Deployment Considerations

### Vercel Deployment (Recommended)

**Advantages:**
- Domain already connected
- Automatic HTTPS
- Global CDN
- Instant cache invalidation
- Preview deployments for testing
- Zero-config Next.js optimization

**Configuration Needed:**
- Environment variables (if form/analytics added)
- Custom domain DNS (already done)
- Redirect rules (www → non-www or vice versa)

**Build Settings:**
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next` (auto-detected)
- Node version: 18.x or 20.x

### Alternative: Netlify
**Only consider if:** Vercel has issues (unlikely given domain already connected)

## 9. Recommendation

### Recommended Stack: Next.js 15 + App Router + TypeScript

**Rationale:**
1. **Vercel-optimized**: Domain already connected, best possible integration
2. **Future-proof**: Easy to add contact forms, CMS, or dynamic content later
3. **Performance**: Built-in image optimization critical for hero visuals
4. **SEO**: App Router provides excellent SEO capabilities
5. **Maintainability**: TypeScript + component structure scales well

### Recommended Architecture

```
imagine-if.ai/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system tokens
│   └── components/
│       ├── Hero.tsx
│       ├── ServiceCards.tsx
│       ├── TrustSection.tsx
│       ├── QualificationSection.tsx
│       └── CTASection.tsx
├── public/
│   ├── logo.png
│   ├── banner-reference.png
│   └── illustrations/
├── package.json
└── next.config.js
```

### Design System Tokens (CSS Variables)

```css
:root {
  --color-primary: #093B73;      /* Deep blue */
  --color-secondary: #4E6188;    /* Grey-blue */
  --color-accent: #E29C41;       /* Orange */
  --color-white: #FFFFFF;
  --color-text: #1a1a1a;
  --color-text-muted: #666666;
  
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
}
```

### Next Steps (Conditional)

**Before proceeding to planning:**
1. Confirm CTA destinations (Calendly link? Email? Form?)
2. Confirm analytics preference (none, Google Analytics, Plausible?)
3. Approve stack recommendation (Next.js 15 + App Router)

**Once approved:**
- Run `planner` skill to create detailed implementation plan
- Define component structure and data contracts
- Create task list with green gates
- Build and verify with Playwright MCP

---

## Research Sources

- [Best B2B Landing Page Examples (involve.me)](https://www.involve.me/blog/best-b2b-landing-page-examples)
- Hospitality automation consultancy landing page patterns (search results)
- Minimal B2B landing page design patterns (Landing Picks, Dribbble)
- User-provided visual references (LinkedIn banner, logo)
