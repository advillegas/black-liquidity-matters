import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "$0 to start. Real fees disclosed. We keep 0.25% of profits — only when you make money.",
};

const TIERS = [
  {
    name: "Paper",
    price: "$0",
    cadence: "free forever",
    blurb: "See the bot work before you risk a dime. No credit card.",
    cta: "Start paper trading",
    href: "/start?plan=paper",
    highlight: false,
    perks: [
      "Full algorithm, simulated capital",
      "Real-time market data",
      "All three strategies unlocked",
      "Trade log + analytics",
      "No SSN required",
    ],
  },
  {
    name: "Liquid",
    price: "$0",
    cadence: "monthly · 0.25% of profits only",
    blurb: "We eat what we kill. If the bot doesn't make you money, we don't make money.",
    cta: "Start with $25",
    href: "/start?plan=liquid",
    highlight: true,
    perks: [
      "Real money trading at regulated partner broker",
      "All three strategies (Harriet · Tubman · Garvey)",
      "Risk caps + auto stop-losses",
      "Daily P&L breakdown",
      "Tax docs at year end",
      "0.25% performance fee — only on profits",
    ],
  },
  {
    name: "Generational",
    price: "$19",
    cadence: "/ month",
    blurb: "For accounts $10k+. Lower performance fee + multi-account.",
    cta: "Talk to us",
    href: "/start?plan=generational",
    highlight: false,
    perks: [
      "Everything in Liquid",
      "0.10% performance fee (vs 0.25%)",
      "Up to 3 sub-accounts (kids, parents, you)",
      "Quarterly portfolio review with a human",
      "Beneficiary + trust setup help",
      "Direct line to founders",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="gold" className="mb-5">No subscriptions before profits.</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Pay us when you{" "}
            <span className="text-gradient-gold italic">eat</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We don&apos;t believe in monthly fees that drain accounts that aren&apos;t earning. If the bot
            isn&apos;t making you money, neither are we. Simple as that.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <Card
                key={t.name}
                className={
                  t.highlight
                    ? "relative border-brand-gold/60 bg-card glow-gold"
                    : "bg-card/60"
                }
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="gold">Most members start here</Badge>
                  </div>
                )}
                <CardContent className="flex h-full flex-col gap-6 p-7">
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">{t.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
                  </div>
                  <div className="border-y border-border py-5">
                    <p className="font-serif text-5xl tracking-tight text-foreground">
                      {t.price}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.cadence}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[14.5px] leading-snug">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-green" />
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={t.highlight ? "gold" : "outline"}
                    size="lg"
                    className="mt-auto"
                  >
                    <Link href={t.href}>
                      {t.cta} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card/40 p-8">
            <h3 className="font-serif text-2xl tracking-tight">The fine print, in plain English.</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Custody:</strong> Your money lives at a regulated US
                broker. We never touch it. SIPC insured up to $500k.
              </li>
              <li>
                <strong className="text-foreground">Fees:</strong> 0.25% of <em>profits</em> — calculated on a high-water mark.
                If the account drops, we don&apos;t take a cut until you&apos;re back above your previous high.
              </li>
              <li>
                <strong className="text-foreground">Withdrawals:</strong> Free. ACH out in 1–3 business days. No lockups.
              </li>
              <li>
                <strong className="text-foreground">Cancellation:</strong> Two taps. We don&apos;t do retention dark patterns.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
