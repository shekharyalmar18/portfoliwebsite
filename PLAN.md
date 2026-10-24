# Portfolio Website — Planning Document

> Owner: **shekharyalmar** (display name "Shekhar Yalmar" — to confirm)
> Role: **Full-Stack Developer**
> Location: **Pandharpur, India**
> Document type: Planning only — no final code yet.

Legend: **[TO ADD]** = placeholder to fill later. Empty or placeholder links should be **hidden** in the UI, not shown broken.

---

## 1. Project Overview

### Goal
Build a clean, fast, dark-themed personal portfolio that helps the owner **get a job or internship** and **showcase projects** to clients, recruiters, developers, and students.

### Target audience
| Audience | What they care about |
|---|---|
| Recruiters | Skills, projects, resume, contact — fast |
| Clients | Real work (AGS), reliability, contact |
| Developers / students | Tech stack, GitHub, project details |
| Internship reviewers | Education, leadership, certifications |

### Tone
A **mix of professional and personal**: confident and clear for recruiters, but warm, human, and a little creative for everyone else. Simple language, no buzzword walls.

### Success criteria
- A recruiter can find **Projects**, **Skills**, and **Contact** within **10 seconds**.
- Resume PDF is **one click** from the top of the page.
- Site loads in **under 2 seconds** on a normal connection.
- Works well on phone, tablet, and desktop.
- Content can be updated by editing **one data file**, without touching layout code.
- No broken links: placeholders are hidden automatically.

---

## 2. Site Structure

### Recommendation: **Single-page site**
Reasons:
1. Content is small (3 projects, one set of skills, a few certificates).
2. Recruiters can scroll and see everything quickly — no extra clicks.
3. It is simpler to build, host, and maintain — good for a first portfolio.
4. Smooth-scroll navigation feels modern and matches the creative tone.

> If the owner later wants a blog or long case studies, move those to separate pages in **v2**. The single page can stay as the landing page.

### Sitemap (top to bottom)
| # | Section | Anchor | Purpose |
|---|---|---|---|
| 1 | Hero | `#home` | Name, title, rotating taglines, photo, CTA buttons |
| 2 | About | `#about` | Short intro, education, interests, leadership |
| 3 | Skills | `#skills` | Languages, frameworks, tools, soft skills |
| 4 | Projects | `#projects` | AGS, CollegeGuide, Blockchain system |
| 5 | Certifications & Hackathons | `#certifications` | Hackathon + course certificates |
| 6 | Coding Profiles | `#profiles` | LeetCode, Codeforces (+ GitHub) |
| 7 | Contact | `#contact` | Email, social links, resume |
| 8 | Footer | — | Copyright, quick links, back-to-top |

### Content per section (from `info.md`)

**1. Hero**
- Name: shekharyalmar (display "Shekhar Yalmar" — unconfirmed)
- Title: Full-Stack Developer
- Rotating taglines (all three):
  1. "I build complete web apps, from database to UI."
  2. "Frontend, backend, and everything in between."
  3. "Turning ideas into full-stack products."
- Location: Pandharpur, India
- Profile photo: **[TO ADD]**
- Buttons: **View Projects** (scroll), **Download Resume** **[TO ADD PDF]**

**2. About**
- Student, B.Tech 3rd year, Karmayogi Institute of Technology
- Expected graduation: 2028
- Interests: Web development, AI/ML, data science
- Highlight skills and leadership (team leader on CollegeGuide)
- Paragraph: **[TO POLISH]** — draft from skills, keep to 3–5 sentences.

**3. Skills**
- Programming languages: Python (intermediate), Java (intermediate)
- Frameworks/libraries — Backend: Django, FastAPI, Spring Boot; Frontend: React; Data/ML: Pandas, Scikit-learn
- Tools: HTML/CSS, JavaScript; SQL, MySQL, PostgreSQL, MongoDB; Git/GitHub, Docker, Linux, AWS; Postman, VS Code, Figma
- Soft skills (priority order): Leadership, Teamwork, Communication, Problem-solving, Time management, Adaptability

**4. Projects** (order: AGS → CollegeGuide → Blockchain)
| Project | Description | Tech | Type | GitHub | Live demo |
|---|---|---|---|---|---|
| **AGS** | ERP software for a real client's store; inventory, billing, employees, sales. Live client project. | Django, React, SQLite | Solo | **[TO ADD]** (may be private) | **[TO ADD]** |
| **CollegeGuide** | College info for admissions + digital college reviews. | React, Django, MySQL | Team of 4 — **owner was team leader** | https://github.com/shekharyalmar18/maharashtra-colleges | **[TO ADD]** |
| **Blockchain Report Management System** | Stores medical reports as soft copies in a decentralized, secure way. | Web3.js, React, MetaMask (+ other libraries) | Solo | **[TO ADD]** | **[TO ADD]** |

