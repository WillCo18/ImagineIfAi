# imagine-if.ai Project Map

**Focus keyword**: anti-gravity

---

## North Star

Build a conversion-focused landing page for imagine-if.ai that communicates practical AI automation for hospitality and local SMEs, qualifies leads through a clean contact form, and deploys to Vercel with premium design matching the LinkedIn banner's restrained visual language.

## Scope

### In Scope
- Modern Next.js 15 landing page with App Router + TypeScript
- Hero section with headline, subline, CTAs, and human-in-the-loop illustration
- "What we do" service cards (max 5)
- Trust section ("Security First", process transparency, no testimonials)
- Soft qualification messaging ("What we're not")
- Contact form with 5 fields + inquiry type selection
- Form autoresponse (email confirmation)
- Mobile-first responsive design
- SEO optimization (meta tags, semantic HTML, accessibility)
- Vercel deployment with domain already connected
- Privacy-friendly analytics preparation (Plausible)
- Google Analytics preparation (not activated yet)

### Out of Scope (Non-Goals)
- Backend database (form submissions via email/webhook for MVP)
- User authentication
- CMS integration
- Blog or content pages
- Multi-language support
- Cookie consent (no cookies on MVP)
- Live chat widget
- Client portal or dashboard

## Delivery Payload

**Primary deliverable**: Live landing page at `imagine-if.ai` deployed on Vercel

**Components**:
1. Static Next.js site with optimized images and fonts
2. Contact form with client-side validation
3. Form submission handler (API route or third-party service)
4. Email autoresponse template
5. Analytics integration (prepared but not activated)

## Behavioural Rules

### Form Submission
- **Validation**: Client-side validation before submission (required fields, email format, phone format)
- **Error handling**: Clear error messages for validation failures
- **Success state**: Confirmation message + autoresponse email sent
- **Spam prevention**: Honeypot field (hidden from users)
- **Rate limiting**: Consider Vercel Edge Functions or third-party service (Formspree, Resend)

### Performance
- **Target Lighthouse scores**:
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- **Image optimization**: Next.js Image component for all images
- **Font optimization**: Next.js Font optimization for Inter

### Accessibility
- **WCAG AA compliance**: Color contrast ratios, keyboard navigation, screen reader support
- **Semantic HTML**: Proper heading hierarchy, ARIA labels where needed
- **Focus management**: Visible focus indicators, logical tab order

## Data Contracts

### Raw Input (Form Submission)
```typescript
interface FormSubmission {
  name: string;              // Required, 2-100 chars
  businessName: string;      // Required, 2-100 chars
  jobTitle: string;          // Required, 2-100 chars
  email: string;             // Required, valid email format
  phone: string;             // Required, valid phone format (flexible)
  inquiryType: 'quick-chat' | 'foundation-review' | 'other'; // Required
  message?: string;          // Optional, max 1000 chars (for "other")
  honeypot?: string;         // Hidden field, should be empty
  timestamp: string;         // Auto-generated (ISO 8601)
}
```

### Canonical (Email Payload)
```typescript
interface EmailPayload {
  to: string;                // User's email
  from: string;              // noreply@imagine-if.ai
  subject: string;           // "Thanks for reaching out to Imagine-If.AI"
  body: {
    greeting: string;        // "Hi [name],"
    summary: string;         // "You requested: [inquiryType]"
    formData: FormSubmission; // Echo back their submission
    nextSteps: string;       // "We'll be in touch within 24 hours"
    signature: string;       // "The Imagine-If.AI Team"
  };
}
```

### Output (Admin Notification)
```typescript
interface AdminNotification {
  to: string;                // will@imagine-if.ai (or configured admin email)
  from: string;              // noreply@imagine-if.ai
  subject: string;           // "New inquiry: [inquiryType] from [businessName]"
  body: {
    formData: FormSubmission; // Full submission details
    submittedAt: string;     // Human-readable timestamp
  };
}
```

## Deployment Target

**Primary**: Vercel (domain already connected)

**Build configuration**:
- Framework: Next.js 15
- Build command: `npm run build`
- Output directory: `.next` (auto-detected)
- Node version: 20.x
- Environment variables:
  - `NEXT_PUBLIC_SITE_URL` (for canonical URLs)
  - `ADMIN_EMAIL` (for form notifications)
  - `RESEND_API_KEY` (if using Resend for emails)
  - `PLAUSIBLE_DOMAIN` (when analytics activated)

**Deployment workflow**:
1. Push to `main` branch → automatic production deployment
2. Push to feature branches → preview deployments
3. Domain: `imagine-if.ai` (already configured)

---

## Project Structure

```
imagine-if.ai/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, metadata)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system tokens
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Form submission handler
│   └── components/
│       ├── Hero.tsx
│       ├── ServiceCards.tsx
│       ├── TrustSection.tsx
│       ├── QualificationSection.tsx
│       ├── ContactForm.tsx
│       ├── CTASection.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
├── public/
│   ├── logo.png
│   ├── banner-reference.png
│   └── illustrations/
│       └── hero-illustration.svg
├── lib/
│   ├── email.ts                # Email sending utilities
│   └── validation.ts           # Form validation helpers
├── types/
│   └── index.ts                # TypeScript interfaces
├── package.json
├── next.config.js
├── tsconfig.json
└── tailwind.config.ts          # (if using Tailwind, otherwise vanilla CSS)
```

---

## Status

- [x] Research completed
- [x] Discovery questions answered
- [x] Stack approved (Next.js 15 + App Router + TypeScript)
- [x] Implementation plan created
- [x] Task list created
- [x] Skills and MCPs identified
- [x] Blueprint approved
- [x] Implementation started (Hero, Contact Form, API Route complete)
- [ ] Verification completed
- [ ] Deployed to production
