# Taking Travel — Responsive Landing Page

A front-end clone of a travel-blog landing page design (Figma web task), built as a **single responsive codebase** — no separate mobile/desktop builds.

🔗 **Live demo:** _add your GitHub Pages link here once enabled_
🎨 **Design reference:** Figma — *Web task round 1*

## Why one responsive build instead of two

The design provides a desktop frame and a mobile frame, but they're the same components — just reflowed:

| Section | Desktop | Mobile |
|---|---|---|
| Destinations grid | 4 columns | 2 columns |
| Hero | Side-by-side image + text | Stacked, image on top |
| Nav | Full inline links | Hamburger menu |
| Recent stories | 2-column grid | Single column |

Rather than duplicate markup, this project uses **CSS Grid/Flexbox + media queries** so one HTML/CSS file adapts across breakpoints. That mirrors how production front-ends are actually built, and was a deliberate call to demonstrate responsive layout skill rather than just recreating two static screens.

## Breakpoints

- `> 960px` — full desktop layout (4-col grid, inline nav, side-by-side hero)
- `640px – 960px` — tablet transition (2-col grid, hamburger nav appears)
- `< 640px` — mobile layout (single column, stacked hero, compact spacing)

## Tech stack

- Plain **HTML5 + CSS3** (no build step — open `index.html` directly in any browser)
- Vanilla JS for the mobile menu toggle only
- Google Fonts: **Poppins** (headings), **League Spartan** (logo mark), **Caveat** (logo script), **Inter** (body text)
- Images: exported directly from the Figma design file

## Structure

```
Taking-travel/
├── index.html      # markup only
├── style.css        # all styling, organized by section + media queries
├── script.js        # mobile menu toggle
├── images/          # exported design assets
└── README.md
```

Separated into three code files (rather than one all-in-one HTML) so the project reads like a standard front-end repo — easier to navigate in a code review and a better habit going forward if the project grows.

## Running locally

No install needed:

```bash
git clone https://github.com/SwaraPimprikar/Taking-travel.git
cd Taking-travel
open index.html   # or just double-click the file
```

## Deploying (free, ~2 minutes)

**GitHub Pages**
1. Repo → Settings → Pages → Source: `main` branch, `/root`
2. Live URL appears at `https://swarapimprikar.github.io/Taking-travel/`

## What I'd improve with more time

- Working (non-mailto) contact form submission handler
- Accessibility pass: ARIA labels on icon-only buttons, focus states
- Convert to a component-based build (e.g. React) if the project scope grows