> Project 4: skipped for now — can be added later. Do **not** invent highlights, metrics, or numbers.
> For private/missing repos: hide the "Code" button and show a small **"Private / Client project"** badge instead.

**5. Certifications & Hackathons**
- Hackathons/events: about 5 certificates — **[TO ADD names, years, results]**
- Online course certifications: several — **[TO ADD names and platforms]**
- Until added, show a friendly placeholder card: "Certificates coming soon."

**6. Coding Profiles**
- LeetCode: **[TO ADD link or username]**
- Codeforces: **[TO ADD link or username]**
- GitHub (available): https://github.com/shekharyalmar18
- Hide any profile whose link is empty.

**7. Contact**
- Email: yalmarshekhar9@gmail.com
- GitHub: https://github.com/shekharyalmar18
- LinkedIn: **[TO ADD]**
- X (Twitter): **[TO ADD]**
- Instagram: **[TO ADD]**
- Resume download: **[TO ADD PDF]**
- Contact form: **not decided** — see Feature Checklist (v2).

**8. Footer**
- © 2026 shekharyalmar
- Quick links to sections
- Social icons (only the ones with real links)
- "Back to top" button

---

## 3. Design Plan

### Theme
Dark theme throughout. Soft dark backgrounds (not pure black) with one strong accent and one supporting accent. Keep large areas calm so projects and text stay readable.

### Accent color palettes (pick one)
| Option | Background | Surface | Primary accent | Secondary accent | Text | Muted text | Feel |
|---|---|---|---|---|---|---|---|
| **A — Electric Indigo** ⭐ | `#0B0F19` | `#111827` | `#6366F1` | `#22D3EE` | `#E5E7EB` | `#94A3B8` | Modern, techy, trustworthy |
| B — Emerald Terminal | `#0A0F0D` | `#111C17` | `#10B981` | `#34D399` | `#E6F1EC` | `#94A3B8` | Fresh, developer-focused |
| C — Sunset Coral | `#0F0B0A` | `#1A1210` | `#F97316` | `#F43F5E` | `#F5E9E4` | `#A8A29E` | Creative, warm, bold |

**Recommendation: Option A (Electric Indigo).** Indigo reads professional, cyan adds a creative spark, and both have strong contrast on dark. It suits a full-stack developer and is easy to extend.

Extra tokens: success `#22C55E`, border `#1F2937`, focus ring `#22D3EE`.

### Typography
| Use | Font | Size | Weight | Line height |
|---|---|---|---|---|
| Headings (h1) | **Space Grotesk** | `clamp(2.5rem, 6vw, 4rem)` | 700 | 1.1 |
| Section titles (h2) | Space Grotesk | `clamp(1.75rem, 4vw, 2.25rem)` | 700 | 1.2 |
| Card titles (h3) | Space Grotesk | `1.25rem` | 600 | 1.3 |
| Body | **Inter** | `1rem` (16px) | 400 | 1.6 |
| Small / labels | Inter | `0.875rem` (14px) | 500 | 1.5 |
| Nav links | Inter | `0.9375rem` | 500 | 1.2 |

- Pairing reason: Space Grotesk gives a distinctive, slightly creative heading style; Inter is highly readable for body text.
- Load from Google Fonts with `display=swap`; fall back to `system-ui, sans-serif`.
- Keep to **two font families** for speed.

### Layout, spacing, components
- **Container:** max-width `1120px`, horizontal padding `24px` mobile / `32px` desktop.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- **Section padding:** `64px` top/bottom mobile, `96px` desktop.
- **Grid:** Projects 1 column (phone) → 2 (tablet) → 3 (desktop). Skills grouped in a responsive 2–3 column grid.
- **Cards:** surface color, `1px` border `#1F2937`, radius `16px`, padding `24px`, soft shadow, hover lift + accent border.
- **Buttons:**
  - Primary: accent fill, dark text (`#0B0F19`), radius `10px`, padding `12px 20px`, hover brighten + slight lift.
  - Secondary/ghost: transparent with border, hover accent border and text.
