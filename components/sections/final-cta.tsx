import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 60%, var(--brand-gold), transparent 70%)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Liquidity is{" "}
            <span className="text-gradient-gold italic">liberation</span>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Twenty-five dollars and ninety seconds. That&apos;s the entire price of admission to a
            future where the math finally compounds for you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link href="/start">
                Start trading — free forever
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/how-it-works">How it works</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
