# Roadmap — Sinza website

## Done
- Design preferences locked: Emerald Prestige palette (#064e3b / #0d7a5f / #c9a84c / #f5f0e0), Lora + Nunito Sans, hero + card grid.
- Features: Donate, Mothers apply for support, Partner / volunteer.
- Hero + programme + story photography generated.
- Design system (src/styles.css tokens, fonts via __root).
- Routes: /, /donate, /apply, /partner (each with head() metadata).
- Header hash-link typecheck fixed; build verified OK, all pages tested.

## Open
- [ ] Replace placeholder impact stats and Grace's story with real figures (waiting on user).
- [ ] User to connect GitHub (Plus menu → GitHub) and Lovable Cloud when ready.

## Notes
- Backend (Lovable Cloud) intentionally NOT enabled — user will connect it manually later. Forms are front-end only for now (success state, no persistence). Wire forms to Cloud when it's connected.
