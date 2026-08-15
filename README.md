# 🏫 Kitui High School Website

A modern digital platform built to present **Kitui High School's** identity, academics, leadership, and campus life to students, parents, staff, alumni, and visitors — replacing a static institutional presence with a fast, responsive, and visually distinct web experience.

> **Learn To Serve**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=1e2327)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&labelColor=1e2327)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white&labelColor=1e2327)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&labelColor=1e2327)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white&labelColor=1e2327)
![Three.js](https://img.shields.io/badge/Three.js-r185-000000?logo=three.js&logoColor=white&labelColor=1e2327)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&labelColor=1e2327)

---

## 🌐 Live Demo

**Website:** [kitui-school-website.vercel.app](https://kitui-school-website.vercel.app/)

The project is deployed and publicly accessible online via Vercel.

**[🚀 Visit Live Website](https://kitui-school-website.vercel.app/)**

---

## ✨ Features

- 🏠 **Modern homepage** — Introduces the school with a hero section and clear entry points into the rest of the site.
- 🏫 **About page** — Presents the school's background and institutional identity.
- 🖼️ **Gallery** — A dedicated visual showcase of campus life and school activities.
- 🧭 **3D Tour page** — A route dedicated to an interactive campus tour experience, currently scaffolded with a placeholder viewer ready to be swapped for a real 360° integration.
- 📞 **Contact page** — Gives visitors a way to reach the school, with a client-side contact form ready to be connected to a backend or email service.
- 🧭 **Responsive navigation & footer** — Shared `Navbar` and `Footer` components keep navigation and branding consistent across every page.
- 📄 **Reusable page components** — A `PageHero` banner and `CtaBanner` ("Book a visit / Apply now") are shared across inner pages for a consistent visual language.
- 📱 **Mobile-responsive layout** — Built with Tailwind's utility-first system so the interface adapts across screen sizes.
- ⚡ **Fast, optimized frontend** — Powered by Vite for near-instant dev server startup and an optimized production build.
- 🔗 **Client-side routing** — React Router v6 handles navigation between Home, About, Academics, Management, Gallery, 3D Tour, Contact, and a custom Not Found page.

---

## 🎨 Color Palette

The website is themed around a **navy and gold** color system — a combination chosen to reflect a serious, academic, and institutional identity befitting a national boys' boarding school. These are defined as custom Tailwind tokens in `tailwind.config.js` rather than hardcoded hex values, allowing the palette to be applied consistently across every component:

| Token | Role | Usage |
|---|---|---|
| `navy` / `navy-light` / `navy-dark` | Primary brand color | Navigation, hero sections, major structural elements, and branding |
| `gold` / `gold-light` / `gold-dark` | Accent color | Buttons, highlights, and call-to-action elements |
| White | Base/contrast | Backgrounds and content areas for readability |

Pairing a deep navy with a warm gold accent reinforces a traditional, trustworthy academic identity while keeping the interface legible and giving key actions (like calls-to-action) strong visual contrast.

Typography reinforces the same identity: **Playfair Display** (`font-serif`) is used for headings to give the site an editorial, institutional tone, while **Inter** (`font-sans`) is used for body text to keep content clean and highly readable.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ **React 18** | Core UI library for building components |
| ⚡ **Vite 5** | Development server and production build tooling |
| 🧭 **React Router v6** | Client-side routing between pages |
| 🎨 **Tailwind CSS 3** | Utility-first, theme-driven styling |
| 🎞️ **Framer Motion** | Animation and interaction design |
| 🧊 **Three.js** + **@react-three/fiber** + **@react-three/drei** | 3D rendering foundation for the campus tour experience |
| 🎛️ **leva** | Lightweight controls panel used alongside the 3D tooling |
| 🖼️ **lucide-react** | Icon set used throughout the interface |
| 🟨 **JavaScript (ESM)** | Application logic |
| 🌐 **HTML5 / CSS3** | Markup and base styling, orchestrated through PostCSS + Autoprefixer |
| 🧹 **ESLint** | Code quality and consistency across the codebase |
| ▲ **Vercel** | Hosting and deployment |

---

## 📂 Project Structure

```text
kitui-high-school/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/              # Images and illustrations imported into components
│   ├── components/          # Shared/reusable UI pieces
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx      # Dark hero banner used on inner pages
│   │   └── CtaBanner.jsx     # "Book a visit / Apply now" banner used across pages
│   ├── pages/                # One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx      # placeholder: mockup not yet provided
│   │   ├── Management.jsx     # placeholder: mockup not yet provided
│   │   ├── Gallery.jsx
│   │   ├── Tour3D.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx               # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css               # Tailwind directives + base/component styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

- **`components/`** — Shared UI used across multiple pages (navigation, footer, hero banner, CTA banner), keeping styling and structure consistent site-wide.
- **`pages/`** — One component per route, each corresponding to a section of the school website.
- **`assets/`** — Images and illustrations consumed directly by components.
- **`public/`** — Static files served as-is, such as the favicon.

---

## 🚀 Getting Started

Clone the repository and get a local development environment running:

```bash
git clone https://github.com/starvoniq/Kitui-School-website.git
cd Kitui-School-website
npm install
npm run dev
```

- `git clone` — downloads the repository to your machine
- `cd` — enters the project directory
- `npm install` — installs all dependencies
- `npm run dev` — starts the Vite development server (defaults to `http://localhost:5173`)

To create a production build:

```bash
npm run build
```

To preview that production build locally:

```bash
npm run preview
```

---

## 💻 Development Workflow

Contributors work on isolated feature branches to keep `main` stable:

```bash
git checkout -b feature/your-feature
```

Make your changes, test them locally, then commit and push:

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

Open a Pull Request against `main` for review before merging. This keeps shared UI (navigation, footer, buttons) consistent and prevents multiple contributors from stepping on each other's work.

---

## 🌍 Deployment

The website is deployed and hosted on **Vercel**:

**Live Website:** [kitui-school-website.vercel.app](https://kitui-school-website.vercel.app/)

A `vercel.json` configuration is included in the repository to support the deployment setup.

---

## 📱 Responsive Design

The interface is built with Tailwind CSS's responsive utilities, allowing layouts to adapt across:

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📟 Tablet

This ensures a consistent, usable experience for prospective students, parents, and staff regardless of the device they're browsing from.

---

## 🎨 Design Philosophy

The site is built around a few core principles:

- **Institutional identity first** — Navy and gold, paired with serif headings, ground the site in a traditional academic tone appropriate for a national school.
- **Clear information hierarchy** — Dedicated routes for About, Academics, Management, Gallery, and Contact keep information easy to locate.
- **Consistent shared UI** — A common `Navbar`, `Footer`, `PageHero`, and `CtaBanner` are reused across pages rather than rebuilt per-page.
- **Responsive by default** — Tailwind's utility classes are used throughout to ensure the layout holds up across screen sizes.
- **Room to grow** — The `Academics` and `Management` pages exist as routed stubs, structured so they can be filled in as designs are finalized, without disrupting the rest of the site.

---

## 📸 Screenshots

> Screenshots are not yet included in the repository. The paths below are placeholders — replace them with real captures once available.

```markdown
## 📸 Screenshots

### 🏠 Homepage
![Homepage](screenshots/homepage.png)

### 🏫 About
![About](screenshots/about.png)

### 🖼️ Gallery
![Gallery](screenshots/gallery.png)

### 📱 Mobile View
![Mobile](screenshots/mobile.png)
```

---

## 🤝 Team Collaboration

This project follows a collaborative software development workflow built around:

- Git & GitHub for version control
- Feature branches for isolated development
- Pull Requests for review before merging
- Shared components to keep the codebase consistent as more contributors join

Working through branches and PRs allows multiple developers to build out different pages and features — such as the pending Academics and Management pages — without conflicting with one another's work.

---

## 🔮 Future Improvements

The following are **proposed directions**, not existing functionality:

- 📚 Completed **Academics** page with curriculum and subject details
- 👨‍🏫 Completed **Management** page profiling school leadership
- 🧭 A fully integrated 360° **3D campus tour** (e.g. via Pannellum or a custom Three.js scene) in place of the current placeholder
- 📬 A backend-connected **contact form** (the form currently only logs submissions client-side)
- 📢 Online announcements / news section
- 📅 School events calendar
- 🎓 Alumni portal
- 🔐 An administrator dashboard for content management
- 📝 Online admissions/application system

---

## 👥 Contributors

This project was developed collaboratively by the project team.

Contributions are welcome through feature branches and Pull Requests.

---

## 📄 License

This project currently does not include a formal open-source license. Licensing terms can be added by the project maintainers.

---

## ⭐ Built With Purpose

> **Learn To Serve**

Built with ❤️, collaboration, and technology to create a modern digital presence for the **Kitui High School** community.

**🌐 [Visit Kitui High School Website](https://kitui-school-website.vercel.app/)**
