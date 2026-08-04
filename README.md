# Portfolio — Abdul Mannan

Backend & AI engineer portfolio. Next.js (App Router) + TypeScript + Tailwind.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

## How to edit content (you rarely touch layout)

| What                          | File                        |
| ----------------------------- | --------------------------- |
| Name, role, about, skills, links | `content/site.ts`        |
| Projects + case studies       | `content/projects.ts`       |
| Colors / theme                | `app/globals.css` (tokens at top) |

Each project in `content/projects.ts` has `TODO:` placeholders. Replace them with
your real details — outcome, problem, decisions, the hard problem, metrics, links.
Anything left as a TODO still renders, so you can launch and refine.

### Add your resume
Drop the PDF at `public/resume.pdf` — the Resume buttons already point there.

### Add an architecture diagram (optional but high-impact)
Put an image at `public/architecture/<name>.png` and set
`architectureImage: "/architecture/<name>.png"` on that project. Otherwise the
`architectureText` field renders as a text diagram.

## Deploy (free) on Vercel

1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo → Deploy. No config needed.
3. Every push to the main branch auto-deploys.

## Structure

```
content/       ← all your data (edit this)
components/    ← Nav, Footer, ProjectCard
app/           ← pages: / (home) and /projects/[slug] (case studies)
```
