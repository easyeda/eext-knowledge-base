# Repository Guidelines

## Project Structure & Module Organization

This repository contains an EasyEDA extension written in TypeScript. `src/index.ts` is the host-side entry point and should remain limited to EasyEDA APIs and extension lifecycle functions. The browser UI lives in `iframe/`: application code is under `iframe/src/`, HTML and CSS sit directly in `iframe/`, and bundled knowledge-base Markdown is stored in `iframe/docs/`. Translation strings belong in `locales/`; manifest translations use `locales/extensionJson/`. Build configuration is in `config/`, static screenshots and logos are in `images/`, and extension metadata is defined by `extension.json`.

## Build, Test, and Development Commands

- `npm ci` installs the locked dependency set; use Node.js 20.17 or newer.
- `npm run lint` checks TypeScript and JavaScript with ESLint.
- `npm run fix` applies safe ESLint formatting fixes.
- `npm run compile:iframe` regenerates built-in vectors and bundles the iframe UI.
- `npm run compile` clears `dist/` and bundles the extension entry point.
- `npm run build` performs both compilation stages and packages the `.eext` artifact under `build/dist/`.

Generated files such as `dist/`, `iframe/app.js`, and `iframe/src/builtin-vectors.json` must not be committed.

## Coding Style & Naming Conventions

Follow `.editorconfig`: tabs with width 4 for code and JSON; two spaces for Markdown and YAML; LF line endings. The Antfu ESLint configuration enforces single quotes and semicolons. Use `camelCase` for functions and variables, `PascalCase` for types/classes, and descriptive kebab-case Markdown filenames. Keep host code browser-independent; DOM-dependent packages belong in the iframe. Wrap EasyEDA API operations in `try/catch`, and log failures with the existing `[AI-Assistant]` prefix.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Before submitting, run `npm run lint` and `npm run build`. Manually import the produced `.eext` into EasyEDA, open both the assistant and settings windows, and verify search, localization, and any changed model/provider flow. Document this manual validation in the pull request.

## Commit & Pull Request Guidelines

History follows Conventional Commit prefixes such as `feat:`, `fix:`, `chore:`, and `ci:`. Keep each commit focused and write an imperative subject. Pull requests should explain the user-visible change, identify affected extension/iframe areas, link relevant issues, and include screenshots or GIFs for UI changes. Update `CHANGELOG.md` for user-facing changes and keep `extension.json` plus locale files synchronized when metadata or menu text changes.
