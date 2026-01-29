# Skills Needed: imagine-if.ai Landing Page

**Focus keyword**: anti-gravity

---

## Required Skills

### 1. build-orchestrator
**Purpose**: Execute architecture/todo.md task-by-task with strict green gates  
**When to use**: During EXECUTION phase to systematically build components  
**Why needed**: Ensures each task passes build + Playwright verification before moving to next task

### 2. deploy-vercel (if available)
**Purpose**: Prepare and deploy to Vercel with correct env vars and build settings  
**When to use**: During DEPLOYMENT phase (Segment G)  
**Why needed**: Domain already connected to Vercel, need proper configuration for production deployment

### 3. learning-loop
**Purpose**: Capture learnings after bugs, fixes, or design changes  
**When to use**: After any failure, rework, or unexpected behavior  
**Why needed**: Document issues and patch master prompt to prevent regression

---

## Skills NOT Needed

- **planner**: Already used during project intake
- **research-first**: Already used during project intake

---

## Custom Skills to Consider Creating

### email-testing
**Purpose**: Automated testing of email deliverability and content  
**Why**: Manual email testing is time-consuming and error-prone  
**Scope**: 
- Send test emails via Resend
- Verify delivery to inbox (not spam)
- Validate email content against templates
- Check HTML rendering across email clients

**Decision**: Create if email issues arise during testing, otherwise manual verification sufficient for MVP
