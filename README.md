# chiaroscuro-ui

Light/Dark Harmony for Modern Web Apps.

Chiaroscuro UI is now a lightweight starter for a design-system playground: a zero-build, zero-runtime CSS foundation with a small interactive demo you can open directly in the browser or serve locally.

## What is included

- **Three atmospheric themes**: `tenebrism`, `sfumato`, and `umbra`.
- **Light and dark mode support** using semantic design tokens.
- **Starter primitives** for surfaces, cards, buttons, pills, form fields, and status meters.
- **A token preview panel** that reads CSS custom properties live from the page.
- **No framework requirement** so the design language can be ported into React, Vue, Angular, Svelte, or Web Components later.

## Project structure

```text
.
├── index.html            # Demo page / playground
├── package.json          # Small helper scripts
└── src
    ├── chiaroscuro.css   # Theme tokens and component primitives
    └── playground.js     # Theme + mode interactions and token swatches
```

## Getting started

### Option 1: open it directly

Open `index.html` in a browser to inspect the starter system.

### Option 2: serve locally

```bash
npm run start
```

This starts a static server on <http://localhost:4173> using Python's built-in HTTP server.

## Available scripts

- `npm run start` — serves the demo locally.
- `npm run check` — syntax-checks `src/playground.js` with Node.

## Next ideas

- Split the CSS primitives into a distributable `core.css` package.
- Add framework adapters and examples.
- Add documentation pages for tokens, components, and accessibility guidance.
- Introduce visual regression snapshots once a proper app shell is in place.