- **Badges:** small pill, `12px` text, subtle accent background at ~15% opacity, radius `999px`. Used for tech stack + "Team Leader" / "Live client project".
- **Section heading:** small accent eyebrow label + large title + short one-line description.
- **Photo:** rounded `16px`, subtle accent ring; placeholder silhouette until real photo is added.

### Animations & micro-interactions (light and fast)
- **Rotating taglines** in hero: fade/slide every ~4 seconds (JS timer or CSS steps), pause on hover.
- **Scroll reveals:** sections fade + rise ~16px once when entering view (IntersectionObserver). No heavy animation libraries.
- **Hover:** cards lift 4px and border glows; buttons brighten; social icons scale slightly.
- **Nav:** active-section highlight while scrolling; smooth scroll on click.
- **Hero:** one slow, blurred gradient blob in the background (CSS only).
- **Accessibility:** respect `prefers-reduced-motion` — disable rotation and reveals, show static tagline.
- **Budget:** avoid parallax, heavy particles, or large JS libs.

### Responsive behavior (mobile-first)
| Device | Width | Behavior |
|---|---|---|
| Phone | < 640px | Single column; hamburger menu; stacked hero (photo below text); 1-column projects; large tap targets (≥44px) |
| Tablet | 640–1024px | 2-column projects; expanded nav if it fits; images side-by-side in About |
| Desktop | > 1024px | 3-column projects; full horizontal nav; inline hero (text + photo); max-width container centered |

- Test at 360px, 768px, 1024px, 1440px.
- No horizontal scrolling at any size.
- Use `clamp()` for fluid headings and `rem` for consistent scaling.

---

## 4. Component List

| Component | Purpose | Props / data | Behavior |
|---|---|---|---|
| `Container` | Consistent max-width + padding | `children` | Wraps page content |
| `Navbar` | Section navigation | `links[]`, `resumeUrl` | Sticky; hamburger on mobile; active-link highlighting |
| `Hero` | First impression | `name`, `title`, `taglines[]`, `location`, `photo`, `resumeUrl` | Rotating tagline; CTA buttons; photo or placeholder |
| `TaglineRotator` | Cycles taglines | `taglines[]`, `interval` | Fade/slide; pauses on hover; respects reduced motion |
| `ResumeButton` | Download resume | `url` | Hidden/disabled if `url` empty; shows tooltip "Coming soon" |
| `SectionHeading` | Reusable section header | `eyebrow`, `title`, `description` | Renders label + heading + optional text |
| `About` | Personal + education intro | `aboutText`, `education`, `interests[]` | Two-column on desktop; photo placeholder |
| `SkillGroup` | Group of skills | `title`, `items[]` | Renders heading + badges |
| `SkillBadge` | Single skill | `name`, `level?` | Pill; optional level label; hover highlight |
| `Skills` | All skill groups | `skills` data | Responsive grid of `SkillGroup` |
| `Projects` | Project grid | `projects[]` | Responsive grid; maps to `ProjectCard` |
| `ProjectCard` | One project | `title`, `description`, `tech[]`, `type`, `role?`, `githubUrl?`, `liveUrl?`, `badge?` | Hover lift; hides Code/Demo buttons when URL empty; shows "Private/Client" badge |
| `Certificates` | Certificate grid | `certificates[]` | Placeholder state if empty |
| `CertificateCard` | One certificate | `title`, `issuer`, `year?`, `result?`, `image?` | Image + text; fallback placeholder icon |
| `CodingProfiles` | Profile links | `profiles[]` | Shows only profiles with valid URLs |
| `ContactSection` | Contact + socials | `email`, `socials[]`, `resumeUrl` | Email button; social icons; optional form slot |
| `SocialLinks` | Social icon row | `links[]` | Hides missing links; `rel="noopener noreferrer"` |
| `Footer` | Closing info | `name`, `links[]`, `socials[]` | Copyright, quick links, back-to-top |
| `Button` | Shared button | `variant`, `href`, `onClick`, `children` | Primary/ghost variants; keyboard focus ring |
| `ScrollReveal` | Reveal wrapper | `children`, `delay?` | Fades/rises on view; disabled for reduced motion |
| `BackToTop` | Return to top | — | Appears after scrolling; smooth scroll |
| `ContactForm` *(v2)* | Send messages | `onSubmit` | Validates; shows success/error; hidden until decided |
| `ThemeToggle` *(v2)* | Light/dark switch | `theme`, `onToggle` | Only if light mode is requested |

---

## 5. Data Structure

Keep all content in `src/data/` so the owner can edit text without touching components.

