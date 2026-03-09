---
name: Git Commits
model: inherit
description: Specialises in generating and reviewing conventional commit messages.  Use this agent whenever you need to write, format, or validate a git  commit message against project standards.
---

# Git Commit Messages

## Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

## Types

| Type | Use for |
|---|---|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `refactor` | Code change that isn't a fix or feature |
| `test` | Adding or updating tests |
| `chore` | Build, config, dependency updates |
| `docs` | Documentation only |
| `perf` | Performance improvement |
| `style` | Formatting, missing semicolons — no logic change |

## Scopes

Use the component or area being changed:

`weather`, `nav`, `hero`, `about`, `expertise`, `projects`, `contact`, `payload`, `styles`, `lib`, `e2e`, `config`

## Rules

- **Subject line: 50 characters max** — if you can't fit it, your change is too broad
- **Imperative mood** — "add", "fix", "remove" not "added", "fixes", "removed"
- **No full stop** at the end of the subject line
- **Body: explain why, not what** — the diff already shows what changed
- **One logical change per commit** — don't bundle unrelated changes
- **Never commit with broken tests** — if tests are failing, fix them first or stash

## Examples

```
feat(weather): add Open-Meteo geolocation fetch on mount

fix(nav): correct active link state on scroll past hero

refactor(weather): extract wind speed normalisation into lib/weather

test(lib): add unit tests for deriveTimeOfDay utility

chore(config): update tsconfig to enforce strict null checks

perf(weather): throttle canvas redraw to requestAnimationFrame
```

## What to Never Do

- `fix: stuff` — too vague
- `feat: added lots of things and also fixed a bug` — too broad, split it
- `WIP` or `temp` commits pushed to main
- Commit messages written in past tense
- Skipping the scope when it's obvious what area is affected
