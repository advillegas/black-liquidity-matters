# Repo guidance for AI coding agents

## Purpose

This is a satirical-but-serious fintech landing site for **Black Liquidity Matters** — algorithmic
trading bots framed for the audience Wall Street has historically marketed past. The brand voice
is satire, the product framing is real, the underlying thesis (closing generational wealth gaps via
compound interest) is dead serious. Keep all three layers intact when editing.

## Tone

- **Confident, not cocky.** Punch up at the systems, never down at the audience.
- **Plain English over jargon.** If a finance term shows up, explain it.
- **Cultural specificity is a feature**, not decoration. Don't sanitize references; do refuse anything
  that crosses into stereotype, demeans the audience, or punches sideways.
- **Anti-oppression narrative is the spine.** Every page should reinforce that the product exists
  because the system was built without a chair for the customer.

## Stack

Next.js 16 App Router · React 19 · Tailwind v4 (OKLCH tokens, `@theme inline`) · shadcn-style
components with `data-slot` API and CVA variants · Framer Motion · next-themes (dark-first).

## File conventions

- `components/ui/*` — primitives only (Button, Card, Badge, Accordion, Container). No marketing copy.
- `components/sections/*` — full-bleed marketing sections, one per StoryBrand step.
- `app/[route]/page.tsx` — pages compose sections.
- All colors via CSS variables (`--brand-green`, `--brand-gold`, `--brand-red`, `--candle-up/down`)
  — never hardcode hex.
- Use `Container` for max-width + horizontal padding. Don't reinvent it.
- Use `cn()` from `@/lib/utils` for conditional classes.

## Adding a new section

1. Create `components/sections/your-section.tsx` (server component if possible).
2. Wrap content in `<Container>`.
3. Use `font-serif` + `tracking-tight` for headlines.
4. Lead with a `font-mono text-xs uppercase tracking-widest text-brand-gold` eyebrow.
5. Compose into `app/page.tsx` (or another page).

## Adding a new page

1. Create `app/your-route/page.tsx`.
2. Export a `Metadata` object.
3. Open with a hero band: `border-b border-border bg-card/30 py-20`.
4. Use `Badge variant="gold"` for the eyebrow.
5. Headline: `font-serif text-5xl ... sm:text-6xl md:text-7xl` with one italic gold-gradient word.

## What not to do

- Don't introduce light-mode-only colors. Dark is canonical.
- Don't drop the satire in legal/disclosure/FAQ — those should be plain, direct, not cute.
- Don't add fees, lockups, or dark patterns to copy. The "we eat what we kill" model is non-negotiable.
- Don't make claims of guaranteed returns. Anywhere. Period.

## Build & verify

```bash
npm run lint
npm run build
```

Build must pass with zero errors before merging.
