---
name: vercel-subdirectory-deploy
description: Host multiple standalone Next.js projects under subdirectories of a single root domain using Vercel rewrites.
---

# Vercel Subdirectory Deployment Skill

Use this skill to host multiple independent applications (Micro-SaaS, client demos, etc.) under a single domain (e.g., `domain.com/app1`, `domain.com/app2`).

## Automation Utility
You can use the included `prepare_vercel.js` script to automatically check your project and inject the required settings.

1. Copy `scripts/prepare_vercel.js` to your new project folder.
2. Run: `node prepare_vercel.js your-path-name`

It will:
- ✅ Check for `next.config.js/ts`.
- ✍️ Inject the `basePath`.
- 📋 Provide the exact JSON snippet for your `vercel.json` main file.

## Step 2: Configure the Root Project
In your main landing page project (the one that owns the domain):

1. Create or open `vercel.json` in the root (or landing folder).
2. Add a `rewrites` section to proxy traffic to the sub-project's Vercel URL.

```json
{
  "rewrites": [
    {
      "source": "/youtube/:path*",
      "destination": "https://your-standalone-project.vercel.app/youtube/:path*"
    }
  ]
}
```

## Benefits
- **Zero Extra Cost:** No need to buy new domains for every project.
- **Brand Consistency:** All projects stay under your primary business domain.
- **SEO Authority:** Traffic to sub-projects builds the authority of your main domain.

## Comparison: Subfolders vs. Subdomains

| Approach | URL Pattern | Best For |
| :--- | :--- | :--- |
| **Subfolder** | `domain.com/app` | Small tools, portfolio items, demos |
| **Subdomain** | `app.domain.com` | Standalone SaaS, client dashboards |

> [!TIP]
> To use a subdomain instead, simply add the custom subdomain (e.g. `dash.imagine-if.ai`) in the Vercel Settings > Domains of the sub-project. No rewrites required.
