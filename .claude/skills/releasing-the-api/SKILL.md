---
name: releasing-the-api
description: Use when cutting a release for skc-rcl — choosing the version, creating and pushing a version tag, or publishing GitHub release notes.
---

# Releasing skc-rcl

## Overview

skc-rcl is a **published library**, not a deployed application. `skc-site` installs it from npm, so
semver here describes the exported component surface — the components, their prop unions, and the
global CSS class names they emit — not anything internal.

Tags are bare `vX.Y.Z` with no prefix, and they are lightweight.

The version of record is the `version` field in `package.json`:

```json
"version": "1.3.1",
```

That is the only version string in the repo — no CHANGELOG, no version constant in source, no
README badge. The `package.json` string has no `v` prefix; the tag does.

Worth knowing before starting:

- **Pushing a `v**` tag re-runs `Build & Code Quality` and nothing else.** It does not publish to
  npm, and it does not refresh the Storybook docs site — `deploy-storybook.yaml` fires on `master`,
  which trails `release`.

## Pre-flight

The default branch is `release`. Run from an up-to-date checkout of it.

```bash
git fetch --tags --prune
grep -n '"version"' package.json
PREV=$(git tag --list 'v*' --sort=-v:refname | head -1)
git log --oneline "$PREV"..HEAD
git diff --stat "$PREV"..HEAD
yarn test
yarn build
yarn build-storybook
yarn lint
```

**`git fetch --tags --prune` comes first and is not optional.** `git tag --list` reads local refs
only, so on a checkout that hasn't fetched recently `$PREV` silently resolves behind. (`git ls-remote
--tags origin` answers the same question without writing to `.git`, if you need a read-only check.)
Then confirm
the tag and release you are about to create don't already exist:

```bash
git ls-remote --tags origin "refs/tags/vX.Y.Z"
gh release view vX.Y.Z --repo ygo-skc/skc-rcl
```

Empty output from the first and `release not found` from the second mean it is safe to continue. If
either finds something, this release is already cut — **stop.**

**The `package.json` version is the source of truth — read it first.** If it already names an
unreleased version, that is the version to cut: match it and skip the bump table.

**If the version still equals `$PREV`** — the bump has not been committed — **stop. Do not tag.**
Report which version it should become and let the user make that edit, commit it, and push. Don't
make that edit yourself as part of cutting a release.

Expect `git log "$PREV"..HEAD` to be long and almost entirely Renovate commits. Tags here lag the
branch by many commits; that is normal and not a sign anything is wrong.

All four gate commands must pass before tagging. `Build & Code Quality` runs on `tags: v**`, so a
failure becomes a permanent red check on an already-published tag.

Three things about that gate:

- None of the four need secrets, env files, or certificates.
- `yarn test` runs jest with `collectCoverage: true` and hard global thresholds, so it can fail on
  coverage alone with every assertion passing. Read the `jest.coverageThreshold` block in
  `package.json` for the current floors rather than assuming them.
- **There is no standalone typecheck.** Typechecking happens only inside `yarn build`, via
  `@rollup/plugin-typescript`. And `tsconfig.json` excludes `src/**/*.test.tsx` and
  `src/**/*.stories.tsx`, so the build never typechecks tests or stories — only `ts-jest` does,
  during `yarn test`.

Never run `yarn run publish` as part of this — see Common mistakes.

## Choosing the version

Semver describes the **exported component surface**, not internals. Start with the contract diff,
which answers most of the question mechanically:

```bash
SCRATCH=$(mktemp -d)                     # scratch only; nothing is written into the repo
exports_of() { grep -ho 'export {[^}]*}' "$1" | sed 's/export {//; s/}//' \
  | tr ',' '\n' | sed 's/.* as //' | tr -d ' ' | grep -v '^$' | sort -u; }

