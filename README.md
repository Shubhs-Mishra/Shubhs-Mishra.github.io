# Personal Portfolio

Personal site for **Shubham Mishra** — Full Stack Engineer.

🔗 **[shubhs-mishra.github.io](https://shubhs-mishra.github.io/)**

Static HTML/CSS/JS. No build step, no dependencies, no framework. Clone it and open `index.html`.

---

## Structure

```
index.html                    the whole page
styles.css                    all styling (CSS custom properties at the top)
main.js                       nav scroll-spy + footer year (progressive enhancement)
404.html                      GitHub Pages error page
assets/
  favicon.ico
  Shubham-Mishra-CV.pdf       served by the "Download CV" buttons
```

## Running locally

Any static server works. With Python:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` works too, but a server is closer to
how GitHub Pages actually serves it.

## Making changes

**Colours** — every colour is a custom property in the `:root` block at the top of
`styles.css`. Change `--accent` and the whole page follows. All text/background
pairings are currently at WCAG AA (≥4.5:1); if you change them, re-check contrast.

**Adding the profile photo** — the markup is already written and commented out in
`index.html`, just above the closing `</header>`. Drop an image in `assets/`, point
the `src` at it, and remove the two comment markers. The hero switches from one
column to two on its own via `.hero:has(.portrait)` — no CSS edit needed.

**Social share image** — same deal. There's a commented-out `og:image` tag in the
`<head>`. A 1200×630 PNG in `assets/` makes the link preview properly on LinkedIn
and WhatsApp instead of showing a blank card.

**Content** — it's plain HTML. Sections are `#work`, `#projects`, `#toolkit`,
`#contact`, and the nav links to them by id.

## Deployment

Pushing to `main` publishes automatically via GitHub Pages (Settings → Pages →
deploy from branch `main`, folder `/`). `.nojekyll` is present so Pages serves the
files as-is rather than running them through Jekyll.

## Browser support

Current versions of Chrome, Safari, Firefox and Edge. The layout uses CSS Grid and
`:has()`; in a browser without `:has()` support the hero simply stays single-column,
which is the intended state while the photo is switched off.

---

© Shubham Mishra
