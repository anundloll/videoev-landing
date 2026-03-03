# VideoEV Landing — CLAUDE.md

## Stack
Next.js 16 App Router · Tailwind v4 · TypeScript · Vercel native (no static export)

## Dev
- Preview: `preview_start("videoev-landing")` → port 3002
- Build: `npm run build` (output goes to `.next/`, not `out/`)
- Deploy: `git push` → Vercel auto-deploys from `main` (~1 min)
- **`output: 'export'` and `images: { unoptimized: true }` have been removed** — Vercel handles Next.js natively

## Architecture
- `src/app/page.tsx` — server component (keeps `export const metadata`); imports all section components
- `src/components/ContactModal.tsx` — global modal, listens for `videoev:openModal` custom event
- `src/lib/openModal.ts` — `openModal('advertiser' | 'partner')` dispatches the event
- Components with interactivity: Nav, Hero, DualCTA all have `'use client'`

## Form Backend
- Google Apps Script endpoint stored in `ContactModal.tsx` as `SCRIPT_URL` constant
- Sheet: `1SU_TOxXrMremoP-cx7-wjLSRjUpotI6ixorctD432Sg` (tabs: Advertisers, Partners)
- Fetch uses `mode: 'no-cors'` — response is opaque, assume success after submit

## Design Tokens
- `--bg: #050505` · `--accent: #EAB308` · `--surface: #0f0f0f`
- All CSS vars in `src/app/globals.css`
- Headings: `letter-spacing: -0.02em` globally · Body text: `font-weight: 300`
- `.eyebrow` class for section labels (not `.section-label` pill — that's wallpaper)

## Gotchas
- `preview_screenshot` only captures scroll=0 — use `preview_snapshot` + `getBoundingClientRect` evals for other positions
- Emoji icons undermine premium feel; use numbered labels (01–04) or accent bars
- Every section same `py-28` = no rhythm decision; content sections use `py-24`