git show "$PREV":src/index.ts > "$SCRATCH/prev-barrel.ts"
diff <(exports_of "$SCRATCH/prev-barrel.ts") <(exports_of src/index.ts)
```

A removed or renamed line is a **major**. An added line is at least a **minor**. Empty output means
patch is still possible — but the diff covers export *names* only, not props, CSS, or peer floors,
so keep reading.

After `yarn build`, the same helper proves the built artifact matches the source barrel:

```bash
diff <(exports_of src/index.ts) <(exports_of dist/index.d.ts)
```

Any difference means `dist/` is stale or the build dropped an export. Nothing in this repo forces a
rebuild, so this check is the only thing standing between a stale `dist/` and a release.

`exports_of` only reads `export { … }` braces, which is all `src/index.ts` uses today. If the barrel
ever gains an `export default`, `export * from`, or `export type { … }`, the helper will not see it
and an empty diff stops being proof — widen it before trusting it.

The commit log cannot decide the bump for you: history is overwhelmingly Renovate squashes and not
Conventional Commits, so this is a judgment call about the exported surface.

| Bump | When |
| --- | --- |
| Patch | Dependency bumps, refactors of non-exported components, bug fixes that change no rendered markup and no class name |
| Minor | A new export, a new optional prop, a new member added to a string-literal union |
| Major | An export removed or renamed; a prop made required; a union member narrowed or renamed; a CSS class renamed or deleted; a `peerDependencies` floor raised; a change to an ambient type such as `SKCCard` |

**Dependency bumps here do not reach consumers.** `package.json` has no runtime `dependencies` block
at all, and `files: ["dist"]` ships only the bundle — so `resolutions` and `devDependencies` are
build-time only. A dependency bump is a patch unless it moves a `peerDependencies` floor or changes
what the bundle renders.

**Four hazards where nothing will warn you.** These are why a release with no obvious source change
can still be breaking:

- **The barrel renames two components.** `src/components/ygo-card/YGOCardData.tsx` ships as
  `YGOCard`, and `YGOCard.tsx` ships as `YGOCardWithImage`. Judge the contract from `src/index.ts`,
  never from filenames — editing "YGOCard.tsx" changes the exported `YGOCardWithImage`.
- **Prop types are not exported.** Components declare `export type XProps`, but `src/index.ts`
  doesn't re-export them, so consumers cannot import them. A prop change surfaces only as an error
  at their call site.
- **The shipped declarations are already broken, so consumer typechecks catch nothing.**
  `src/global.d.ts` declares ambient `SKCCard`, `cardColor` and `PieData`; they are neither
  published (`files: ["dist"]`) nor inlined into `dist/index.d.ts`, which therefore references
  undeclared identifiers. `skc-site` compiles only because it sets `skipLibCheck: true`. Changing
  `SKCCard`'s shape is a silent runtime break — treat it as major.
- **Global CSS class names are a two-way contract.** CSS is injected into the bundle unscoped. The
  library emits classes it never defines (`rounded-skeleton`, `rounded-skeleton-light`,
  `group-dark`, `aggregate-anchor`) and relies on the consumer's stylesheet to supply them; and
  `skc-site` styles library-owned classes (`section-content`, `section-title`, `hint`). Renaming or
  deleting a class in `src/css/` breaks the site with no type or test signal. The
  `-ygo-card-style` families are built by interpolating the `cardColor` union, so that union and
  the CSS must change together.

## Release notes

**Title:** `vX.Y.Z`, or `vX.Y.Z: Short Theme` when the release has a headline — precedent
`v1.2.0: Updating React to V19`, `v1.1.6: Yarn Migration`. Bare tag name is right for routine
releases.

**Body**, in this order:

1. `## What's Changed` — one `*` bullet per human change, two-space-indented sub-bullets for
   detail. Omit this heading **only when the human-commit list below is empty** — the body then
   starts directly with `### PR's`, with no leading blank line. A release with human commits gets
   this section even when nothing under `src/` changed.
2. Blank line, then `### PR's` — the Renovate lines as GitHub writes them
   (`* <title> by @renovate[bot] in <PR url>`).
3. Blank line, then
   `**Full Changelog**: https://github.com/ygo-skc/skc-rcl/compare/<PREV>...<NEW>`

For a **major**, add a short `## Migrating` section right after `## What's Changed`: one bullet per
thing a consumer must change, written in terms of what they change in their own code. `skc-site`
pins this package to an exact version, so a major does not reach it automatically — Renovate opens
a PR there, and majors are not automerged. Those bullets are what make that PR reviewable.

Borrow the bot lines and the footer rather than retyping them. This returns the generated body
without creating anything:

