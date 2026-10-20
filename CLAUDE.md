# skc-rcl

React component library for SKC Web and its sub domains (Section, Tile, SKCTable, Pie, YGOCard*, YGOCardPreview, YGOCardAttribute...). Published to npm as `skc-rcl`; skc-site (`../skc-site`) is one consumer, not the only one. React 19, MUI 9 (peer dependency), TypeScript, rollup, Jest 30 + Testing Library (ts-jest), Storybook.

## Commands

- `yarn build` - rollup to `dist/` (cjs, esm, `index.d.ts`); `dist/` is git ignored
- `npx jest --coverage=false <path>` - run tests (`yarn test` adds coverage)
- `npx eslint src` - lint
- `npx prettier --check <files>` - format check against `.prettierrc` (tabs, single quotes)
- `yarn start` - Storybook on :6006
- `npx tsc --noEmit -p .` already fails on `release` with a `rollup.config.ts` rootDir error - unrelated to source; the rollup build type checks the source

## Working preferences

- Commit only when asked. Short past-tense subject lines. Work on a branch off `release` (the main branch).
- When asked to commit a group of changes, keep every commit building - e.g. don't export a component from `src/index.ts` before the component itself is committed.
- Publishing (`yarn publish`, needs the owner's npm login) and version bumps are the owner's call. New exports = minor bump.

## Design rules

- **Consumer-agnostic.** No skc-site palette (sky, basalt, stone, lava...) or page chrome. Neutral defaults, with themeable parts exposed as `--<component>-*` CSS custom properties (e.g. `--ygo-card-preview-text`, `--ygo-card-preview-muted`, `--ygo-card-preview-art-border`). Mock designs on a neutral page.
- **Text comes from the consumer's MUI theme.** Use `<Typography>` variants (`h6`, `subtitle1/2`, `body2`, `caption`...) and don't set font size, weight, family, line height or letter spacing in component CSS. CSS may set colour, layout, and margin resets (a theme can give variants margins and colours - reset them where the layout needs it, e.g. `.ygo-card-preview .MuiTypography-root { color: inherit }`).
- Beat a consumer's MUI theme with doubled classes (`.ygo-card-preview__type.MuiChip-root`), not `!important`.
- **Card frame colours are canonical** - `src/css/ygo-card/ygo-card-styles.css` (backgrounds plus `#fffbeb` / `#333` text) and `atk-def.css` (ATK/DEF). New components reuse these exact values and never darken or mix them; tests should keep copies equal to the source (see `YGOCardPreview.test.tsx`). Flat fills only - pendulums get a `#03bfa5` band, not the gradient the older frame styles use.
- Real semantics: `<dl>` for label/value facts, `<table>` with `<th scope>` for tabular data, alt text on icons (`'Dark attribute'`, `'Level'`).

## Code layout

- `src/components/<area>/` components, `__tests__/` beside them; `src/css/<area>/` one stylesheet per component, imported by it (rollup-plugin-postcss injects it at runtime); `src/img/` svgs (bundled as data URIs by @rollup/plugin-image); `src/stories/<area>/` stories; `src/index.ts` exports.
- Shared card types are globals in `src/global.d.ts` (`SKCCard`, `cardColor`, `CardAttribute`, `SKCMonsterAssociation`). They don't make it into `dist/index.d.ts`, so consumers see those props loosely typed.
- The api sends values capitalised (`Effect`, `Dark`, `Pendulum-Effect`) - lowercase before mapping to classes or icons.
- Card art: `https://images.thesupremekingscastle.com/cards/<size>/<cardID>.jpg`, sizes `tn`, `x-sm`, `sm`, `md`, `lg`, `original`, with `default-card-image.jpg` as the fallback.

## Testing notes

- `config/jest/svgTransform.js` turns an svg import into its file name, so tests can assert which icon was chosen (`toHaveAttribute('src', 'dark.svg')`).
- Tests that read stylesheets with `node:fs` need `/// <reference types="node" />` (Node types aren't in tsconfig).
- Consumers can't load rcl in Jest (esm only chart deps) - they mock it, so behaviour belongs in rcl's own tests.

## Open items

- `YGOCardPreview` / `YGOCardAttribute` (1.4.0) are committed on `card-preview`, not merged or published.
- SKCTable redesign: likely split into a general `SKCTable` and a new `SKCStatGrid` (label/value tiles); options are on the "SKC Table" design canvas.
- `CardAssociation` keeps its own attribute image switch - it could use `YGOCardAttribute`.
- `YGOCardWithQuantity.tsx` and `ygo-card-with-quantity.css` fail prettier already.
