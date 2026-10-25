# apoorvasahay

Source for my tech blog, built with [Astro](https://astro.build) from the official blog starter template.

## Requirements

- Node.js 22.23.4 or newer (check with `node -v`)
- npm (comes with Node)

## Run the site locally

1. Install dependencies (first time, and after changes to `package.json`):

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open http://localhost:4321 in your browser. The page reloads automatically when you edit files in `src/`.

4. Stop the server when you're done:

   ```sh
   npx astro dev stop
   ```

   Check whether it is still running with `npx astro dev status`.

## Other commands

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally to check the production build |

## Writing a post

Add a Markdown file to `src/content/blog/`, starting with this frontmatter:

```md
---
title: 'Post title'
description: 'One-sentence summary used in lists and search previews.'
pubDate: 2026-10-24
draft: true
---
```

Posts with `draft: true` show in `npm run dev` only and are left out of the built site. Remove the line (or set it to `false`) when a post is ready.

## Project layout

- `src/pages/`: one file per route (`index.astro` is the home page, `blog/` the blog)
- `src/content/blog/`: posts, one Markdown file each
- `src/components/`: header, footer and the shared `<head>`
- `src/layouts/BlogPost.astro`: post page layout
- `src/styles/global.css`: global styles
- `src/consts.ts`: site title and description
- `public/`: static files copied as-is (`robots.txt`)
