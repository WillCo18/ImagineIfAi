# Deployment Configuration: imagine-if.ai

**Focus keyword**: anti-gravity

---

## Deployment Target

**Platform**: Vercel  
**Domain**: imagine-if.ai (already registered and connected)  
**Framework**: Next.js 15 with App Router

---

## Vercel Configuration

### Project Settings

**Build Settings**:
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next` (auto-detected)
- Install Command: `npm install`
- Development Command: `npm run dev`

**Node.js Version**: 20.x (recommended for Next.js 15)

### Environment Variables

**Required for Production**:
```
NEXT_PUBLIC_SITE_URL=https://imagine-if.ai
ADMIN_EMAIL=will@imagine-if.ai
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Optional (for future activation)**:
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=imagine-if.ai
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**How to set**:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add each variable with appropriate scope (Production, Preview, Development)
3. Redeploy after adding variables

### Domain Configuration

**Custom Domain**: imagine-if.ai  
**Status**: Already connected (per user confirmation)

**DNS Records to Verify**:
- A record: Points to Vercel's IP (76.76.21.21)
- CNAME record (www): Points to cname.vercel-dns.com

**SSL/TLS**: Automatic via Vercel (Let's Encrypt)

**Redirects**:
- www.imagine-if.ai → imagine-if.ai (or vice versa, confirm preference)
- Configure in `next.config.js` or Vercel dashboard

---

## Email Configuration (Resend)

### SPF Record
Add to DNS:
```
TXT @ "v=spf1 include:_spf.resend.com ~all"
```

### DKIM Record
1. Log into Resend dashboard
2. Navigate to Domains → Add Domain
3. Add `imagine-if.ai`
4. Copy DKIM record values
5. Add to DNS as TXT records

**Verification**: Resend will verify DNS records automatically (may take up to 48 hours)

---

## Deployment Workflow

### Automatic Deployments (Recommended)

**Setup**:
1. Connect GitHub repository to Vercel
2. Configure production branch: `main`
3. Enable automatic deployments

**Workflow**:
- Push to `main` → Production deployment
- Push to feature branches → Preview deployments
- Pull requests → Preview deployments with unique URLs

### Manual Deployments (Alternative)

**Via Vercel CLI**:
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Via Vercel Dashboard**:
1. Upload project files (zip or drag-and-drop)
2. Configure settings
3. Deploy

---

## Pre-Deployment Checklist

- [ ] All environment variables configured in Vercel
- [ ] DNS records verified (A, CNAME, SPF, DKIM)
- [ ] Build succeeds locally (`npm run build`)
- [ ] All Playwright tests pass (`npx playwright test`)
- [ ] Lighthouse scores meet targets (90+ performance, 100 accessibility/SEO)
- [ ] Email deliverability tested (send test form submission)
- [ ] Cross-browser testing completed
- [ ] Mobile testing completed (real device)

---

## Post-Deployment Verification

### Immediate Checks (within 5 minutes)
- [ ] Site accessible at https://imagine-if.ai
- [ ] HTTPS enforced (no mixed content warnings)
- [ ] No console errors in browser DevTools
- [ ] Form submission works (test with real email)
- [ ] Autoresponse email received
- [ ] Admin notification email received

### Within 24 Hours
- [ ] Run Lighthouse audit on production URL
- [ ] Verify Core Web Vitals in Vercel Analytics
- [ ] Check email deliverability (inbox vs spam)
- [ ] Monitor Vercel logs for errors
- [ ] Test on multiple devices/browsers

### Within 1 Week
- [ ] Monitor form submissions (spam vs legitimate)
- [ ] Review Vercel bandwidth usage
- [ ] Check for any 404 errors (Vercel Analytics)
- [ ] Verify SEO indexing (Google Search Console)

---

## Rollback Plan

**If deployment fails or critical issues found**:

1. **Instant Rollback** (Vercel Dashboard):
   - Navigate to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Revert via Git**:
   ```bash
   git revert HEAD
   git push origin main
   ```
   (Triggers automatic redeployment of previous version)

3. **Emergency Fix**:
   - Create hotfix branch
   - Fix issue
   - Deploy to preview (test thoroughly)
   - Merge to main for production deployment

---

## Monitoring & Maintenance

### Vercel Analytics (Built-in)
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Traffic analytics
- Error tracking

### External Monitoring (Optional)
- **Uptime monitoring**: UptimeRobot, Pingdom
- **Error tracking**: Sentry (if issues arise)
- **Analytics**: Plausible (when activated)

### Regular Maintenance
- **Weekly**: Review Vercel logs for errors
- **Monthly**: Check dependency updates (`npm outdated`)
- **Quarterly**: Review and update Next.js version
- **As needed**: Update content, fix bugs, add features

---

## Cost Estimates

### Vercel (Hobby Plan - Free)
- **Bandwidth**: 100 GB/month
- **Builds**: Unlimited
- **Serverless Function Executions**: 100 GB-hours/month
- **Estimated usage**: Well within free tier for MVP

**Upgrade to Pro ($20/month) if**:
- Bandwidth exceeds 100 GB/month
- Need team collaboration features
- Require advanced analytics

### Resend (Free Tier)
- **Emails**: 3,000/month, 100/day
- **Estimated usage**: 5-20 emails/day (well within free tier)

**Upgrade to Paid ($20/month) if**:
- Email volume exceeds 3,000/month
- Need dedicated IP for deliverability
- Require advanced analytics

### Total Estimated Cost
- **MVP**: $0/month (free tiers)
- **With growth**: $20-40/month (Vercel Pro + Resend Paid)

---

## Security Considerations

### Vercel Security Features (Enabled by Default)
- HTTPS/TLS encryption
- DDoS protection
- Automatic security headers
- Edge network (global CDN)

### Additional Security (Implemented in Code)
- Content Security Policy (CSP) headers
- Rate limiting on form submissions
- Honeypot spam prevention
- Input validation (Zod schemas)
- No sensitive data storage (emails only)

### Security Headers (next.config.js)
```javascript
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

---

## Support & Troubleshooting

### Common Issues

**Issue**: Build fails on Vercel but succeeds locally  
**Solution**: Check Node.js version match, verify environment variables set

**Issue**: Form submissions not sending emails  
**Solution**: Verify RESEND_API_KEY in Vercel env vars, check Resend dashboard for errors

**Issue**: Slow page load times  
**Solution**: Check image optimization, verify CDN caching, review Vercel Analytics

**Issue**: Emails landing in spam  
**Solution**: Verify SPF/DKIM records, warm up domain (send gradually increasing volume)

### Getting Help
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: support@vercel.com (Pro plan)
- Resend Documentation: https://resend.com/docs
- Next.js Documentation: https://nextjs.org/docs
