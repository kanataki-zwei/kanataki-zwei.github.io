# Project Progress

## Done

### Infrastructure & Technical
- [x] Mobile hamburger menu — full-screen overlay, closes on link click, body scroll locked while open
- [x] Smooth scrolling — `html { scroll-behavior: smooth }`
- [x] OpenGraph / LinkedIn meta tags — og:title, og:description, og:type, og:url
- [x] Favicon — PG initials, SVG data URI, matches dark theme
- [x] CNAME set to `www.gichiniwaruingi.com` (was already correct)
- [x] Removed broken "Download CV" button (PDF missing from repo)
- [x] Tool icons via Simple Icons CDN in Tools & Platforms section

### Content & Positioning
- [x] Title updated to "Senior Data Engineering Manager" throughout (nav brand, `<title>`, hero card, experience)
- [x] Nav brand tagline: `Senior Data Engineering Manager · 12 yrs in tech`
- [x] Hero headline spans full page width
- [x] Hero chips removed — replaced by stats row
- [x] Hero stats row: `📍 Nairobi · 12 yrs in tech · 10 yrs in data · 3 teams led · 10+ enterprise warehouses shipped`
- [x] Hero subtitle rewritten: leads with 10 years data engineering, frames management as progression
- [x] Hero body rewritten: strategic-but-technical framing ("rolling up my sleeves when the problem demands it")
- [x] Hero "Currently" card updated: new role title, mission-focused description, updated badges
- [x] Contact section rewritten: open conversation tone, not job-hunting language

### Experience Section
- [x] Educate! split into two entries: Senior Data Engineering Manager (Aug 2026–Present) + Senior Data Engineer (May 2025–Aug 2026)
- [x] Both Educate! roles displayed side by side (row 1), Wowzi and Iconia in row 2
- [x] Educate! content updated from LinkedIn (both entries)
- [x] Time-to-insight metric corrected from 30% to 50%+

### Skills Section
- [x] Restructured into 6 capability categories + Tools & Platforms
- [x] Leadership & People Management added as first category
- [x] Data Architecture & Engineering (replaces old "Pipelines & Warehousing" + "Cloud")
- [x] Analytics & Data Products (NLP analytics, drag & drop, custom dashboards)
- [x] Governance, Security & Compliance (includes Youth Data Protection, DevSecOps)
- [x] AI Engineering (LLM fine-tuning, RAG, MCP development) — separated from ML
- [x] ML Engineering & MLOps (predictive modelling, classification, MLOps pipelines)
- [x] Tools & Platforms — full-width row with icons, MLflow and Spark ML moved here

### Section Order
- [x] Skills moved before Volunteering
- [x] Final order: About → Experience → Projects → Skills → Volunteering → Contact
- [x] Nav links updated to match

---

## Pending

### High Priority
- [ ] **Deploy to Namecheap** — point new domain to GitHub Pages. Steps: add A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and CNAME record (www → kanataki-zwei.github.io) in Namecheap DNS settings. Then enable custom domain in GitHub Pages settings.
- [ ] **Add CV PDF to repo** — place `Patrick_Waruingi.pdf` in repo root, then re-add the Download CV button to the nav

### Content
- [ ] **Projects section review** — content hasn't been updated. Worth reviewing descriptions, metrics, and whether to add more projects
- [ ] **Wowzi experience** — bullet points not updated from LinkedIn. Worth syncing
- [ ] **Iconia experience** — bullet points not updated from LinkedIn. Worth syncing
- [ ] **Earlier Roles** — currently a brief paragraph. Could be improved or expanded slightly

### Design / Visual
- [ ] **Visual redesign** — the design is still the original dark theme from before the revamp. Direction not yet decided. Options discussed: bento grid/editorial, minimalist/typographic, dark glassmorphism (elevated version of current), terminal/hacker aesthetic
- [ ] **og:image** — no social preview image hosted yet. Adding one would improve LinkedIn share appearance significantly. Needs a hosted image (profile photo or branded banner)

### Future / Backend Phase
- [ ] Backend work (scope TBD — mentioned as a future phase)
- [ ] Any dynamic features (contact form, etc.)
