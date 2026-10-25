# Revamp plan: sahayapoorva.net becomes a tech blog

Branch: `blog-revamp` (local only until approved). Base: `master` @ `abb4dce`.

## 1. Where the site is today

- A single-page résumé built with Create React App 3.0.1 (React 16.8.6, react-spring 8). Last commit: 2019-10-12.
- Content lives in `src/data/index.js`; components in `src/components/*`; one page, no routing, no blog.
- `public/index.html` shows "You need to enable JavaScript" without JS, so the site is invisible to crawlers that do not run scripts and has no per-page titles or descriptions.
- `yarn-error.log` shows an attempt to add `@aws-amplify/cli`, so the site is probably hosted on AWS Amplify and probably deploys from `master`. This is an inference, not confirmed.
- The toolchain is five-plus years old (Node 11-era). `yarn.lock` has known-vulnerable packages.
- **Privacy issue:** `src/data/index.js` contains a phone number and a full home address, and this repo is public. The new site will not publish them. They will stay in git history unless history is rewritten (see section 9).

## 2. Goals

1. A fast, readable tech blog: DSA walkthroughs, interview prep, AI-assisted coding, system design notes.
2. Keep a home page, about page, projects page and a résumé page, reusing the existing content.
3. Writing a post = adding one Markdown file. No code changes.
4. Good on phones, dark mode, accessible, indexable by search engines, RSS feed.
5. Keep the domain `www.sahayapoorva.net` and keep the old content reachable.

## 3. Proposed stack (recommended, open to change)

| Choice | Recommendation | Why |
| --- | --- | --- |
| Framework | Astro 5 (static output) | Ships HTML, not an app. Markdown/MDX content collections. Fast by default. |
| Posts | Markdown/MDX in `src/content/blog/` with frontmatter (title, date, tags, description, draft) | Easy to write, easy to move later. |
| Code blocks | Shiki (built in), copy button | Many posts are code-heavy. |
| Interactive posts | Optional React islands, plus embeds for the stack visualizations | Reuse the existing React knowledge only where needed. |
| Styling | Plain CSS with design tokens, light and dark themes | No heavy dependency. |
| Extras | RSS, sitemap, Open Graph images, Pagefind search | Standard blog needs. |
| Hosting | Keep AWS Amplify (build `npm run build`, publish `dist`) unless you prefer Cloudflare Pages or GitHub Pages | Keeps DNS and domain as they are. |

Alternatives considered: stay on CRA (unmaintained, no static blog tooling), Next.js (more capable, more moving parts than a blog needs), Jekyll/Hugo (fine, but a different language ecosystem from the rest of your work).

## 4. Site map

- `/` home: short intro, latest posts, featured projects
- `/blog` list with tag filter, `/blog/<slug>` post, `/tags/<tag>`
- `/projects` (from the current projects data)
- `/about`
- `/resume` (the current résumé content, without phone and address)
- `/rss.xml`, `/sitemap.xml`, 404 page
- Redirect rules so old links to `/` keep working

## 5. Content migration

- Move résumé data to `src/data/resume.ts`; drop phone and address; keep experience, education, skills, projects and links.
- Re-use `public/images/profile.jpg` (optimized to modern formats and sizes).
- Replace icons8 hot-linked social icons with local SVGs.
- Seed posts, drafted from existing work: the monotonic stack guide, prefix sums and range queries, "preparing for interviews with AI". You approve topics and wording before they ship.

## 6. Design direction

- Reading-first layout, about 65 characters per line, strong type hierarchy, generous spacing.
- One restrained accent colour, both themes designed, not inverted.
- Targets: Lighthouse 95+ on performance, accessibility, SEO; keyboard navigable; respects reduced motion.
- I will propose two home-page options in the first review so you can pick a direction before the rest is built.

## 7. Phases and review checkpoints

Each phase ends with a commit on `blog-revamp` and a local review. Nothing is pushed to GitHub between phases.

1. **Scaffold** (Astro project, tooling, CI-free local build, keep CRA code in git history). Review: `npm run dev` shows an empty shell.
2. **Design system and layout** (tokens, header, footer, theme toggle, post layout). Review: style guide page.
3. **Blog engine** (content collection, list page, tags, RSS, sitemap, search). Review: with two sample posts.
4. **Migrate résumé, projects, about.** Review: compare against the current site.
5. **Seed posts and polish** (SEO tags, social images, 404, accessibility pass, performance pass).
6. **Release prep** (Amplify build settings, redirects, domain check, rollback plan).

## 8. How you review and approve

- Work happens on local branch `blog-revamp`. I do not push it, open a pull request or touch `master` until you say so.
- You review on your own computer: fetch the branch from the bundle I send (`git fetch <bundle> blog-revamp:blog-revamp`), then `git switch blog-revamp && npm install && npm run dev` and open http://localhost:4321.
- After you approve a phase, I push `blog-revamp` to GitHub (this needs push access, which I will request when we get there) and open a pull request against `master`. Merging is a separate decision, because merging to `master` is likely what deploys the live site.
- Before the first push I will check whether Amplify builds every pushed branch. If it does, a pushed branch would get its own preview URL, and you decide whether that is acceptable.

## 9. Decisions needed from you

1. **Stack:** Astro as proposed, or something else?
2. **Hosting:** keep Amplify (please confirm that is what hosts the site and what branch it deploys), or move?
3. **Personal data in git history:** the old phone and address would remain in earlier commits. Options: leave it (the data is public already), or rewrite history on a new clean repo/branch. Rewriting is disruptive, so it needs your explicit choice.
4. **Blog scope:** topics and tone (personal vs. professional), comments (none recommended), newsletter (later).
5. **Name and branding:** keep "Apoorva Sahay" with no logo, or something new?

## 10. Risks

- Domain or DNS changes during hosting changes can cause downtime. Mitigation: no DNS change until release prep, with a rollback plan.
- Old inbound links break if routes change. Mitigation: keep `/` and add redirects.
- Amplify settings live outside this repository and may need your account access to verify.