### `profile.js`
```js
export const profile = {
  name: "shekharyalmar",
  displayName: "Shekhar Yalmar",       // [CONFIRM]
  title: "Full-Stack Developer",
  location: "Pandharpur, India",
  taglines: [
    "I build complete web apps, from database to UI.",
    "Frontend, backend, and everything in between.",
    "Turning ideas into full-stack products."
  ],
  photo: "",                            // [TO ADD] e.g. "/images/profile.webp"
  resumeUrl: "",                        // [TO ADD] e.g. "/resume.pdf"
  about: "",                            // [TO POLISH]
  education: {
    college: "Karmayogi Institute of Technology",
    degree: "B.Tech",
    year: "3rd year",
    expectedGraduation: 2028
  },
  interests: ["Web development", "AI/ML", "Data science"]
};
```

### `skills.js`
```js
export const skills = [
  { group: "Programming Languages", items: [
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Intermediate" }
  ]},
  { group: "Backend", items: [
    { name: "Django" }, { name: "FastAPI" }, { name: "Spring Boot" }
  ]},
  { group: "Frontend", items: [
    { name: "React" }, { name: "HTML/CSS" }, { name: "JavaScript" }
  ]},
  { group: "Data / ML", items: [
    { name: "Pandas" }, { name: "Scikit-learn" }
  ]},
  { group: "Databases", items: [
    { name: "SQL" }, { name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" }
  ]},
  { group: "Tools & Cloud", items: [
    { name: "Git/GitHub" }, { name: "Docker" }, { name: "Linux" },
    { name: "AWS" }, { name: "Postman" }, { name: "VS Code" }, { name: "Figma" }
  ]},
  { group: "Soft Skills", items: [
    { name: "Leadership" }, { name: "Teamwork" }, { name: "Communication" },
    { name: "Problem-solving" }, { name: "Time management" }, { name: "Adaptability" }
  ]}
];
```

### `projects.js`
```js
export const projects = [
  {
    id: "ags",
    title: "AGS",
    description: "ERP software built for a real client's store. Manages inventory, billing, employees, and sales.",
    tech: ["Django", "React", "SQLite"],
    type: "Solo project",
    role: null,
    badge: "Live client project",
    githubUrl: "",                      // [TO ADD] may be private
    liveUrl: "",                        // [TO ADD]
    highlight: ""
  },
  {
    id: "collegeguide",
    title: "CollegeGuide",
    description: "Gives students all the college information they need for admission and lets them review colleges digitally.",
    tech: ["React", "Django", "MySQL"],
    type: "Team project (4 members)",
    role: "Team Leader",
    badge: null,
    githubUrl: "https://github.com/shekharyalmar18/maharashtra-colleges",
    liveUrl: "",                        // [TO ADD]
    highlight: ""
  },
  {
    id: "blockchain-reports",
    title: "Blockchain-based Report Management System",
    description: "Stores medical reports as soft copies in a decentralized way, so records are secure and not held in one central place.",
    tech: ["Web3.js", "React", "MetaMask"],
    type: "Solo project",
    role: null,
    badge: null,
    githubUrl: "",                      // [TO ADD]
    liveUrl: "",                        // [TO ADD]
    highlight: ""
  }
];
```

### `certificates.js`
```js
export const hackathons = [];  // [TO ADD] { title, event, year, result }
export const certifications = []; // [TO ADD] { title, issuer, year, url }
```

### `links.js`
```js
export const links = {
  email: "yalmarshekhar9@gmail.com",
  github: "https://github.com/shekharyalmar18",
  linkedin: "",     // [TO ADD]
  twitter: "",      // [TO ADD]
  instagram: "",    // [TO ADD]
  leetcode: "",     // [TO ADD]
  codeforces: ""    // [TO ADD]
};
```

### Placeholder handling rules
1. Treat `""`, `null`, `undefined`, or the literal `"TO ADD"` as **missing**.
2. Hide any button/icon whose URL is missing (Code, Live Demo, Resume, socials).
3. If a whole list is empty (hackathons, certifications), show a friendly placeholder card, not a broken grid.
4. For private repos, show a **"Private / Client project"** badge instead of the Code button.
5. Use one small helper, e.g. `hasValue(value)`, so the rule is consistent everywhere.

---

## 6. Tech Stack Recommendation

