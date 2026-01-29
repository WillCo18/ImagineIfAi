---
name: build-orchestrator
description: Executes architecture/todo.md task-by-task with strict green gates, using Supabase MCP for DB and Playwright MCP for UI verification. Triggers learning-loop on failures.
---

# Build Orchestrator Skill

Focus keyword: **anti-gravity**.

## Inputs
- `architecture/todo.md`
- `gemini.md` for current state and constraints

## Execution rules
1) Read the next TODO item with Status=TODO
2) Confirm inputs exist (files, credentials, MCP connectivity if required)
3) Execute the smallest change to complete that task
4) Run green gates:
   - build or tests
   - Playwright smoke
5) Record what changed, gate results, and evidence into `architecture/todo.md`
6) If any gate fails:
   - run `learning-loop` immediately
   - add regression guard
   - rerun gates until green
7) Move to next task

## Guard rails
- Never do multiple tasks at once.
- No “it should work”. Always prove with gates.
