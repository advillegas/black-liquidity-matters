import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Lock, Banknote } from "lucide-react";

const PROBLEMS = [
  {
    icon: Building2,
    label: "External",
    title: "The system was built without a chair for you.",
    body:
      "Wall Street charges $2,500/hr for advice your zip code can't afford. Median Black household wealth is $24K. Median white? $189K. That gap isn't a coincidence — it's a 400-year compound interest calculation working the wrong direction.",
  },
  {
    icon: Lock,
    label: "Internal",
    title: "You're tired of being told to 'just budget better.'",
    body:
      "Tired of finance bros explaining the S&P like you've never heard of it. Tired of apps gamifying spare change while their founders buy second houses with your data. Tired of the gatekeepers who set the rules, then sell you the playbook.",
  },
  {
    icon: Banknote,
    label: "Philosophical",
    title: "Generational poverty is a policy. Wealth should be a protocol.",
    body:
      "If they can write algorithms that decide whether you get a loan, we can write algorithms that decide what you own. The market doesn't care what you look like. The brokers who stand in front of it sure do — so we cut them out.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative border-y border-border bg-card/30 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            The Problem
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            The market wasn&apos;t built for you. <br className="hidden sm:inline" />
            <span className="text-muted-foreground italic">So we rebuilt it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Three layers deep. None of them your fault. All of them your inheritance.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Card key={p.label} className="bg-background/60 transition-all hover:border-brand-gold/40">
              <CardContent className="flex h-full flex-col gap-4 p-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                    <p.icon className="size-5 text-brand-gold" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {p.label} problem
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
