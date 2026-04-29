import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Cpu,
  LineChart,
  ShieldCheck,
  Wallet,
  Bot,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four steps. Real explanations. No finance-bro jargon. Here's exactly what the bot does with your $25.",
};

const PILLARS = [
  {
    icon: Wallet,
    title: "You fund. We don't touch it.",
    body:
      "Money lives in your brokerage account at a regulated US partner. We never hold a dollar of yours — we just send the buy/sell instructions. Cancel any time, the cash stays put.",
  },
  {
    icon: Cpu,
    title: "The algorithm does the math.",
    body:
      "Backtested mean-reversion + momentum strategies, applied to a curated basket of liquid US equities and ETFs. Not crypto. Not options. Not your cousin's pump group.",
  },
  {
    icon: ShieldCheck,
    title: "Risk caps you can see.",
    body:
      "Hard stop-losses on every position. Daily drawdown limits. You set your max risk per trade and the bot won't blink past it. Receipts in the dashboard, always.",
  },
  {
    icon: Eye,
    title: "Full transparency, full exit.",
    body:
      "Every trade logged. Every fee disclosed. No lock-ups, no penalty for leaving. We're not trying to trap you — that's what they did the first time.",
  },
];

const STRATEGIES = [
  {
    name: "The Harriet",
    risk: "Conservative",
    target: "8–14% / yr",
    body:
      "Slow and steady. Dividend ETFs + treasury rotation. Built for the long walk to freedom.",
  },
  {
    name: "The Tubman",
    risk: "Balanced",
    target: "14–22% / yr",
    body:
      "Diversified equity momentum. Rotates into strength, exits weakness. Most members start here.",
  },
  {
    name: "The Garvey",
    risk: "Aggressive",
    target: "22–40% / yr",
    body:
      "Concentrated growth + small-cap momentum. Higher volatility, higher upside. For the bold.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="gold" className="mb-5">No jargon. No gatekeeping.</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Here&apos;s what the bot{" "}
            <span className="text-gradient-gold italic">actually does</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Plain English. No CFA required. If something here sounds like marketing, ignore it and
            email us — we&apos;ll fix it.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {PILLARS.map((p) => (
              <Card key={p.title} className="bg-card/50 transition-all hover:border-brand-gold/40">
                <CardContent className="p-7">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-secondary">
                    <p.icon className="size-6 text-brand-gold" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
              The Strategies
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              Three named after people who beat the system.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Pick one. Switch any time. The bot rebalances on the next open.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {STRATEGIES.map((s) => (
              <Card key={s.name} className="bg-background relative overflow-hidden">
                <CardContent className="flex h-full flex-col gap-5 p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl tracking-tight">{s.name}</h3>
                    <Badge variant="green">{s.risk}</Badge>
                  </div>
                  <div className="flex items-baseline gap-2 border-b border-border pb-4">
                    <LineChart className="size-4 text-brand-gold" />
                    <span className="font-mono text-sm text-muted-foreground">Target</span>
                    <span className="ml-auto font-mono text-base font-semibold text-foreground">
                      {s.target}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Targets are based on backtests. Past performance is not future performance.
            See <Link href="/disclosure" className="underline hover:text-brand-gold">disclosure</Link>.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Badge variant="green" className="mb-5">
                <Bot className="size-3" />
                Inside the bot
              </Badge>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                It&apos;s not magic. It&apos;s <span className="text-gradient-green">discipline</span>, automated.
              </h2>
              <ul className="mt-7 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                {[
                  "Scans ~500 liquid US equities + ETFs every market minute.",
                  "Ranks them on momentum, volatility, and trend strength.",
                  "Buys what's working, sells what isn't. Doesn't fall in love.",
                  "Caps any one position at 15% of your portfolio.",
                  "Hard stop-loss on every entry — your downside has a floor.",
                  "Logs every trade with reasoning to your dashboard.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-card/60">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground">trade_log.csv</span>
                  <span className="inline-flex items-center gap-2 text-candle-up">
                    <span className="size-1.5 animate-pulse-glow rounded-full bg-candle-up" />
                    LIVE
                  </span>
                </div>
                <pre className="overflow-x-auto rounded-md bg-background p-4 font-mono text-[11.5px] leading-relaxed text-muted-foreground">
{`09:31  BUY   AAPL   12 sh  @ $182.40   reason: momo_3d
09:34  BUY   QQQ     3 sh  @ $445.10   reason: trend_up
09:48  SELL  XLF     8 sh  @ $39.20    reason: stop_hit
10:02  BUY   VTI     5 sh  @ $263.50   reason: rotation
10:14  SELL  AAPL    4 sh  @ $183.10   reason: tp_partial
10:28  BUY   MSFT    2 sh  @ $410.20   reason: breakout
11:02  HOLD  ALL              note: regime=risk_on
12:30  SELL  QQQ     3 sh  @ $446.80   reason: tp_full
14:55  BUY   IWM     6 sh  @ $208.40   reason: small_cap_strength
15:58  EOD   PnL +$41.20  cash 14.2%`}
                </pre>
                <div className="mt-3 flex justify-between font-mono text-[11px] text-muted-foreground">
                  <span>Today: +$41.20</span>
                  <span>30d: +$1,108.40</span>
                  <span className="text-candle-up">Win rate: 64%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 flex justify-center">
            <Button asChild variant="gold" size="xl">
              <Link href="/start">
                Try it on paper — free
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
