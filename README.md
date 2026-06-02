# Chiaroscuro UI

A high-performance, accessibility-first UI component library built with modern CSS, designed to work seamlessly across React, Angular, Vue, Svelte, and vanilla Web Components.

Named for the painting technique of dramatic contrast between light and dark — because good UI design is fundamentally about contrast, clarity, and knowing what to put in shadow.

---

## Philosophy

Most component libraries choose between two failure modes: too opinionated (you get a consistent look but can't deviate from it) or too unopinionated (you get building blocks that still require hours of work before they look like anything). Chiaroscuro tries to find the sensible middle ground:

- **Accessibility first, not accessibility bolted on** — every component is built to WCAG 2.2 AA from the ground up, with ARIA patterns that work without JavaScript where possible
- **CSS custom properties throughout** — theming is a first-class concern, not an afterthought
- **Framework-agnostic core** — components are Web Components under the hood, with framework-specific wrappers providing idiomatic APIs
- **Performance** — no runtime CSS-in-JS, no large dependency trees, no layout thrash

---

## Components

| Component | Status |
|---|---|
| Button | ✅ Stable |
| Input / Textarea | ✅ Stable |
| Select | ✅ Stable |
| Checkbox / Radio | ✅ Stable |
| Modal / Dialog | ✅ Stable |
| Tooltip | ✅ Stable |
| Toast / Notification | 🚧 In progress |
| Data table | 🚧 In progress |
| Date picker | 📋 Planned |
| Combobox / Autocomplete | 📋 Planned |

---

## Installation

```bash
npm install @schleiferdyne/chiaroscuro-ui
```

### React

```jsx
import { Button, Input } from '@schleiferdyne/chiaroscuro-ui/react'

export default function Example() {
  return (
    <form>
      <Input label="Email address" type="email" />
      <Button variant="primary">Subscribe</Button>
    </form>
  )
}
```

### Vanilla / Web Components

```html
<script type="module" src="node_modules/@schleiferdyne/chiaroscuro-ui/dist/index.js"></script>

<ch-input label="Email address" type="email"></ch-input>
<ch-button variant="primary">Subscribe</ch-button>
```

---

## Theming

All design tokens are exposed as CSS custom properties:

```css
:root {
  --ch-colour-primary: #2563eb;
  --ch-colour-primary-hover: #1d4ed8;
  --ch-radius-md: 6px;
  --ch-font-sans: 'Inter', system-ui, sans-serif;
}
```

A dark mode theme is included and activated automatically via `prefers-colour-scheme`, or manually via `data-theme="dark"` on any ancestor element.

---

## Accessibility

- Tested with NVDA, JAWS, VoiceOver, and TalkBack
- Keyboard navigation for all interactive components
- Focus management for modal and overlay components
- All colour combinations meet WCAG 2.2 AA contrast requirements
- Reduced motion support via `prefers-reduced-motion`

---

## Browser support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+. No IE11 support.

---

## Development

```bash
npm install
npm run dev      # Storybook at http://localhost:6006
npm run test     # Playwright accessibility and interaction tests
npm run build    # Production build
```

---

## Licence

MIT
