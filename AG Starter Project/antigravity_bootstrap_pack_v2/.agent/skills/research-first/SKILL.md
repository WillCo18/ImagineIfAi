---
name: research-first
description: Runs a neutral research and feasibility pass to inform planning. Use at the start of any new build instruction to gather requirements, constraints, and proven patterns before planning.
---

# Research-First Skill

Focus keyword: **anti-gravity**.

## Goal
Turn a vague build instruction into grounded inputs for planning:
- constraints
- comparable solutions and patterns
- risks
- recommended stack options (with trade-offs)

## When to use
Use for any new software build instruction before writing a plan.

## Inputs
- The build instruction (1–3 sentences)
- Any constraints already known (budget, timeline, hosting, security)

## Output file (required)
Write results to `architecture/research.md` with these sections:

1) Problem statement (restated in plain terms)
2) Assumptions (explicit)
3) Key unknowns (to ask the user)
4) Proven patterns (what typically works)
5) Stack options (2–3) with trade-offs
6) Security and privacy considerations (baseline)
7) Testing approach (baseline)
8) Deployment considerations (platform options)
9) Recommendation (conditional, based on answers)

## Guard rails
- Stay neutral. Do not lock stack choices until user constraints are answered.
- If you cannot research externally in this environment, rely on user-provided references and state limitations clearly.
