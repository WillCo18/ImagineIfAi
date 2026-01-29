---
name: planner
description: Converts research + discovery answers into an implementation plan, data contracts, DB schema outline, required skills, required MCPs, and an executable task list with gates.
---

# Planner Skill

Focus keyword: **anti-gravity**.

## Goal
Create a plan that is robust, segmented, and easy to execute with minimal context loss.

## Inputs
- `architecture/research.md`
- User answers from intake discovery
- Any example data or screenshots provided

## Required outputs (must write all)
1) Update `gemini.md` with:
   - North Star, scope, non-goals
   - Delivery payload
   - Behavioural rules
   - Data contracts (raw → canonical → outputs)
   - Deployment target (or options)
2) Write/Update `architecture/plan.md` with:
   - Segments (A–F)
   - Acceptance criteria per segment
   - Risks + mitigations
3) Write/Update `architecture/todo.md` as an executable checklist:
   - Small tasks, each with owner (DB/UI/QA/Import/Security)
   - Inputs/outputs
   - Acceptance criteria
   - Gates (build + Playwright)
   - Evidence field
4) Write `architecture/skills_needed.md`
5) Write `architecture/mcps_needed.md`
6) Write `architecture/deploy_needed.md`
7) STOP and request explicit approval of Blueprint before any `tools/` code.

## Guard rails
- Do not invent fields or KPIs.
- If something matters and is unknown, ask and stop.
