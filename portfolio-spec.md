# Portfolio Website — Build Spec

## Overview
A personal portfolio site with two interchangeable modes, toggleable at any time:
1. **Traditional mode** — standard scrollable portfolio page (About, Projects, Experience, Contact).
2. **OS mode** — a desktop-environment simulation. Sections are "apps" that open as draggable, resizable windows on a desktop with a taskbar.

Both modes render the same underlying content (no duplicated copy). The OS mode aesthetic should lean toward a tiling-window-manager / Hyprland-inspired look rather than a generic retro Windows skin.

## Tech Stack
- **Build tool:** Vite
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **State management:** Zustand (window manager state, mode toggle)
- **Window dragging/resizing:** react-rnd
- **Animation:** Framer Motion (window open/close/minimize, mode-switch transition)
- **Routing:** React Router (optional — only if traditional mode needs distinct URLs per section)
- **Deployment target:** Vercel

## Content Architecture (critical constraint)
All portfolio content must live in typed data files, decoupled from presentation:
```
src/content/
  about.ts
  projects.ts
  experience.ts
  contact.ts
  skills.ts
```
Each file exports a typed object/array (e.g. `Project[]`, `ExperienceEntry[]`). Build shared presentational components (`<AboutContent />`, `<ProjectsContent />`, etc.) that consume this data. Both modes import the same components:
- Traditional mode renders them directly as page sections.
- OS mode renders them inside a `<Window>` wrapper.

No content should be written twice. Editing `projects.ts` should update both views automatically.

## OS Mode Theming & Theme Switcher
- Launch theme: **Hyprland/tiling-WM inspired** — dark, minimal, sharp edges, monospace/terminal-adjacent typography, accent-color highlights on focused window borders (mirrors Rahul's actual EndeavourOS + Hyprland + KDE setup).
- Build theming as a **swappable system from day one**, not a hardcoded style, so additional OS themes (e.g. retro Windows, macOS-style) can be added later as drop-in theme packs without touching component logic.
- Implementation approach: define each theme as a config object (colors, fonts, window-chrome style, icon set, wallpaper) consumed via Tailwind CSS variables / a theme context — avoid per-component conditional styling.
- Theme switcher control lives in the Taskbar (or start menu), separate from the OS-mode/Traditional-mode toggle. Persist selected theme in localStorage alongside the mode preference.
- v1 ships with just the Hyprland theme; the switcher UI and theme-config structure should still be built to support more themes being added later.

## OS Mode — Component Breakdown

### `Desktop`
- Full-viewport background (themeable — solid color, gradient, or wallpaper image).
- Grid of clickable app icons that open the corresponding window.

### `Taskbar`
- Fixed bar (top or bottom) showing currently open windows (click to focus/restore).
- Clock.
- Mode-switch control (toggle to Traditional mode).
- Optional "start menu" style launcher for apps not pinned to the desktop.

### `WindowManager` (Zustand store)
State shape to implement:
```ts
interface WindowState {
  id: string;
  appId: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}
```
Store actions: `openWindow`, `closeWindow`, `focusWindow`, `minimizeWindow`, `maximizeWindow`, `moveWindow`, `resizeWindow`.

### `Window`
Generic chrome component wrapping any app content:
- Titlebar with app name + close/minimize/maximize buttons
- Draggable via react-rnd
- Resizable via react-rnd (respect min width/height)
- Click anywhere on window raises its z-index (focus)

### App Registry
```ts
interface AppDefinition {
  id: string;
  title: string;
  icon: string; // icon component or path
  component: React.ComponentType;
  defaultSize: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
}
```
Apps: `About`, `Projects`, `Experience`, `Resume` (PDF viewer or download), `Contact`. Adding a new app should require only one registry entry — no changes to WindowManager logic.

## Traditional Mode
- Single-page scrollable layout, standard portfolio sections in order: Hero/About, Experience, Projects, Skills, Contact.
- Sticky nav with anchor links to each section.
- Mode-switch control visible (e.g. in nav or as a floating button).
- Should be fully usable/legible without JS-heavy interaction — this is the "quick scan" version for recruiters.

## Shared / Global
- **Mode toggle:** persists across page reload (localStorage), accessible from both modes.
- **Theme:** single Tailwind design-token source so colors/typography stay consistent between modes.
- **Responsive behavior:** OS mode on mobile should likely auto-collapse to a simplified app-list/full-screen-window view rather than attempting drag/resize on small screens — decide and document this explicitly during build.
- **Resume:** downloadable PDF, linked from both modes.
- **Contact:** links only (email mailto, LinkedIn, GitHub, etc.) — no form, no backend/email service needed.

## Build Phases
1. Scaffold Vite + React + TS + Tailwind. Build content data files and shared presentational components. Ship Traditional mode end-to-end first (live, presentable site).
2. Build WindowManager core (Zustand store) and generic `Window` component with one dummy app to prove drag/resize/focus/minimize/close.
3. Build app registry and wire real apps (About, Projects, Experience, Resume, Contact) into windows, reusing components from Phase 1.
4. Build Desktop (icon grid), Taskbar, mode-toggle control, mode-switch transition animation.
5. Responsive pass, polish, accessibility pass (keyboard nav for windows, focus trapping, alt text), deploy to Vercel.

## Out of Scope (for v1, unless specified later)
- Multi-user / backend / CMS — content is static, edited via the TS data files directly.
- Window snapping/tiling shortcuts (Hyprland-style keybinds) — nice-to-have stretch goal, not required for launch.
- Persisted window layout across sessions — optional stretch goal (localStorage).

## Decisions Confirmed
- OS mode theme: Hyprland/tiling-WM inspired, built as a swappable theme system (see Theming section above).
- Contact: links only (mailto, LinkedIn, GitHub) — no form.
- Traditional mode: single scrolling page with anchor-link nav.
