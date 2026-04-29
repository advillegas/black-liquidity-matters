import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "The Manifesto",
  description: "Why Black Liquidity Matters exists. Long version.",
};

const SECTIONS = [
  {
    n: "I.",
    title: "On the receipt the country still hasn't paid.",
    body: [
      "In 1865, a promise: forty acres and a mule. The acres never came. The mule never came. What came instead was sharecropping, redlining, GI Bills our grandfathers couldn't redeem, mortgages our grandmothers couldn't sign, neighborhoods bulldozed for highways nobody asked for.",
      "The bill is overdue. Compound interest is the only language the system understands, and we intend to speak it fluently.",
    ],
  },
  {
    n: "II.",
    title: "On why the algorithm doesn't care, and why that's the point.",
    body: [
      "The market doesn't know your name. Doesn't know your zip code. Doesn't know whether the loan officer side-eyed your application or whether the cab passed you on 5th. The market only knows price action. That is — for once — a feature, not a bug.",
      "The brokers who stand in front of the market are a different story. So we cut them out. The algorithm is not your friend. It is not your enemy. It is a tool. We're handing it to the people who were locked out of the toolbox.",
    ],
  },
  {
    n: "III.",
    title: "On what 'liquidity' actually means.",
    body: [
      "Liquidity is the ability to move. Liquidity is the ability to leave. Liquidity is choosing the school, the doctor, the city, the no.",
      "When James Baldwin said \u201chow much time do you want for your progress,\u201d he was talking about liquidity. When Nina Simone said \u201cyou don\u2019t have to live next to me — just give me my equality,\u201d she was talking about liquidity. Black Liquidity Matters because the absence of it has been the design of every system you were born into.",
    ],
  },
  {
    n: "IV.",
    title: "On generational wealth as a protocol, not a miracle.",
    body: [
      "There is no miracle. There is only math, time, and the quiet accumulation of decisions made on your behalf while you sleep. The same compound interest that built the Vanderbilts is on the table for the Vasquezes, the Williams, the Washingtons. It always was. They just made the table hard to find.",
      "We are the map. The bot is the car. The road was paved by your grandparents whether the country thanked them for it or not.",
    ],
  },
  {
    n: "V.",
    title: "On what we are not.",
    body: [
      "We are not a get-rich-quick scheme. We are not a meme stock. We are not crypto bros. We are not a podcast. We are not a course. We are not a hustle. We are not your cousin who keeps DMing you about Forex.",
      "We are software. Boring, well-tested, backtested software. The interesting part is who it's built for.",
    ],
  },
  {
    n: "VI.",
    title: "On what we are.",
    body: [
      "We are reparations through compound interest. We are the first generation that can teach the algorithm whose side to take. We are the cousins, aunties, brothers, friends who finally read the Wall Street playbook in public, out loud, in plain English.",
      "Black Liquidity Matters. Now let's get free, dollar by dollar, candle by candle, generation by generation.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="gold" className="mb-5">§ Manifesto · v1.0</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            The <span className="text-gradient-gold italic">Manifesto</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Read it twice. Send it to your cousin. Print it on a t-shirt. The bot is the practical
            half of an argument we&apos;re tired of having politely.
          </p>
        </Container>
      </section>

      <article className="py-20">
        <Container className="max-w-3xl">
          {SECTIONS.map((s) => (
            <section key={s.n} className="mb-14 last:mb-0">
              <p className="font-mono text-sm font-bold tracking-widest text-brand-gold">
                {s.n}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                {s.title}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 to-transparent p-8 text-center">
            <p className="font-serif text-2xl leading-snug text-balance">
              &ldquo;They called us liabilities. We&apos;re calling ourselves <em>liquid</em>.&rdquo;
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link href="/start">Open my account →</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