```bash
gh api repos/ygo-skc/skc-rcl/releases/generate-notes \
  -f tag_name=vX.Y.Z -f previous_tag_name="$PREV" --jq .body
```

Take the bot lines and the footer from that output and restructure them. Don't publish it as-is: it
files every Renovate bullet under `## What's Changed` and says nothing about what actually changed.
Keep the bot lines in the order GitHub returns them, even where that isn't ascending by PR number.
If a non-bot PR appears in the list, summarize it as a `## What's Changed` bullet, or drop the line
when it only synced a branch.

**`generate-notes` is not enough on its own, and this is the easy way to lose real work.** It lists
only merged PRs, and human changes here are usually pushed straight to `release` with no PR — so
they appear nowhere in the generated body. Get them from git instead:

```bash
git log --format='%h %an | %s' "$PREV"..HEAD | grep -vi renovate
```

Every commit that survives that filter and actually shipped something needs its own
`## What's Changed` bullet, written from the diff rather than from the subject line — subjects here
are terse (`Fixing vuln`, `Updated version`) and won't tell a reader what changed. Merge commits and
reverts that cancel out get no bullet.

Use `*` for bullets, not `-`. Write `notes.md` to a scratch directory, not into the repo.

Blank lines go only before `### PR's` and before the footer — never between two `*` items. A
heading ends a list; a blank line doesn't. GitHub keeps both sides as one list and renders the
whole thing "loose", wrapping every item in a `<p>` with paragraph margins. Check the file before
publishing:

```bash
awk '/^[ ]*\* /{i=1; if (g) {print "LOOSE"; exit}; next} /^$/{if (i) g=1; next} {i=g=0}' notes.md
```

No output means the list is tight.

## Sequence

Show the version, the contract diff, the four gate results, and the drafted notes. Get approval
**once**. Then run all three steps without stopping again:

```bash
git tag vX.Y.Z <commit>          # HEAD of release; lightweight: no -a, no -m
git push origin vX.Y.Z
gh release create vX.Y.Z --repo ygo-skc/skc-rcl \
  --title "vX.Y.Z" --notes-file notes.md
```

Push the tag first. `gh release create` attaches to an existing tag but invents one from the
default branch when the tag is missing.

## Why approval comes before the push

The pushed tag is the release marker, and the GitHub Release is how the change is announced to the
one repo that pins this package. Approval is the last cheap moment — after the push, a wrong
version is corrected with another release, not an edit.

## Common mistakes

- **`git tag -a`.** Tags here are lightweight. The two annotated ones (`v1.0.5`, `v1.1.9`) are
  artifacts of `yarn publish` tagging for itself, not precedent — `v1.1.9` even sits on a commit
  whose subject is `v1.1.9`.
- **Running `yarn run publish` while cutting a release.** It is
  `yarn run build && npm login && yarn publish`, and yarn 1's `publish` interactively prompts for a
  *new* version, rewrites `package.json`, commits, and creates its own annotated tag. It will
  double-bump the version and leave behind a tag nobody pushed. That is where both annotated tags
  came from, and the most likely reason versions sit on npm with no tag.
- **Assuming the newest tag is the newest release.** Check npm before choosing a number.
- **Chasing tag gaps.** `v1.0.3`, `v1.1.1`, `v1.1.2` and `v1.1.10` were never tagged. Gaps are
  normal history here — move forward from the current version rather than backfilling.
- **Judging the contract from filenames.** Run the barrel diff; the `YGOCard` /
  `YGOCardWithImage` swap makes filename-based reasoning wrong.
- **Publishing a bare `## Changes` body.** Every release before `v1.3.0` is a one- or two-bullet
  `## Changes` with no PR list and no footer, and `v1.2.6` shipped `** Updated Dependencies` with a
  doubled asterisk. `v1.3.0` is the shape to follow.
- **Dropping the Full Changelog footer.** No release before `v1.3.0` has one. It is the last line
  of every release.
- **A blank line between `*` items.** It turns the entire list loose, so every item gets paragraph
  spacing. Run the `awk` check on `notes.md` whatever its origin.
- **Expecting the tag push to refresh the docs site.** Storybook deploys from `master`, not
  `release`.
