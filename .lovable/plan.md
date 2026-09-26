# Finish the Sinza build

The site (Home, Donate, Apply, Partner) is built and tested. One issue remains before it's clean.

## What to do

1. **Fix the header navigation typecheck error** — in `src/components/site-header.tsx`, the "Our work" link passes a `hash` value that can be empty, which the strict TypeScript setting rejects. Omit the hash entirely when a link doesn't have one (both the desktop and mobile menus).
2. **Confirm the build is clean** — check the build log shows no errors and the preview still loads all four pages.

## After that

- Remind you how to push the code to GitHub (Plus menu → GitHub → Connect project).
- The placeholder stats and story on the home page still need your real figures whenever you're ready.
