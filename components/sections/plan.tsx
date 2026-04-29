import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Sign up in 90 seconds.",
    body:
      "Email + password. No SSN to start. Paper trade free forever — see the bot work before you risk a dime.",
  },
  {
    n: "02",
    title: "Connect $25 (or more, no judgment).",
    body:
      "We don't have minimums for show. The bot scales with what you can afford. Cash App, ACH, debit — bring it how you got it.",
  },
  {
    n: "03",
    title: "Let the algorithm cook.",
    body:
      "Backtested strategies trade while you sleep, work, parent, pray. You watch the candles. We handle the math. Your mama eventually moves.",
  },
];

export function Plan() {
  return (
    <section id="plan" className="relative border-y border-border bg-card/30 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            The Plan
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Three steps. <span className="italic text-muted-foreground">No fine print.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            If your barber can talk you through a fade, we can talk you through this.
          </p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-full top-12 hidden h-px w-6 -translate-x-3 bg-border md:block"
                />
              )}
              <div className="h-full rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-2xl">
                <div className="font-mono text-sm font-bold text-brand-gold">STEP {s.n}</div>
                <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="gold" size="xl">
            <Link href="/start">
              Start with $25 — let&apos;s eat
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
