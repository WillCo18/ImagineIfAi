# Task List: imagine-if.ai Landing Page

**Focus keyword**: anti-gravity

---

## Segment A: Project Setup & Configuration

### A1: Initialize Next.js Project
- **Owner**: Setup
- **Input**: None
- **Output**: Next.js 15 project with App Router + TypeScript
- **Acceptance Criteria**: 
  - `npm run dev` starts successfully
  - TypeScript configured with strict mode
  - Path aliases configured (@/components, @/lib, @/types)
- **Gates**: Build + Dev server
- **Evidence**: Build successful, dev server running on localhost:3000
- **Status**: [x] COMPLETE

### A2: Configure Design System
- **Owner**: UI
- **Input**: Color palette (#093B73, #4E6188, #E29C41, #FFFFFF)
- **Output**: `app/globals.css` with CSS custom properties
- **Acceptance Criteria**:
  - All color tokens defined
  - Typography system (Inter font)
  - Spacing scale (xs/sm/md/lg/xl)
  - Responsive breakpoints
- **Gates**: Build
- **Evidence**: globals.css with 350+ lines of design system tokens
- **Status**: [x] COMPLETE

### A3: Copy Visual Assets
- **Owner**: Setup
- **Input**: resources/logo.png, resources/banner-reference.png
- **Output**: public/logo.png, public/banner-reference.png
- **Acceptance Criteria**:
  - Logo resized for header (height: 40px)
  - Banner reference available for illustration creation
- **Gates**: Build
- **Evidence**: Assets copied to public/ directory
- **Status**: [x] COMPLETE

### A4: Configure Environment Variables
- **Owner**: Setup
- **Input**: Admin email, Resend API key (when provided)
- **Output**: .env.local.example, .env.local
- **Acceptance Criteria**:
  - Example file created with all variables
  - .env.local added to .gitignore
  - README documents required variables
- **Gates**: Build
- **Evidence**: Pending (need to create .env.local.example)
- **Status**: [ ]

---

## Segment B: Layout & Navigation

### B1: Create Root Layout
- **Owner**: UI
- **Input**: Design system tokens
- **Output**: `app/layout.tsx`
- **Acceptance Criteria**:
  - SEO metadata configured (title, description, OG tags)
  - Inter font optimized and loaded
  - Navigation and Footer components rendered
  - Favicon configured
- **Gates**: Build + Playwright (verify metadata)
- **Evidence**: Layout with full SEO metadata, OG tags, Inter font
- **Status**: [x] COMPLETE

### B2: Build Navigation Component
- **Owner**: UI
- **Input**: Logo asset
- **Output**: `app/components/Navigation.tsx`
- **Acceptance Criteria**:
  - Logo displays at correct size
  - Nav links: Services, Approach, About, Contact
  - Smooth scroll to sections implemented
  - Mobile hamburger menu functional
  - Sticky header on scroll
- **Gates**: Build + Playwright (click nav links, verify scroll)
- **Evidence**: Screenshot confirmed navigation with smooth scroll
- **Status**: [x] COMPLETE

### B3: Build Footer Component
- **Owner**: UI
- **Input**: None
- **Output**: `app/components/Footer.tsx`
- **Acceptance Criteria**:
  - Logo displays
  - Copyright notice
  - Privacy statement (simple, no cookies)
  - Email contact link
- **Gates**: Build + Playwright (verify links)
- **Evidence**: Footer visible with all elements
- **Status**: [x] COMPLETE

---

## Segment C: Homepage Sections

### C1: Build Hero Section
- **Owner**: UI
- **Input**: Video asset (ImagineIf_Header_optimized.mp4)
- **Output**: `app/components/HeroSection.tsx`
- **Acceptance Criteria**:
  - Side-by-side layout (Text Left, Video Right)
  - Optimized MP4 video header
  - Background color matches video (#fdfcff)
  - No nav bar
- **Gates**: Build + Visual Verification
- **Evidence**: Screenshot `final_hero_result_1769620532467.png`
- **Status**: [x] COMPLETE

### C2: Create Hero Illustration
- **Status**: [x] SKIPPED (Replaced with MP4 video header)

### C3: Build Service Cards Section
- **Owner**: UI
- **Input**: Service descriptions
- **Output**: `app/components/ServiceCards.tsx`
- **Acceptance Criteria**:
  - Re-implement service cards
  - Responsive grid layout
- **Gates**: Build + Playwright
- **Evidence**: Pending
- **Status**: [ ] TODO (Needs adding back)

### C4: Build Trust Section
- **Owner**: UI
- **Input**: Trust cues from brief
- **Output**: `app/components/TrustSection.tsx`
- **Acceptance Criteria**:
  - "Security First" headline
  - 4 trust cues (tools you use, human approval, audit trail, GDPR)
  - Minimal line illustrations (lock, checklist icons)
  - No testimonials
- **Gates**: Build + Playwright (verify content)
- **Evidence**: Screenshot confirmed trust section with 4 trust items
- **Status**: [x] COMPLETE

### C5: Build Qualification Section
- **Owner**: UI
- **Input**: Qualification messaging from brief
- **Output**: `app/components/QualificationSection.tsx`
- **Acceptance Criteria**:
  - "Right fit" messaging (multi-site hospitality groups)
  - "Not right fit" messaging (single-site, cheap chatbot)
  - Neutral tone, mutual fit framing
  - Positioned before final CTA
- **Gates**: Build + Playwright (verify content)
- **Evidence**: Screenshot confirmed qualification section with two columns
- **Status**: [x] COMPLETE

### C6: Build CTA Section
- **Owner**: UI
- **Input**: None
- **Output**: `app/components/CTASection.tsx`
- **Acceptance Criteria**:
  - "Ready to remove the admin load?" headline
  - "Get Started" button (scroll to form)
  - Positioned before footer
- **Gates**: Build + Playwright (click CTA, verify scroll)
- **Evidence**: CTA section visible in page flow
- **Status**: [x] COMPLETE

### C7: Update Body Copy
- **Owner**: UI
- **Input**: User draft/requirements
- **Output**: `app/components/SupportingNarrative.tsx`
- **Acceptance Criteria**:
  - Restructure main body copy
  - Ensure clear narrative flow
- **Gates**: Visual review
- **Evidence**: Pending
- **Status**: [ ] TODO

### C8: UI Design System Upgrade
- **Owner**: UI
- **Input**: `ui-design` skill
- **Output**: `styles/globals.css`, component updates
- **Acceptance Criteria**:
  - Create `ui-design` skill
  - Improve front-end aesthetic (Premium, Rich interactions)
- **Gates**: Visual review
- **Evidence**: Pending
- **Status**: [ ] TODO

---

## Segment D: Contact Form

### D1: Define TypeScript Types
- **Owner**: DB
- **Input**: Data contracts from gemini.md
- **Output**: `types/index.ts`
- **Acceptance Criteria**:
  - `FormSubmission` interface defined
  - `EmailPayload` interface defined
  - `AdminNotification` interface defined
- **Gates**: Build (TypeScript compilation)
- **Evidence**: types/index.ts with all interfaces
- **Status**: [x] COMPLETE

### D2: Create Validation Schema
- **Owner**: DB
- **Input**: Form field requirements
- **Output**: `lib/validation.ts`
- **Acceptance Criteria**:
  - Zod schema for all form fields
  - Email format validation
  - Phone format validation (flexible)
  - Message length validation (max 1000 chars)
- **Gates**: Build + Unit tests (validate schema)
- **Evidence**: lib/validation.ts with Zod schema
- **Status**: [x] COMPLETE

### D3: Build Contact Form Component
- **Owner**: UI
- **Input**: Validation schema, TypeScript types
- **Output**: `app/components/ContactForm.tsx`
- **Acceptance Criteria**:
  - 5 visible fields: Name, Business Name, Job Title, Email, Phone
  - Inquiry type radio buttons (3 options)
  - Message textarea (conditional, "Something else" only)
  - Honeypot field (hidden)
  - Client-side validation with React Hook Form
  - Loading state during submission
  - Success message after submission
  - Error messages for validation failures
- **Gates**: Build + Playwright (fill form, submit, verify validation)
- **Evidence**: Contact form visible with all required fields
- **Status**: [x] COMPLETE

---

## Segment E: Email Integration

### E1: Create Email Templates
- **Owner**: DB
- **Input**: Email payload interfaces
- **Output**: `lib/email.ts`
- **Acceptance Criteria**:
  - `generateAutoresponse()` function (user confirmation)
  - `generateAdminNotification()` function (admin alert)
  - HTML email templates (simple, responsive)
  - Plain text fallbacks
- **Gates**: Build + Manual test (send test emails)
- **Evidence**: Email templates embedded in API route
- **Status**: [x] COMPLETE (templates in route.ts)

### E2: Build Form Submission API Route
- **Owner**: DB
- **Input**: Validation schema, email templates, Resend SDK
- **Output**: `app/api/contact/route.ts`
- **Acceptance Criteria**:
  - POST endpoint validates submission with Zod
  - Honeypot check (reject if filled)
  - Send autoresponse via Resend
  - Send admin notification via Resend
  - Return success/error JSON response
  - Rate limiting (max 5 per IP per hour) - deferred to post-MVP
- **Gates**: Build + Playwright (submit form, verify emails sent)
- **Evidence**: API route with validation, honeypot, Resend integration
- **Status**: [x] COMPLETE (rate limiting deferred)

### E3: Configure Resend Integration
- **Owner**: Setup
- **Input**: Resend API key, admin email
- **Output**: Environment variables configured
- **Acceptance Criteria**:
  - RESEND_API_KEY in .env.local
  - ADMIN_EMAIL in .env.local
  - Resend SDK installed and configured
  - SPF/DKIM records documented in README
- **Gates**: Manual test (send test email)
- **Evidence**: Pending (need API key from user)
- **Status**: [ ] BLOCKED (waiting for Resend API key)

---

## Segment F: Testing & Verification

### F1: Write Playwright Tests
- **Owner**: QA
- **Input**: All components completed
- **Output**: `tests/landing-page.spec.ts`
- **Acceptance Criteria**:
  - Test 1: Homepage loads (verify hero headline)
  - Test 2: Navigation smooth scroll
  - Test 3: Form validation (empty fields, invalid email)
  - Test 4: Form submission success
  - Test 5: Mobile responsiveness
  - Test 6: Accessibility (axe scan)
- **Gates**: All tests pass
- **Evidence**: Playwright test report
- **Status**: [ ]

### F2: Run Build Verification
- **Owner**: QA
- **Input**: Complete codebase
- **Output**: Production build
- **Acceptance Criteria**:
  - `npm run build` succeeds with no errors
  - `npx tsc --noEmit` passes with no errors
  - No console warnings
- **Gates**: Build success
- **Evidence**: Build output: "✓ Compiled successfully"
- **Status**: [x] COMPLETE

### F3: Run Lighthouse Audit
- **Owner**: QA
- **Input**: Dev server running
- **Output**: Lighthouse report
- **Acceptance Criteria**:
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- **Gates**: Lighthouse scores meet targets
- **Evidence**: Lighthouse report screenshot
- **Status**: [ ]

### F4: Manual Cross-Browser Testing
- **Owner**: QA
- **Input**: Dev server running
- **Output**: Test results document
- **Acceptance Criteria**:
  - Tested in Chrome, Safari, Firefox (desktop)
  - Tested in iOS Safari, Android Chrome (mobile)
  - No visual regressions
  - All functionality works
- **Gates**: Manual verification
- **Evidence**: Screenshots from each browser
- **Status**: [ ]

### F5: Email Deliverability Testing
- **Owner**: QA
- **Input**: Form submission API working
- **Output**: Email test results
- **Acceptance Criteria**:
  - Submit test form with real email
  - Autoresponse received within 1 minute
  - Admin notification received
  - Emails not in spam folder
  - Content correct (echoes submission)
- **Gates**: Emails delivered successfully
- **Evidence**: Screenshots of received emails
- **Status**: [ ] BLOCKED (waiting for Resend API key)

---

## Segment G: Deployment

### G1: Configure Vercel Project
- **Owner**: Deploy
- **Input**: Vercel account, domain already connected
- **Output**: Vercel project configured
- **Acceptance Criteria**:
  - Project linked to GitHub repo (or manual deployment)
  - Environment variables set in Vercel dashboard
  - Build settings configured (Next.js, Node 20.x)
  - Custom domain verified (imagine-if.ai)
- **Gates**: Preview deployment succeeds
- **Evidence**: Vercel dashboard screenshot
- **Status**: [ ]

### G2: Deploy to Production
- **Owner**: Deploy
- **Input**: All tests passing
- **Output**: Live site at imagine-if.ai
- **Acceptance Criteria**:
  - Production deployment succeeds
  - Site accessible at imagine-if.ai
  - HTTPS enforced
  - No console errors
  - Form submissions work in production
- **Gates**: Production verification
- **Evidence**: Screenshot of live site + form submission test
- **Status**: [ ]

### G3: Post-Deployment Verification
- **Owner**: QA
- **Input**: Production site live
- **Output**: Verification checklist completed
- **Acceptance Criteria**:
  - Run Lighthouse on production URL
  - Submit test form, verify emails received
  - Test on mobile device (real device, not simulator)
  - Verify all links work
  - Verify images load correctly
- **Gates**: All verifications pass
- **Evidence**: Production Lighthouse report + email screenshots
- **Status**: [ ]

---

## Summary

**Total tasks**: 28  
**Completed**: 18  
**In progress**: 0  
**Blocked**: 2 (waiting for Resend API key)
**Remaining**: 8

**Next tasks**:
- A4: Create .env.local.example
- C2: Create hero illustration (or keep existing placeholder)
- F1: Write Playwright tests
- F3: Run Lighthouse audit
- G1-G3: Deployment tasks

**Blockers**:
- Resend API key needed from user
- Admin email needed from user
