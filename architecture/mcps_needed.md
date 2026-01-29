# MCPs Needed: imagine-if.ai Landing Page

**Focus keyword**: anti-gravity

---

## Required MCPs

### 1. Playwright MCP (Browser Testing)
**Purpose**: Automated UI verification and end-to-end testing  
**Status**: Available (assumed based on BLAST protocol requirements)  
**Usage**:
- Test navigation smooth scroll
- Test form validation (empty fields, invalid inputs)
- Test form submission success flow
- Test mobile responsiveness
- Run accessibility scans (axe)
- Visual regression testing (screenshots)

**Critical for**: Green gates in todo.md (every UI task requires Playwright verification)

---

## MCPs NOT Needed

### Supabase MCP
**Why not**: No database required for MVP. Form submissions handled via email (Resend API).

### Firebase MCP
**Why not**: No backend services required. Static site with API route for form handling.

### Actors MCP (Apify)
**Why not**: No web scraping or data extraction needed.

### Firecrawl MCP
**Why not**: Already used during research phase, not needed for implementation.

---

## Third-Party Services (Not MCP)

### Resend (Email Service)
**Purpose**: Send autoresponse and admin notification emails  
**Integration**: REST API via SDK (`resend` npm package)  
**Setup required**:
- Create Resend account
- Generate API key
- Configure SPF/DKIM records for domain
- Add API key to environment variables

### Plausible Analytics (Optional, Future)
**Purpose**: Privacy-friendly analytics  
**Integration**: Script tag in layout.tsx (commented out for MVP)  
**Setup required** (when activating):
- Create Plausible account
- Add site domain
- Add script to layout
- Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN env var

### Google Analytics (Optional, Future)
**Purpose**: Traditional analytics  
**Integration**: Script tag in layout.tsx (commented out for MVP)  
**Setup required** (when activating):
- Create GA4 property
- Get tracking ID
- Add script to layout
- Set NEXT_PUBLIC_GA_ID env var

---

## MCP Server Recommendations

If Playwright MCP is not available, consider:
- Manual browser testing (less reliable, more time-consuming)
- Cypress (alternative E2E testing framework)
- WebdriverIO (alternative browser automation)

**Decision**: Proceed with Playwright MCP as specified in BLAST protocol. If unavailable, notify user and propose alternative testing strategy.
