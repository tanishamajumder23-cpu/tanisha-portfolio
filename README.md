# Tanisha Majumder — Portfolio

A dark, moody, minimal single-page portfolio built with **React + Vite**,
**Tailwind CSS**, and **Framer Motion**. Fully responsive, static frontend —
no backend or database.

## ✏️ Editing content

All content lives in one file:

```
src/data/content.js
```

Update your bio, projects, skills, links, and highlights there — no need to
touch any component. Notes:

- **Projects** — set `github: null` for team projects with no public repo; the
  GitHub button hides automatically. Set a URL to show it.
- **Technologies** — each entry's `key` maps to a colored logo in
  `src/components/TechIcon.jsx`. Add a new `key` there to add a new logo.
- **Resume** — drop a PDF at `public/resume.pdf`. The Resume button appears
  automatically when the file exists and hides when it's absent.

## 🚀 Run locally

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## ▲ Deploy to Vercel

**Option A — Dashboard (easiest)**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Confirm the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # follow prompts (first deploy / preview)
vercel --prod   # promote to production
```

That's it — the site is static, so no environment variables are required.

## 🎨 Design notes

- Near-black navy/charcoal background with slow-drifting purple/magenta glow
  orbs and a subtle grain overlay.
- Purple is the single accent color; big, thin typography for headings.
- Motion respects `prefers-reduced-motion` and animates only transform/opacity
  for performance.

## 🗂 Structure

```
src/
  data/content.js        ← edit everything here
  lib/motion.js          ← shared animation variants
  hooks/useResume.js     ← auto-detects public/resume.pdf
  components/            ← Nav, Hero, About, Technologies, Projects, Connect, ...
  App.jsx
  main.jsx
  index.css
```
