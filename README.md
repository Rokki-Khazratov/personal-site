# Personal Site

Minimal portfolio site built with React and Vite.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Content

Editable data is split by future admin ownership:

- `db/siteSettings.js` contains the constants table for profile text, contact links, GitHub, LinkedIn, and Spotify.
- `db/projects.js` contains project records and ordered content blocks: text, gallery, video, and PDF.
- `data.js` still contains experience and stack entries.

The project detail page renders `contentBlocks` in order, so an admin can later create, reorder, or remove blocks without changing React components.
