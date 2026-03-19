# Pragnova Frontend Design System (Single-Page Site)

## 1. Design Intent
Pragnova uses a neo-brutalist visual language to communicate confidence, speed, and practical, industry-first learning outcomes.

The site is intentionally bold rather than minimal:
- High contrast colors
- Hard-edged geometry
- Thick borders
- Punchy shadows
- Strong uppercase typography
- Direct, no-fluff messaging

The visual identity supports the current EdTech positioning: a serious, product-minded company delivering top-skill courses and real-world internship programs.

## 2. Core Visual Style: Neo-Brutalism
The UI follows neo-brutalism principles throughout:
- Hard edges: no rounded corners on key UI surfaces (`border-radius: 0` for brutalist blocks)
- Thick outlines: consistent `3px` borders using high-contrast white
- Offset hard shadows: geometric drop shadows (`6px 6px 0`) to create depth without blur
- Strong block contrast: dark base background with bright primary and accent highlights
- Loud typography treatment: uppercase headings, heavy weights, stroke and text-shadow in hero/section titles

This creates a tactile, poster-like, high-energy interface while preserving readability and hierarchy.

## 3. Color System and Theme Tokens
The site uses a focused primary palette defined as CSS variables in `:root`.

### Design tokens
- `--primary: #123499` (Deep Blue)
- `--bg-color: #0d0d0d` (Near Black)
- `--text-color: #ffffff` (White)
- `--accent: #ff4949` (Bold Red)
- `--border-color: #ffffff` (White)
- `--shadow-color: #123499` (Blue hard-shadow color)

### Theme behavior
- Base canvas is dark (`--bg-color`) for strong contrast and premium visual weight
- Primary blue drives brand identity, CTAs, and key highlights
- Accent red is used selectively for emphasis and interaction energy
- White borders and text create sharp separation and immediate scannability

### Contrast strategy
- High foreground/background contrast is intentional and consistent
- Cards in the skills grid invert to white backgrounds for section-level visual rhythm

## 4. Typography System
### Font family
- Primary typeface: `Space Grotesk` (Google Fonts)
- Fallback: `sans-serif`

### Typographic character
- Geometric, modern sans-serif aligns with SaaS/tech positioning
- Heavy weights (`600-700`) communicate authority and urgency
- Uppercase headings reinforce bold, editorial neo-brutalist tone

### Scale and hierarchy
- Hero title (`h1`): `clamp(3rem, 8vw, 6rem)`
- Section title (`h2`): `clamp(2rem, 5vw, 4rem)`
- Supporting copy: large body defaults around `1.25rem`
- Form labels and CTA text: bold uppercase treatment for clarity and consistency

### Display effects
- Text shadows and stroke (inline styles in section headers) amplify punch and depth
- Tight line-height in headings (`1.1`) keeps large text compact and impactful

## 5. Layout Architecture (Single-Page)
The page follows a linear, high-clarity information flow:

1. Top Nav
- Brand mark on left (`PRAGNOVA.`)
- Primary action on right (`Join Early`)
- Thick bottom border for section separation

2. Hero + Early Access Form
- Centralized composition with high-impact headline
- Supporting value proposition in one concise paragraph
- Waitlist form as a bordered, shadowed conversion block
- Success state replaces form with confirmation panel

3. Master the Future (Skills Grid)
- Full-width branded section with primary-color background
- Intro copy followed by card grid of skill tracks
- Current tracks include AI, Cloud, Data Science, Cybersecurity, Blockchain, and Full-Stack

4. How Pragnova Works
- Three sequential process blocks (01/02/03)
- Vertical stack for linear storytelling
- Large step numerals and concise descriptions

5. Footer
- Compact legal closure with consistent branding and border language

## 6. Spatial System and Structure
- Section padding: generous (`5rem 2rem`) for breathing room
- Max content width: `1200px` via `.container`
- Grid layout: `repeat(auto-fit, minmax(280px, 1fr))`
- Card spacing: `2rem` gaps to keep dense content readable
- Vertical rhythm favors clear block separation over subtle transitions

This spacing model keeps the design bold but not cramped across screen sizes.

## 7. Component Styling Conventions
Reusable utility classes define the visual system:

- `.brutal-border`
  - `3px` solid border
  - `border-radius: 0`

- `.brutal-shadow`
  - Hard offset blue shadow
  - Press interaction shifts element to mimic physical push

- `.brutal-shadow-accent`
  - Same interaction model with red accent shadow

- `.brutal-button`
  - Primary fill, uppercase label, bold weight
  - Framed by border + hard shadow for neo-brutalist consistency

- `.brutal-input`
  - Transparent background, white text
  - Minimal focus state with subtle translucent fill

- `.card`
  - Solid block container with strong spacing and icon-first hierarchy

## 8. Motion and Interaction Style
Animation is present but restrained:
- Section/content reveal uses Framer Motion (`FadeIn`)
- Entrance pattern: `opacity` from 0 to 1 and `y` from 50 to 0
- Transition duration: `0.5s` with staggered delays
- Viewport trigger: animate once when in view

Interaction philosophy:
- Motion supports hierarchy and readability, not decoration
- Pressed-state button/card shadows create tactile, mechanical feedback

## 9. Iconography and Visual Language
- Icons are sourced from `lucide-react`
- Stroke-based icon style complements outlined neo-brutalist blocks
- Icons use `--primary` color to maintain brand cohesion
- Skill cards use icon + heading + short description format for scan speed

## 10. Responsiveness
The layout is responsive by construction:
- Fluid heading scales via `clamp`
- Grid auto-fits cards by available width
- Centralized containers and flexible widths prevent overflow
- Form width capped for readability and conversion focus

Overall behavior on smaller screens:
- Content stacks naturally
- Hierarchy remains clear due to bold typography and spacing
- Visual identity remains intact without needing separate mobile theme logic

## 11. Content Tone and Brand Perception
Tone is assertive, practical, and outcomes-focused:
- Emphasis on industry-level projects and real-world execution
- Direct promises around job-ready skills and internship pathways
- Avoids speculative language and keeps product message grounded

This aligns the UI with a legitimate SaaS education brand rather than an experimental concept.

## 12. Summary of the Current UI Direction
Pragnova's current frontend is a high-contrast neo-brutalist single-page experience defined by:
- Bold hard-edged visual blocks
- Deep-blue primary branding on a dark base
- Strong uppercase geometric typography
- Structured, conversion-led layout
- Practical SaaS messaging focused on skills + internship outcomes

The result is a memorable, modern, and credible interface that communicates both technical seriousness and product confidence.
