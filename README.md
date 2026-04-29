# Black Liquidity Matters

> Algorithmic trading bots built for the 99% who never got a trust fund.
> We greenline what they redlined. Reparations through compound interest.

A satirical-but-serious fintech landing site. Real product framing, real risk disclosures, real
StoryBrand-framework copy — wrapped in a brand voice built for the audience Wall Street has spent
a hundred years marketing past.

---

## Stack

- **Next.js 16** (App Router, Turbopack, RSC)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@theme inline` + OKLCH tokens)
- **shadcn/ui patterns** (CVA + Radix primitives + `data-slot` API)
- **Framer Motion** for hero/section motion
- **next-themes** dark-first theme provider
- **Lucide** icons + **DM Serif Display** display font + **Geist** body/mono

Design language adapted from [`neroai-com/design`](https://github.com/neroai-com/design) — Tailwind
v4 + OKLCH perceptual color tokens — recolored to a Pan-African + Liberty Gold palette.

## Quick start

```bash
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
```

## Project layout

```
app/
  layout.tsx            # Root layout · fonts · ThemeProvider · ticker · nav · footer
  page.tsx              # Home — composed StoryBrand sections
  globals.css           # OKLCH tokens · Tailwind v4 @theme · brand utilities
  opengraph-image.tsx   # Dynamic 1200×630 OG image
  manifesto/page.tsx    # The full brand manifesto
  how-it-works/page.tsx # Product mechanics, strategies, sample trade log
  pricing/page.tsx      # Three tiers · "we eat what we kill" model
  faq/page.tsx          # 12 plain-English Q&A
  about/page.tsx        # Why & who
  disclosure/page.tsx   # Legal risk disclosure + the "is this satire?" answer
  start/page.tsx        # Signup
  login/page.tsx        # Sign in

components/
  brand-mark.tsx        # Logo · short + wordmark variants
  site-nav.tsx          # Sticky, blurred, scroll-aware nav
  site-footer.tsx       # Three-column footer
  ticker-tape.tsx       # Animated marquee with satirical tickers
  theme-provider.tsx    # next-themes wrapper
  sections/             # StoryBrand-framework section components
    hero.tsx            # Character + tagline + decorative candle chart
    problem.tsx         # External · Internal · Philosophical
    guide.tsx           # Empathy + Authority + stat block
    plan.tsx            # 3-step plan
    stakes.tsx          # Failure (without us) vs Success (with us)
    manifesto-block.tsx # Mid-page rallying cry
    testimonials.tsx    # Social proof
    final-cta.tsx       # Closing call
  ui/
    button.tsx          # CVA variants: default · gold · green · outline · ghost · link · destructive
    card.tsx            # Card · Header · Title · Description · Content · Footer
    badge.tsx           # default · gold · green · red · outline
    accordion.tsx       # Radix accordion (FAQ)
    container.tsx       # Max-width wrapper

lib/
  utils.ts              # cn() — clsx + tailwind-merge
```

## Design tokens

Defined in `app/globals.css` via OKLCH for perceptually uniform color across light/dark.

Brand colors:

| Token              | Value                       | Used for                       |
| ------------------ | --------------------------- | ------------------------------ |
| `--brand-green`    | `oklch(0.72 0.18 145)`      | Pan-African green · candle up  |
| `--brand-gold`     | `oklch(0.82 0.16 85)`       | Liberty gold · primary accent  |
| `--brand-red`      | `oklch(0.65 0.22 25)`       | Pan-African red · destructive  |
| `--candle-up` / `--candle-down` | green / red       | Trading chart candles          |

Dark mode is the canonical theme; light mode is supported but rarely used (brand is dark-first).

## StoryBrand framework

The home page implements Donald Miller's StoryBrand 7 framework, adapted:

1. **Character** — the hero (visitor) introduced via `Hero`
2. **Problem** — three layers (external/internal/philosophical) in `Problem`
3. **Guide** — empathy + authority via `Guide`
4. **Plan** — three steps in `Plan`
5. **Direct CTA** — every section has one
6. **Failure** — the "without us" column in `Stakes`
7. **Success** — the "with us" column in `Stakes`

Plus a brand reinforcement layer (`ManifestoBlock`) and social proof (`Testimonials`).

## Tone calibration

Satire on the **brand voice**, real on the **product**, dead serious on the **thesis**. The
`/disclosure#satire` section spells this out explicitly so nobody walks away confused.

## Deployment

Built for [Vercel](https://vercel.com). Push to `main` → preview deploy. Promote to production
from the Vercel dashboard or via `vercel --prod`.

```bash
vercel link
vercel deploy --prod
```

Suggested env vars when you wire up the real backend:

```
DATABASE_URL=...
BROKER_API_KEY=...
BROKER_API_SECRET=...
NEXT_PUBLIC_POSTHOG_KEY=...
```

## License

All rights reserved — for now. Ask before you fork.
