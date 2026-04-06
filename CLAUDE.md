@AGENTS.md

# Virkavastuu.fi — Project Playbook

## What this is
Finnish civil servant accountability platform. Next.js 16 App Router + next-intl (fi/en) + Supabase with seed-data fallback. Tracks elected council members (kunnanvaltuusto) and appointed officials (viranhaltijat) across Finnish municipalities, with double-role detection and political background tracking.

## Git & Deployment

### Remotes
- `origin` = `kimmo-hub/aari-worldwide` (development repo)
- `aari` = `aariofficial/virkavastuu.fi` (production repo, connected to Vercel)

### Deploy to Vercel
Vercel auto-deploys when `main` is pushed to the `aari` remote. The deploy command for the user's local terminal is:
```
cd ~/Desktop/aari-worldwide && git pull origin main && git push aari main --force
```
**This environment cannot reach vercel.com directly.** Do NOT try `vercel login` or `vercel --prod` — they will fail. Instead, merge to main, push to origin, and give the user the one-liner above.

### Branch workflow
1. Develop on feature branch (e.g., `claude/virkavastuu-initial-setup-z7vqx`)
2. When ready to deploy: `git checkout main && git merge <branch> --no-edit && git push origin main`
3. Give user the deploy one-liner above

## Key Files
- `src/lib/municipality-data.ts` — All official/council member seed data (massive file)
- `src/components/MunicipalView.tsx` — Main UI with double-role detection + political badges
- `src/types/database.ts` — Official, Affiliation, OfficialProfile types
- `src/lib/seed-data.ts` — State-level officials

## Data Model
- `OfficialRoleType = "staff" | "council"` — distinguishes appointed vs elected
- `party` field on council members
- `political_background_fi/en` on staff officials — their political "tail"
- Double-role detection: matching first_name + last_name across staff/council in same municipality

## Current State (April 2026)
- **Region: Kainuu** — all 8 municipalities complete
- Kajaani 51/51, Suomussalmi 27/27, Sotkamo 27/27, Kuhmo 27/27, Paltamo 21/21, Hyrynsalmi 19/19, Puolanka 17/17, Ristijärvi 15/15
- 204 council members + 97 staff = 301 officials total
- 11 of 27 staff have identified political backgrounds (9 KESK, 1 KOK, 2 VAS)
