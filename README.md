# Nerdware — Portfolio

A clean, responsive, and fast static portfolio website for showcasing projects and contacting you.

## Structure

```
.
├─ index.html        # Home
├─ projects.html     # Projects gallery
├─ about.html        # About, skills, timeline
├─ contact.html      # Contact form + socials
├─ css/
│  └─ styles.css     # Global styles, layout, themes
├─ js/
│  └─ main.js        # Nav + theme toggle, footer year
└─ assets/
   ├─ logo.svg
   └─ favicon.svg
```

## Getting Started

Open `index.html` directly in your browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8080

# Node
npx serve -l 8080
```

Then visit `http://lohow calhost:8080`.

## Customize

- Update social links in the footer on each page.
- Replace placeholder project links in `projects.html`.
- Edit colors, spacing, and typography in `css/styles.css` via CSS variables.
- Swap the logo in `assets/logo.svg` and favicon in `assets/favicon.svg`.

## Features

- Responsive layout with mobile navigation
- Dark/light mode with persistence
- Accessible semantics and keyboard-friendly controls
- Zero build — pure HTML/CSS/JS


