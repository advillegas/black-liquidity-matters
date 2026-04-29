import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "First time I saw the bot close a green trade while I was at work, I called my mama. Now she got a paid-off mortgage and a new view.",
    name: "Marcus T.",
    where: "Atlanta, GA",
    role: "Bus driver · BLM member since beta",
  },
  {
    quote:
      "They told us in school the stock market was for rich people. The bot made me $341 last month while I slept. School lied.",
    name: "Janelle B.",
    where: "Detroit, MI",
    role: "Nurse · Started with $50",
  },
  {
    quote:
      "I'm 19 and I have a brokerage account that's compounding faster than my student loans. That's what reparations look like to me.",
    name: "DeShawn R.",
    where: "Houston, TX",
    role: "College sophomore",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            The Receipts
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            For the culture, <span className="italic text-muted-foreground">by the culture</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="flex h-full flex-col">
              <CardContent className="flex h-full flex-col gap-6 p-7">
                <p className="text-[17px] font-medium leading-snug text-foreground text-balance">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green via-brand-gold to-brand-red font-mono text-xs font-bold text-background">
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground">{t.role} · {t.where}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Composite testimonials inspired by beta cohort. See <a href="/disclosure" className="underline hover:text-brand-gold">disclosure</a>.
        </p>
      </Container>
    </section>
  );
}
