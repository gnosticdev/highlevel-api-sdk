# Repository Guidelines

Concise guide for contributing to the HighLevel API SDK. Favor clear, typed code and reproducible builds.

## Project Structure & Module Organization
- `src/`: Source TypeScript. `src/lib` holds shared utilities/errors/scopes, `src/v1` and `src/v2` expose API clients, and `src/generated` (when present) is codegen output. Avoid editing `dist/`; rebuild instead.
- `__tests__/`: Bun test suites (`*.test.ts`). Keep new tests close to related modules.
- `schemas/`: OpenAPI/JSON schema inputs that drive code generation.
- `scripts/`: Bun scripts for fetching schemas and generating client/types.
- `examples/bun-auth`: Minimal auth example; safe place to prototype usage.

## Build, Test, and Development Commands
- `bun install`: Install dependencies (Bun 1.1.x expected).
- `bun run build`: Bundle TypeScript with tsup into `dist/` (ESM and CJS).
- `bun run lint`: Biome format + lint with auto-fixes (`--write --unsafe`).
- `bun run typecheck`: TypeScript project check.
- `bun test` or `bun test --hot`: Run/watch test suites.
- `bun run generate-all`: Fetch schemas and regenerate v1/v2 types, webhooks, scopes, and interface. Use after schema updates.

## Coding Style & Naming Conventions
- Language: TypeScript ESM (`type: module`).
- Formatting enforced by Biome: 2-space indent, single quotes, semicolons only when needed, 120 line width. Run `bun run lint` before pushing.
- Naming: PascalCase for types/interfaces/classes; camelCase for variables/functions; uppercase snake_case for constants. Keep module paths flat and descriptive (`src/lib/utils.ts`, `src/v1/index.ts`).
- Prefer typed helpers over `any`; avoid non-null assertions unless documented.

## Testing Guidelines
- Runner: Bun test (with jsdom available). Tests live in `__tests__` and use `*.test.ts` naming.
- Add unit tests for new utilities and integration-like tests for client surface changes. Use `bun test --filter "<name>"` to scope during development.
- Keep tests isolated from live API calls; mock HTTP where possible.

## Commit & Pull Request Guidelines
- Commit style follows Conventional Commits (`feat: add v2 client helper`, `fix: handle auth errors`, `chore(release): ...`). Use imperative mood and keep subjects short.
- PRs should summarize intent, list key changes, and note tests run (commands). Link issues and add screenshots for developer-facing examples if UI changes occur (rare). Regenerate code (`generate-all`, `build`) only when inputs change; otherwise avoid committing rebuilt artifacts.
