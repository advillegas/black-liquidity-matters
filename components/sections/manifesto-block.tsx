import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const LINES = [
  "They redlined our neighborhoods.",
  "We're greenlining their portfolios.",
  "They called our communities a risk.",
  "We're calling our community an asset class.",
  "Forty acres was a promise.",
  "Compound interest is a math problem.",
];

export function ManifestoBlock() {
  return (
    <section id="manifesto-block" className="relative overflow-hidden border-y border-border bg-background py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--brand-gold) 0 2px, transparent 2px 28px)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            The Manifesto · §1
          </p>
          <div className="mt-8 space-y-4 font-serif text-3xl leading-snug tracking-tight text-balance sm:text-5xl">
            {LINES.map((line, i) => (
              <p
                key={i}
                className={i % 2 === 0 ? "text-muted-foreground" : "text-foreground"}
              >
                {line}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="ghost" size="lg" className="text-brand-gold hover:text-brand-gold">
              <Link href="/manifesto">Read the full manifesto →</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
