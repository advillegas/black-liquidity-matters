import { Container } from "@/components/ui/container";
import { TrendingDown, TrendingUp } from "lucide-react";

const FAILURE = [
  "Inflation eats your savings. By design.",
  "Friday's check clears. By Monday it's gone.",
  "Your cousin's still asking when you gonna get into Bitcoin.",
  "Compound interest works for somebody. Just not you.",
  "Your kids inherit the same starting line you got.",
];

const SUCCESS = [
  "Mama's mortgage paid off. Early.",
  "Kids in college. No co-signer required.",
  "A retirement that doesn't depend on permission.",
  "Generational wealth without generational suffering.",
  "Money that works overtime so you don't have to.",
];

export function Stakes() {
  return (
    <section id="stakes" className="relative py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            The Stakes
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Two futures.{" "}
            <span className="italic text-muted-foreground">Pick one.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Failure */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/5 to-transparent p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-red/15">
                <TrendingDown className="size-5 text-brand-red" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-brand-red">
                Without us
              </h3>
            </div>
            <p className="font-serif text-2xl leading-tight tracking-tight">
              You stay running on the same hamster wheel they sold your grandparents.
            </p>
            <ul className="mt-6 space-y-3">
              {FAILURE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-green/40 bg-gradient-to-br from-brand-green/10 to-brand-gold/5 p-8 glow-green">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-green/20">
                <TrendingUp className="size-5 text-brand-green" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-brand-green">
                With us
              </h3>
            </div>
            <p className="font-serif text-2xl leading-tight tracking-tight">
              You start a chain reaction your great-great-grandkids will toast to.
            </p>
            <ul className="mt-6 space-y-3">
              {SUCCESS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
