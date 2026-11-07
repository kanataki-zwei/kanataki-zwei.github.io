# Design & Content Decisions

A log of key decisions made during the revamp, with reasoning — so we don't relitigate them.

---

## Positioning

**Decision: Keep "Senior Data Engineering Manager" as the title everywhere.**
Considered softening it to signal technical depth. Decided against — the title is the seniority signal, and changing it undersells the level. The content around the title carries the technical nuance instead.

**Decision: Add "12 yrs in tech" to the nav brand tagline.**
Surfaces the experience signal immediately without changing the title. Format: `Senior Data Engineering Manager · 12 yrs in tech`.

**Decision: Distinguish 12 years in tech from 10 years in data engineering.**
These are different credentials. 12 years = overall tech career and credibility. 10 years = data engineering depth specifically. Both are communicated in the hero stats row.

**Decision: Frame management as progression, not departure from engineering.**
Subtitle: "10 years in data engineering, now leading the teams that build it." The word "now" signals natural evolution rather than a career pivot.

**Decision: Frame technical hands-on work as strategic, not reflexive.**
Key phrase in hero body: "rolling up my sleeves when the problem demands it." This signals selective, deliberate technical engagement — not a manager who codes everything or micromanages engineers.

---

## Hero Section

**Decision: Hero headline spans full page width.**
Originally constrained to the left column. Moved to span both columns as a full-width statement. Better visual hierarchy — the headline introduces, then the two columns below (description + current role card) provide detail.

**Decision: Remove skill chips from the hero section.**
Chips (ETL/ELT, Cloud Infrastructure, etc.) were placed between the subtitle and body paragraph, interrupting the narrative flow. The stats row handles proof work. The skills section handles domain depth. Chips in the hero added noise without value.

**Decision: Stats row format.**
`📍 Nairobi, Kenya · 12 yrs in tech · 10 yrs in data · 3 teams led · 10+ enterprise warehouses shipped`
Numbers do credential work. The body paragraph does character work. These are intentionally separate.

---

## Experience Section

**Decision: Split Educate! into two separate entries.**
Promoted to Senior Data Engineering Manager in Aug 2026 after joining as Senior Data Engineer in May 2025. Two distinct roles, two distinct contributions — keeping them separate is accurate and shows career progression.

**Decision: Display both Educate! roles side by side (two-column row).**
Stacking them in a single column put the most recent role above the fold but pushed it below older Wowzi experience when scrolling. Side-by-side keeps the most recent work visible immediately. Second row holds Wowzi and Iconia.

**Decision: Use LinkedIn content as source of truth for Educate! bullet points.**
Updated both entries to match LinkedIn wording, correcting metrics (time-to-insight updated from 30% to 50%+) and adding new bullets not in the original version.

---

## Skills Section

**Decision: Separate capabilities from tools.**
Previous structure mixed "what you can do" with "what you use to do it" in the same chip lists. New structure: 6 capability categories answer "what can you do?", Tools & Platforms answers "what do you use?" — a dense full-width row for quick scanning.

**Decision: Split AI Engineering from ML Engineering & MLOps.**
These are genuinely distinct bodies of work. AI Engineering covers LLM fine-tuning, RAG, MCP development, AI-powered analytics. ML Engineering covers predictive modelling, classification, MLOps pipelines. Keeping them together understated the AI work.

**Decision: Move MLflow and Spark ML to Tools & Platforms.**
These are tools, not capabilities. Keeping them in the AI/ML capability categories mixed abstraction levels.

**Decision: Add tool icons via Simple Icons CDN.**
Icons added to Tools & Platforms chips only. 13px, 75% opacity, neutral gray (#9ca3af) to match chip text colour. `onerror` handler hides broken icons gracefully. Shiny has no Simple Icons entry — text only.

**Decision: Leadership & People Management as the first skills category.**
At Senior Data Engineering Manager level, leadership is the primary value proposition. It surfaces first in the skills scan.

---

## Section Order

**Decision: Skills before Volunteering, both after Projects.**
Final order: About → Experience → Projects → Skills → Volunteering → Contact.
Reasoning: Experience tells the career story. Projects extend it with specific outcomes. Skills then read as a reference/validation of everything above. Volunteering lands last as a character signal — who you are beyond commercial incentive.

**Decision: Skills NOT moved before Experience.**
Considered it. Rejected because skills without experience context are hollow at this level. Recruiters for manager roles filter on outcomes and leadership, not on "does he know Airflow."

---

## Contact Section

**Decision: Rewrite contact copy to remove job-hunting language.**
Original: "I'm open to collaborations, consulting, and senior data engineering management roles."
Problem: Patrick is happy in his current role and not actively looking. The language read like a job board profile.
New tone: open invitation for conversations, consulting, and connecting — not a hire-me signal.

---

## Features Considered & Rejected

**Guided tour (rejected).**
Idea: walk users through the page on first visit with a step-by-step overlay.
Rejected because:
- Target audience (recruiters, CTOs, senior peers) finds guided tours patronising
- The site is a simple one-page scroll — a tour implies complexity that doesn't exist
- 70-80% of users dismiss tours immediately without reading
- The page structure already guides the narrative (hero → experience → projects → skills → volunteering → contact)
- Better alternatives exist for controlling narrative: page structure, section headers, stats row

**Profile photo (deferred).**
Decided against adding for now. Can be revisited. If added later, place in hero section — either as a circular avatar beside the headline or inside the "Currently" card.

---

## Technical

**Decision: Remove "Download CV" button.**
The PDF file (Patrick_Waruingi.pdf) does not exist in the repo. The button was a broken link. Removed to avoid a 404 on click. Only "View CV" pointing to rxresu.me remains. PDF should be added to repo root when ready.

**Decision: Single static HTML/CSS file.**
No frameworks, no build tools. Fast, zero-dependency, easy to maintain. Backend work is planned for a later phase.

**Decision: British English throughout.**
Organisation, standardising, standardisation, etc. Applied consistently.
