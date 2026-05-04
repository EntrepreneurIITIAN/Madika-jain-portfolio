# CLAUDE.md — Project Context for Claude Code

> Drop this file into the repo root so any Claude Code session that clones it
> instantly inherits the project context. Read this file first before doing anything.

---

## 👤 Owner

- **Name:** Krishna Sharma
- **Email:** krishna.sharma@collegedunia.com
- **GitHub:** EntrepreneurIITIAN
- **For:** Madika Jain (the portfolio subject — Krishna's collaborator)

---

## 📁 Local path

```
/Users/dell/Desktop/madika-portfolio
```

If you're a fresh Claude session and the repo is cloned to a different path,
ask the user once and update this section.

---

## 🌐 Live deployment

- **Production URL:** https://madika-portfolio.vercel.app
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **GitHub repo:** https://github.com/EntrepreneurIITIAN/Madika-jain-portfolio
- **Branch:** `main` (only)
- **Build root:** `frontend/` (Vite)
- **Backend:** ignored on Vercel via `.vercelignore`

---

## 🧱 Tech stack

| Layer | Tool |
|---|---|
| Build | **Vite 6** |
| Framework | **React 18** |
| Styling | **Tailwind 3** (with custom `cream` + `coral` palette) |
| Animations | **Framer Motion 11** |
| Icons | `react-icons` (Hi v1, Hi2, Fa) |
| Toasts | `react-hot-toast` |
| Fonts | **Fraunces** (serif headlines) + **Inter** (body) + **JetBrains Mono** (eyebrows/tags) — loaded from Google Fonts in `frontend/index.html` |
| Backend (separate) | FastAPI (`backend/`) — exists locally but deliberately excluded from Vercel build |

```bash
cd frontend
npm run dev      # local dev
npm run build    # production build (verify before pushing!)
npm run preview  # preview built bundle
```

---

## 📂 Project structure

```
madika-portfolio/
├── frontend/                       # Vite + React (only thing Vercel builds)
│   ├── index.html                  # Google Fonts links live here
│   ├── tailwind.config.js          # cream-{50..950} + coral-{50..900}, font families
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx                 # Toaster + Navbar + section composition
│       ├── index.css               # Full design system: utilities, components, scrollbar, paper grain
│       ├── assets/                 # profile.jpg, ss1.jpg
│       ├── components/
│       │   ├── Navbar.jsx          # Sticky w/ IntersectionObserver active pill
│       │   ├── SectionHeading.jsx  # Reusable eyebrow + display heading
│       │   └── TiltCard.jsx        # ⚠️ Legacy — NOT used in current Claude redesign
│       └── sections/
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Experience.jsx      # Imported by App.jsx but currently NOT rendered (kept for future)
│           ├── Skills.jsx          # 3 categories: Editorial / Research / AI
│           ├── AI.jsx
│           ├── Projects.jsx        # Featured + grid
│           ├── Achievements.jsx    # Vertical hairline timeline
│           ├── Testimonials.jsx    # Pull-quote layout
│           ├── Contact.jsx         # POSTs to /contact endpoint
│           └── Footer.jsx
├── backend/                        # FastAPI — NOT deployed to Vercel
├── api/                            # (empty/placeholder)
├── vercel.json                     # framework: vite, root: frontend
├── .vercelignore                   # hides backend/ from Vercel
├── .gitignore
└── CLAUDE.md                       # ← this file
```

---

## 🎨 Design system — "Claude editorial"

The site uses Anthropic's Claude.ai design language: **warm cream paper +
coral accent + Fraunces serif headlines**. Calm, magazine-like. **No gradients,
no glass-morphism, no neon.**

### Color tokens (Tailwind)

```js
cream: { 50:'#fdfcf8', 100:'#faf9f5', 200:'#f5f3ec', 300:'#ebe8dc',
         400:'#d8d3c2', 500:'#a8a39a', 600:'#6b6a65', 700:'#3d3a35',
         800:'#2a2724', 900:'#1f1d1a', 950:'#15130f' }
coral:  { 50:'#fdf6f1', 100:'#fae4d6', 200:'#f5d4c0', 300:'#eeb295',
         400:'#e89a7a', 500:'#d97757' /* ← Claude accent */,
         600:'#c05b3d', 700:'#9d4730', 800:'#7a3826', 900:'#5a291c' }
```

### Theme mapping

| | Light (default) | Dark |
|---|---|---|
| Background | `bg-cream-100` (#faf9f5) | `bg-cream-900` (#1f1d1a) |
| Card surface | `bg-white` | `bg-cream-800` (#2a2724) |
| Border | `cream-300` | `cream-700` |
| Text primary | `cream-900` | `cream-100` |
| Text secondary | `cream-600/700` | `cream-300/400` |
| Accent | `coral-600` | `coral-400` |

### Custom CSS classes (defined in `src/index.css`)

| Class | Use |
|---|---|
| `.display-heading` | Fraunces serif, tight tracking, line-height 1.05 — for big H2s |
| `.accent` (inside `.display-heading`) | Italic coral accent words |
| `.section-label` | Mono uppercase eyebrow with coral horizontal rule |
| `.btn-primary` | Solid cream-900 pill, hover → coral |
| `.btn-ghost` | Outlined, hover → coral border + text |
| `.gradient-btn` | Alias of `.btn-primary` (back-compat) |
| `.gradient-text` | Alias of `.accent-text` (back-compat) |
| `.card` / `.card-hover` | Hairline-bordered paper card; hover lifts + coral border |
| `.icon-box` / `.icon-box-sm` | Soft coral-tinted icon container |
| `.pill` / `.pill-accent` | Cream / coral tags |
| `.hairline` | Top border in cream-300/700 |

### Default mode

**Light mode is default** (`darkMode: false` initial state in `App.jsx`).
Persisted in `localStorage.darkMode`.

---

## 🚦 Hard constraints — DO NOT VIOLATE

When making future changes:

- ❌ **Never change routing structure** (it's a single-page anchor-nav site — `#home`, `#about`, etc.)
- ❌ **Never break the `/contact` POST** in `Contact.jsx` (backend depends on this exact shape)
- ❌ **Never reintroduce purple/violet/rose gradients** — the design language is now coral + cream
- ❌ **Never use `glass-blur` cards** in dark mode (the old `:not(.dark) .card` pattern caused white-card-on-dark-bg bugs — see commit `0d4b365`)
- ❌ **Never commit `backend/.env`, `.vercel/`, or `node_modules/`** (covered by .gitignore)
- ❌ **Never push without `cd frontend && npm run build`** completing cleanly
- ✅ Always preserve component file paths (Vercel + Vite cache them)
- ✅ Always update both light AND dark mode classes when touching colors

---

## 🕒 Recent commit history (most recent first)

```
a1459cc  Redesign in Claude editorial style — cream + coral, serif headlines
0d4b365  Fix dark mode card backgrounds for readability
ba9dce4  Redesign portfolio with 3D Claude-inspired aesthetic   (← superseded)
f9a735c  Fix LinkedIn URL in Contact and Footer
83eb12d  Add .vercelignore to hide backend from Vercel detection
6343fd3  Fix vercel.json: remove experimentalServices, add framework vite
```

Current production = `a1459cc`.

---

## 📋 Section content snapshot (so a fresh Claude knows what's where)

| Section id | Headline | Notes |
|---|---|---|
| `#home` | "Writing that thinks, *research that listens.*" | Portrait + 3 metric strip + CTAs |
| `#about` | "A writer at the intersection of *research*, education, and machines that think." | Drop-cap bio + 4 stat cards |
| `#skills` | "Three crafts, one *throughline*…" | 3 categories × 4 skills each |
| `#ai` | "Working *alongside* the new tools, not behind them." | Capability list + Tools-in-rotation card |
| `#projects` | "Projects, briefly *told.*" | 1 featured + 4 grid cards |
| (no id) Achievements | "A short *timeline* of where the work has gone." | Vertical hairline timeline |
| (no id) Testimonials | "What people *tend to say.*" | 2 pull-quote cards |
| `#contact` | "Have a project, a question, or a quiet *hello?*" | Info card + form (POST `/contact`) |

---

## 🤝 Madika's facts (for content — don't change without checking)

- Content Writer at **CollegeDunia**
- MBA Candidate — Finance & Human Resources
- Formerly BDE at **Lawgical India**
- Email: madikajain24@gmail.com
- Phone: +91 7668752751
- LinkedIn: https://www.linkedin.com/in/madika-jain-439335229/
- Location: Gurgaon, Haryana, India

---

## 🎯 Workflow for the next Claude session

1. **Read this file first.** Don't re-explore unless asked.
2. `cd /Users/dell/Desktop/madika-portfolio` (or wherever the user cloned it).
3. For UI changes: edit files under `frontend/src/`, run `cd frontend && npm run build` to verify.
4. For deploys: `git add <files> && git commit && git push origin main`. Vercel auto-builds.
5. If the user says "redesign" → **stay in the Claude editorial language** (cream/coral/Fraunces).
   Do NOT reintroduce the violet/rose gradient era — that was rolled back.
6. If the user mentions readability bugs in dark mode → first check if any new card uses
   the legacy `:not(.dark)` pattern. The fix is always: light style as default + explicit `.dark .x` override.