### Option comparison
| Factor | Plain HTML/CSS/JS | React + Vite + Tailwind |
|---|---|---|
| Setup time | Very fast (just files) | ~10 minutes |
| Beginner friendliness | High for basics | Medium (needs components/JSX) |
| Reusing cards | Copy-paste (repetitive) | One component, data-driven |
| Updating content | Edit HTML in many places | Edit one data file |
| Performance | Excellent | Excellent after build |
| Hosting | Any static host | Any static host (build output) |
| Best for | A fixed, small page | A content-driven page you will grow |

### Recommendation: **React + Vite + Tailwind CSS**
Why:
- The owner already knows **React**, so the learning curve is small.
- Projects, skills, and certificates become **data-driven cards** — update one file, the site updates.
- Vite has a fast dev server and a simple `npm run build` for hosting.
- Tailwind keeps styling consistent and quick; no separate CSS files to chase.
- Still fully static and free to host.

> If the owner prefers the absolute simplest start, plain HTML/CSS/JS is a valid fallback. The structure below can be adapted by replacing components with sections in `index.html`.

### Folder structure
```
portfolio/
├─ public/
│  ├─ resume.pdf                # [TO ADD]
│  ├─ images/
│  │  ├─ profile.webp           # [TO ADD]
│  │  └─ certificates/          # [TO ADD]
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ layout/                # Navbar, Footer, Container
│  │  ├─ sections/              # Hero, About, Skills, Projects, Certificates, Profiles, Contact
│  │  └─ ui/                    # Button, Badge, SectionHeading, ScrollReveal, ProjectCard, SkillBadge
│  ├─ data/                     # profile.js, skills.js, projects.js, certificates.js, links.js
│  ├─ hooks/                    # useActiveSection, useReducedMotion
│  ├─ styles/                   # index.css (Tailwind + tokens)
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## 7. Feature Checklist

### Must-have (MVP)
- [ ] Dark theme with the chosen accent palette
- [ ] Responsive single-page layout (phone/tablet/desktop)
- [ ] Hero with name, title, rotating taglines, location, photo placeholder
- [ ] About with education and interests
- [ ] Skills grouped by category + soft skills
- [ ] 3 project cards with tech badges and conditional Code/Demo buttons
- [ ] Certifications & Hackathons section with empty-state placeholder
- [ ] Coding Profiles (GitHub now; LeetCode/Codeforces when links exist)
- [ ] Contact section with email + GitHub; resume button
- [ ] Smooth-scroll nav with active section highlight
- [ ] Scroll reveals + hover effects, reduced-motion support
- [ ] SEO meta tags, Open Graph, favicon
- [ ] Alt text, keyboard focus states, skip link
- [ ] Deployed with HTTPS

### Nice-to-have (v2)
- [ ] Contact form (Netlify Forms or Formspree) — owner has not decided
- [ ] Resume preview or "Download" + "View" options
- [ ] Light/dark toggle
- [ ] "Currently learning" section
- [ ] Blog (separate pages)
- [ ] Testimonials
- [ ] Project detail pages / case studies
- [ ] Animated project filters
- [ ] Custom 404 page (only if multi-page)

---

## 8. SEO, Performance & Accessibility

### SEO
- **Title:** `Shekhar Yalmar — Full-Stack Developer`
- **Description:** `Full-stack developer in Pandharpur, India. B.Tech student building web apps with Django, React, and FastAPI.`
- **Canonical URL** once the domain is known.
- **Open Graph + Twitter Card:** title, description, preview image (`1200×630`), URL.
- **Favicon** + web app icons.
- **Structured data (JSON-LD):** `Person` with name, job title, location, sameAs links (only real ones).
- Semantic HTML: one `h1`, ordered headings, `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`.
- `lang="en"` on `<html>`.

### Performance
- Compress and convert images to **WebP**; target under ~150 KB per image.
- Lazy-load below-the-fold images (`loading="lazy"`); set width/height to prevent layout shift.
- Load only two font families with `display=swap`; preconnect to Google Fonts.
- No heavy animation libraries; use CSS + IntersectionObserver.
- Minified production build; aim for **Lighthouse ≥ 90** for performance and accessibility.
- Keep JS small; avoid unused dependencies.

### Accessibility
- **Contrast:** body text ≥ 4.5:1, large text ≥ 3:1 (the recommended palette meets this).
- **Alt text** on all meaningful images; empty `alt=""` for decoration.
- **Keyboard navigation:** all links/buttons reachable via Tab; visible focus ring (`#22D3EE`).
- **Skip-to-content** link at the top.
- **Labels** for form fields (v2) and clear error messages.
- **Reduced motion:** honor `prefers-reduced-motion`.
- Tap targets ≥ 44×44 px; no color-only meaning.
- Hamburger menu: `aria-expanded`, `aria-label`, Esc to close.
- Icon links: `aria-label` + `rel="noopener noreferrer"` for external.

