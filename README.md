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

## Admin Panel

Open the local admin panel at:

```text
/#admin
```

The panel edits two datasets:

- Site constants: bio, GitHub, LinkedIn, Spotify, contacts, and profile fields.
- Projects: card fields, stack, highlights, and ordered content blocks.

Changes are saved to browser `localStorage`, so they update the site immediately in the same browser after pressing `Save changes`. Use `Export JSON` to copy the current database state and `Import JSON` to restore or move it.

For a production backend, keep the JSON shape from `db/adminStore.js`: `{ constants, projects }`. Replace the `loadAdminData` and `saveAdminData` functions with API calls, and the React components can stay the same.
