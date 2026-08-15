# 🏫 Kitui High School Website

A modern digital platform built to give **Kitui High School** — a national boys' boarding school in Kitui County, Kenya, with roots tracing back to **1908** — a professional online presence. The site provides students, parents, staff, alumni, prospective students, and visitors with easy access to the school's heritage, KCSE academic performance, admissions information, academics, and campus life.

> **Learn To Serve**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=143D22)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&labelColor=143D22)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white&labelColor=143D22)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&labelColor=143D22)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-C19A3B?logo=framer&logoColor=white&labelColor=143D22)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&labelColor=143D22)

---

## 🌐 Live Demo

**Live Website:** [kitui-school-website.vercel.app](https://kitui-school-website.vercel.app/)

**[🚀 Visit Kitui High School Website](https://kitui-school-website.vercel.app/)**

---

## ✨ Features

- 🏠 **Home** — A cinematic hero section built around a 3D-rendered school gate, with the headline *"Building Character. Inspiring Excellence."* and copy introducing the school's **1908 heritage**, backed by "Discover Our Story" and "Explore Campus in 3D" calls to action.
- 🏫 **About** — Presents the school's background and institutional identity as a national boys' boarding school.
- 📚 **Academics** — A dropdown-driven navigation section covering the school's academic programs.
- 👔 **Leadership** — A dropdown-driven navigation section for the school's leadership structure.
- 🎓 **Student Life** — A fully designed page ("Life at Kitui School") highlighting sports, clubs, drama and music, and co-curricular activities beyond the classroom, with "Explore Sports" and "Discover Clubs" calls to action.
- 🖼️ **Gallery** — A visual showcase of campus life and school activities.
- 📞 **Contact** — Lets visitors reach the school, backed by a persistent "Contact Us" button in the navigation bar.
- 🔍 **Site search** — A search icon in the navigation bar for locating content across the site.
- 🧭 **Responsive navigation** — A sticky top navbar with dropdown menus for Academics and Leadership, active-state underlines, and a branded "Contact Us" button.
- 📱 **Mobile-responsive layouts** — Built entirely with Tailwind CSS's utility system so pages adapt cleanly across screen sizes.
- ⚡ **Fast frontend experience** — Powered by Vite for near-instant local development and an optimized production build.
- 🔗 **Client-side routing** — React Router v6 manages navigation across Home, About, Academics, Leadership, Student Life, Gallery, and Contact.
- 🔍 **SEO-ready metadata** — The homepage ships with a complete meta tag set (title, description, Open Graph, Twitter Card, geo tags, theme color) targeting the school's identity, heritage, and location — `Kitui High School | National Boys' Boarding School, Kitui`, geo-tagged to Kitui, Kenya.

---

## 🎨 Brand Colors

The website's visual identity is built around a deliberate combination of institutional and academic tones:

| Color | HEX | Role |
|---|---|---|
| 🌲 Forest Green | `#143D22` | Primary brand/background color — navigation, headers, major interface areas |
| 🥇 Gold | `#C19A3B` | Buttons, highlights, active navigation states, calls-to-action |
| 🖤 Black | `#000000` | Supporting contrast for strong typography and visual emphasis |
| ⚪ White | `#FFFFFF` | Typography, clean backgrounds, and contrast against darker sections |
| 🌿 Green Accent | `#8DCD38` | Secondary green accent, reflected in the school's crest and branding |

> The combination of forest green, gold, black, and white creates a visual identity that balances Kitui High School's traditional institutional character with a modern digital experience.

- **Forest Green** → growth, stability, tradition, excellence, and school identity
- **Gold** → achievement, excellence, prestige, and leadership
- **Black** → strength, contrast, and visual emphasis
- **White** → clarity, simplicity, and readability
- **Green Accent** → connection to the school's crest and visual identity

The overall visual style is **traditional, prestigious, academic, modern, and welcoming.**

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| ⚛️ **React 18** | Core UI library for building components |
| ⚡ **Vite 5** | Development server and production build tooling |
| 🧭 **React Router v6** | Client-side routing between pages |
| 🎨 **Tailwind CSS 3** | Utility-first, theme-driven styling |
| 🎞️ **Framer Motion** | Animation and interaction design |
| 🧊 **Three.js** + **@react-three/fiber** + **@react-three/drei** | Powers the 3D-rendered school gate featured in the homepage hero |
| 🎛️ **leva** | Lightweight controls panel used alongside the 3D tooling |
| 🖼️ **lucide-react** | Icon set used throughout the interface |
| 🟨 **JavaScript (ESM)** | Application logic |
| 🌐 **HTML5 / CSS3** | Markup and base styling, processed through PostCSS + Autoprefixer |
| 🧹 **ESLint** | Code quality and consistency across the codebase |
| ▲ **Vercel** | Hosting and deployment |

---

## 📂 Project Structure

```text
kitui-high-school/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/              # Images and illustrations imported into components
│   ├── components/          # Shared/reusable UI pieces (navigation, hero sections, buttons)
│   ├── pages/                # One file per route
│   │   ├── Home.jsx           # Hero with 3D-rendered gate, "Discover Our Story" / "Explore Campus in 3D"
│   │   ├── About.jsx
│   │   ├── Academics.jsx      # Dropdown-linked academics section
│   │   ├── Leadership.jsx     # Dropdown-linked leadership section
│   │   ├── StudentLife.jsx    # "Life at Kitui School" — sports, clubs, co-curricular activities
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx               # Route definitions
│   ├── main.jsx                # App entry point
│   └── index.css                # Tailwind directives + base/component styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

- **`components/`** — Shared UI used across multiple pages (navigation bar with dropdowns, hero sections), keeping styling and structure consistent site-wide.
- **`pages/`** — One component per route, each corresponding to a section of the school website.
- **`assets/`** — Images and illustrations consumed directly by components.
- **`public/`** — Static files served as-is, such as the favicon.

> Note: exact file names are inferred from the live site's navigation and rendered pages; refer to the repository's `src/` directory for the authoritative file layout.

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

Open a Pull Request against `main` for review before merging. This workflow — feature branches, Pull Requests, code reviews, and merging — allows multiple developers to build out different pages and features without conflicting with one another's work.

---

## 🌍 Deployment

The website is deployed and hosted on **Vercel**.

**[🌐 Live Website](https://kitui-school-website.vercel.app/)**

A `vercel.json` configuration file is included in the repository to support the deployment setup.

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

- **Strong institutional identity** — The dark green navigation, paired with gold interactive elements and white typography, creates a distinctive, prestigious institutional appearance appropriate for a national school.
- **Cinematic storytelling on the homepage** — A 3D-rendered gate anchors the hero section, immediately establishing a sense of place before visitors scroll further.
- **Clear information hierarchy** — Dedicated navigation for About, Academics, Leadership, Student Life, Gallery, and Contact keeps information easy to locate, with dropdown menus grouping related content under Academics and Leadership.
- **Consistent shared UI** — A common navigation bar and hero banner styling are reused across pages for a cohesive experience.
- **Responsive by default** — Tailwind's utility classes are used throughout to ensure the layout holds up across screen sizes.
- **Accessible, readable typography** — White and gold text against the forest green base is used to maintain contrast and readability.

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
![Mobile View](screenshots/mobile.png)
```

---

## 🤝 Collaboration

This project demonstrates collaborative software development using Git and GitHub:

- Feature branches for isolated development
- Pull Requests for review before merging
- Code reviews to maintain quality and consistency
- Shared components to keep the codebase consistent as more contributors join

This workflow allows multiple developers to build out different pages and features — such as the pending Academics and Management pages — in parallel without conflicting with one another's work.

---

## 🔮 Future Improvements

The following are **proposed directions**, not currently implemented functionality:

- 📚 Completed **Academics** page with curriculum and subject details
- 👨‍🏫 Completed **Management** page profiling school leadership
- 🧭 An expanded interactive 3D campus experience beyond the homepage gate, such as a full walkthrough tour
- 📬 A backend-connected **contact form**
- 📢 Online announcements / news section
- 📅 School events calendar
- 🎓 Alumni portal
- 💳 Online fee/payment integration
- 📊 Academic results portal
- 🔐 Administrator dashboard
- 📰 Content Management System
- 📬 Newsletter system
- 📝 Online admissions/application system

---

## 👥 Contributors

This project was developed collaboratively using Git and GitHub.

Contributions can be made through feature branches and Pull Requests.

---

## 📄 License

This project currently does not include a formal open-source license. Licensing terms can be added by the project maintainers.

---

## ⭐ Built With Purpose

> **Learn To Serve**

Built with ❤️, collaboration, and technology to create a modern digital presence for the **Kitui High School community**.

**🌐 [Visit the Website](https://kitui-school-website.vercel.app/)**
