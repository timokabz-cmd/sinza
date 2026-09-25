<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- Design system lives entirely in `src/styles.css` as oklch semantic tokens (Emerald Prestige: deep emerald primary, gold accent, ivory background); components never hardcode colors.
- Fonts (Lora display + Nunito Sans body) load via `<link>` in `src/routes/__root.tsx`, never via CSS `@import` of a remote URL.
- Lovable Cloud is intentionally not enabled: the owner will connect it manually later. All forms (donate, apply, partner) are front-end only with success states — wire persistence + notifications when Cloud is connected.
- Impact stats and testimonials on the home page are placeholders the owner must replace with real figures and stories.
