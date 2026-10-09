# Gabriel's portfolio — Vue

A Vue 3 and TypeScript port of the React/Next.js portfolio in `../portfolio`, built with Vite, Vue Router, and Tailwind CSS v4.

The portfolio uses a fixed 25% sidebar, a shader home scene, and a scrollable content pane for the project, skill, and event routes.

## Development

```sh
bun install
bun dev
```

## Validation and production build

```sh
bun run type-check
bun run lint
bun run build
bun run preview
```

## Source layout

- `src/App.vue`: shared sidebar and content layout.
- `src/views/`: Home (`/`), Projects (`/projects`), Skills (`/skills`), Events (`/events`), and the catch-all 404 page.
- `src/components/`: Vue equivalents of the original React components.
- `src/data/`: original project, skill, and event content.
- `src/assets/main.css` and `public/`: original theme and static assets.

`Hero.vue` and `HeroVisual.vue` remain available as standalone components, matching the source project's current layout where they are not displayed. The wireframe hero uses Three.js directly in Vue.

Production hosting must serve `index.html` for application routes so direct visits to `/skills` and `/events` work with Vue Router's history mode.