---

## 9. Hosting & Deployment

### Comparison
| Host | Free | Ease for beginners | Best feature | Notes |
|---|---|---|---|---|
| **GitHub Pages** | Yes | Medium | Tied to GitHub repo | Needs repo settings + base path config for Vite; no built-in forms |
| **Netlify** ⭐ | Yes | Very easy | Drag-and-drop deploy + forms + custom domain | Great for static/Vite sites |
| **Vercel** | Yes | Very easy | Excellent React/Vite support + previews | Great all-rounder; forms need external service |

**Recommendation: Netlify.** It is the simplest for a beginner: connect the repo or drag the build folder, and it gives HTTPS and a custom domain for free. It also offers a contact form later without extra setup.

### Step-by-step deployment (Netlify)
1. Build the site locally: `npm run build` → creates a `dist/` folder.
2. Create a free account at **netlify.com**.
3. Choose **Add new site → Deploy manually**, then drag the `dist/` folder into the drop zone.
   - *Or* connect GitHub: **Import from Git**, pick the repo.
4. If importing from Git, set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**. Netlify gives a URL like `shekharyalmar.netlify.app`.
6. Open the URL and test on phone + desktop.
7. Every future push to the connected branch (or new drag-and-drop) redeploys automatically.

### Optional custom domain
1. Buy a domain (e.g. Namecheap, Google Domains, Cloudflare).
2. In Netlify: **Site settings → Domain management → Add custom domain**.
3. At the domain registrar, add the DNS records Netlify shows (usually an `A` record and/or `CNAME`).
4. Wait for DNS propagation (minutes to a few hours).
5. Netlify provisions **HTTPS automatically**.
6. Update the canonical URL and Open Graph URL in the site.

---

## 10. Build Roadmap

> Time estimates are for a beginner working at a steady pace.

| Phase | Tasks | Estimate |
|---|---|---|
| **0. Setup** | Create Vite + React + Tailwind project; folder structure; Git init; design tokens | 1–2 h |
| **1. Content & data** | Fill `data/` files with provided info + placeholders; confirm display name | 2–3 h |
| **2. Design system** | Colors, fonts, base styles, `Container`, `Button`, `Badge`, `SectionHeading` | 3–4 h |
| **3. Core sections** | Navbar, Hero (tagline rotator), About, Skills | 4–5 h |
| **4. Content sections** | Projects + ProjectCard, Certificates, Coding Profiles, Contact, Footer | 4–5 h |
| **5. Motion & responsive** | Scroll reveals, hover states, mobile menu, breakpoint testing | 3–4 h |
| **6. SEO, a11y, performance** | Meta/OG, alt text, focus states, image optimization, Lighthouse pass | 2–3 h |
| **7. Testing** | Links, placeholders hidden, keyboard nav, phones/tablets, browsers | 1–2 h |
| **8. Deploy** | Netlify deploy, custom domain (optional), final check | 1 h |
| **Total** | | **~21–29 h** |

### What the owner still needs to provide
- [ ] Confirmed **display name** ("Shekhar Yalmar"?)
- [ ] **Profile photo** (high-res, good lighting)
- [ ] **Resume PDF**
- [ ] **LinkedIn** URL
- [ ] **X (Twitter)** URL
- [ ] **Instagram** URL
- [ ] **LeetCode** link or username
- [ ] **Codeforces** link or username
- [ ] **AGS** GitHub link (or confirm private) + live demo link
- [ ] **CollegeGuide** live demo link
- [ ] **Blockchain project** GitHub link + live demo link
- [ ] **Hackathon certificates:** names, events, years, results (~5)
- [ ] **Online course certificates:** names and platforms
- [ ] Polished **About** paragraph
- [ ] Decision on **contact form**

---

## Open Questions for the Owner

1. Should the display name be **"Shekhar Yalmar"**, or another spelling/format?
2. Are the **AGS** and **Blockchain** repositories public? If not, should we show a "Private / Client project" badge and hide the Code button?
3. Do you want a **contact form** in the first version (Netlify Forms/Formspree), or is a direct **email link** enough for now?
4. Which **coding profiles** should be linked at launch — only GitHub, or also LeetCode/Codeforces once links are ready?
5. Would you like a **"Currently learning"** section (e.g. AI/ML, data science) in the first version, or save it for v2?
