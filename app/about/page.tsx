import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built this. Who we built it for.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="gold" className="mb-5">Why we&apos;re here.</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Built by the cousins{" "}
            <span className="text-gradient-gold italic">who finally read the playbook</span>.
          </h1>
        </Container>
      </section>

      <article className="py-20">
        <Container className="max-w-3xl space-y-7 text-lg leading-relaxed text-muted-foreground">
          <p>
            We met at a quant desk in Manhattan in 2019. Three of us, two desks apart, all from
            different sides of the country, all the only people in the room who looked like us.
          </p>
          <p className="text-foreground">
            Every morning we ran the same models that decided whose mortgage got approved, whose
            neighborhood got &ldquo;repriced,&rdquo; whose retirement got compounded into a yacht in the
            Hamptons. Every Friday we cashed bonuses our families couldn&apos;t have qualified for a
            mortgage with.
          </p>
          <p>
            One night at a bar in Bed-Stuy a friend asked us, plain: &ldquo;If y&apos;all really
            understand this, why can&apos;t I get in?&rdquo; We didn&apos;t have a good answer. The honest one
            was that the door was technically open and practically closed — minimums, jargon, white
            glove account managers, $500/hr advisors, brokers who don&apos;t return calls. The
            same gatekeeping in a nicer suit.
          </p>
          <p>
            So we left. We took the playbook with us. We built the bot we wished our parents had
            had. And we named it after the truth.
          </p>
          <p className="text-foreground">
            <strong>Black Liquidity Matters</strong> is the practical half of an argument we&apos;re tired
            of having politely. The market doesn&apos;t care who you are. The brokers who stand in front
            of it always have. We cut them out.
          </p>
          <p>
            We&apos;re a small team. We answer emails personally. We don&apos;t run ads on shows that talk
            down to us. We don&apos;t take VC money from funds that wouldn&apos;t hire us. We&apos;re building
            slow, transparent, and for keeps.
          </p>
          <p className="font-serif text-2xl text-foreground">
            Liquidity is liberation. Now let&apos;s get free, candle by candle.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link href="/start">Open your account</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/manifesto">Read the manifesto</Link>
            </Button>
          </div>
        </Container>
      </article>
    </>
  );
}
