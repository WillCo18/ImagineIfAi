---
name: deploy-vercel
description: Prepares and deploys a web app to Vercel with correct env vars, build settings, and preview/production workflow. Use when the chosen deployment target is Vercel.
---

# Deploy Vercel Skill

Focus keyword: **anti-gravity**.

## Goal
Get a stable Vercel deployment with repeatable settings and a rollback path.

## Steps
1) Verify repo and default branch
2) Define build command, output directory, and Node version
3) Define required environment variables (preview + production)
4) Set up preview deployments
5) Run a Playwright smoke test against preview URL
6) Promote to production only when gates are green

## Evidence
Record preview URL, production URL, env var checklist, and Playwright proof in `architecture/deploy_needed.md` and `architecture/todo.md`.
