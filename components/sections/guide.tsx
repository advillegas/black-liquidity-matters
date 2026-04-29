import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const STATS = [
  { value: "$0", label: "Trust funds in our founding team." },
  { value: "12yr", label: "Combined Wall Street experience — flipped." },
  { value: "$25", label: "Minimum to start. That's it." },
  { value: "24/7", label: "The bot doesn't sleep. Doesn't need to." },
];

export function Guide() {
  return (
    <section id="guide" className="relative py-28">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="green" className="mb-5">
              We&apos;ve been the customer they wouldn&apos;t return calls for.
            </Badge>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              We built this from <span className="text-gradient-green">inside</span> the building they wouldn&apos;t let us shop in.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our founders are former quants who worked at the same desks that bet against your
                neighborhood. We watched eight-figure bonuses get printed off models that
                <span className="text-foreground"> still wouldn&apos;t approve our cousin&apos;s mortgage</span>.
                We&apos;re done with that.
              </p>
              <p>
                You shouldn&apos;t need a finance MBA to participate in capitalism. You shouldn&apos;t need
                generational wealth to build generational wealth. The math doesn&apos;t care who you are.
                <span className="text-foreground"> So we wrote the math for the rest of us.</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-green/30 via-brand-gold/20 to-brand-red/20 blur-xl" />
            <figure className="relative rounded-3xl border border-border bg-card p-8 shadow-2xl">
              <Quote className="size-7 text-brand-gold" />
              <blockquote className="mt-4 font-serif text-2xl leading-snug text-foreground text-balance">
                &ldquo;They called us liabilities. We&apos;re calling ourselves <em>liquid</em>.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-sm">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-gold font-mono text-sm font-bold text-background">
                  BLM
                </div>
                <div>
                  <p className="font-semibold text-foreground">The BLM Founders</p>
                  <p className="text-muted-foreground">Quant desks → your portfolio.</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-7">
              <p className="font-serif text-4xl tracking-tight text-gradient-gold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
