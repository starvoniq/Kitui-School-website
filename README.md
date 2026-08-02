# Kitui High School — Website Skeleton

A React + Vite skeleton for the Kitui High School website, scaffolded from the
project mockups (Home, About, Gallery, 3D Tour, Contact). Built to be cloned
and extended collaboratively.

## Stack

- **React 18** + **Vite** — fast dev server & build
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling, themed with the school's navy/gold palette
- **lucide-react** — icon set used throughout the mockups

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

The dev server runs at `http://localhost:5173` by default.

## Project structure

```
kitui-high-school/
├── public/                # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/             # Images, illustrations imported into components
│   ├── components/         # Shared/reusable UI pieces
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx     # Dark hero banner used on inner pages
│   │   └── CtaBanner.jsx    # "Book a visit / Apply now" banner used across pages
│   ├── pages/               # One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx    # placeholder — mockup not yet provided
│   │   ├── Management.jsx   # placeholder — mockup not yet provided
│   │   ├── Gallery.jsx
│   │   ├── Tour3D.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx              # Route definitions
│   ├── main.jsx             # App entry point
│   └── index.css            # Tailwind directives + base/component styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Theming

Brand colors and fonts live in `tailwind.config.js`:

- `navy` / `navy-light` / `navy-dark` — primary brand color
- `gold` / `gold-light` / `gold-dark` — accent color
- `font-serif` (Playfair Display) — headings
- `font-sans` (Inter) — body text

Shared utility classes (`.btn-primary`, `.btn-outline`, `.section-eyebrow`,
`.container-page`) are defined in `src/index.css` under `@layer components`.

## What's implemented vs. placeholder

- **Home, About, Gallery, 3D Tour, Contact** — structured and styled to match
  the provided mockups. Images are placeholder blocks — drop real photos into
  `src/assets` and swap in `<img>` tags where you see "Photo placeholder".
- **Academics, Management** — routes exist and are linked from the navbar, but
  the pages are stubs since no mockup was provided yet. Replace once designs
  land.
- **Contact form** — client-side state only; `handleSubmit` just logs to the
  console. Wire it up to your backend/email service of choice.
- **3D Tour viewer** — placeholder box; swap in a real 360° viewer (e.g.
  Pannellum, Three.js, or a third-party embed) where indicated.

## Suggested workflow for collaborators

1. Clone the repo, run `npm install`.
2. Create a branch per page/feature (`feature/academics-page`, etc.).
3. Keep shared UI (nav, footer, buttons) in `src/components` so styling stays
   consistent across pages.
4. Open a PR against `main` for review before merging.
