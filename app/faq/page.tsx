import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Real questions. Real answers. No PR voice.",
};

const FAQ = [
  {
    q: "Is this actually for Black people, or is the name just marketing?",
    a: "The product works for anyone with an internet connection and a US bank account. The reason this brand exists, the reason it sounds the way it sounds, the reason the founders built it — that part is for the culture. Both things can be true.",
  },
  {
    q: "Is this satire, real, or both?",
    a: "Both. The voice is satire. The bot is real. We're tired of fintech marketed in the language of frat houses and yacht parties. So we built a real, regulated trading product and gave it the voice we'd actually want to hear it in.",
  },
  {
    q: "How is this different from Robinhood / Webull / etc.?",
    a: "Those let YOU trade. We trade FOR you, on a schedule, with backtested rules and hard risk caps. They make money on your trade volume; we make money only when you make money. Different incentive, different product.",
  },
  {
    q: "Do you guarantee returns?",
    a: "Absolutely not, and run from anyone who does. Trading involves risk. You can lose money. The targets shown on the site are based on historical backtests and your future results will differ. Read the disclosure.",
  },
  {
    q: "What's the smallest amount I can start with?",
    a: "$25 of real money. $0 if you want to paper trade first (and we'd love it if you did — see the bot in action before you fund anything).",
  },
  {
    q: "Where does my money actually live?",
    a: "At a regulated US partner broker. Not in our hands. We send buy/sell instructions to your account; you can withdraw or close any time. SIPC insured up to $500k.",
  },
  {
    q: "Can I lose money?",
    a: "Yes. Markets go down. Strategies go through drawdowns. We cap how bad it can get with hard stop-losses and daily drawdown limits, but no system avoids losses entirely. Anyone telling you otherwise is selling something we wouldn't sign.",
  },
  {
    q: "What if I want to stop?",
    a: "Two taps in the app. Withdraw your money. Close the account. We don't do retention dark patterns. The whole point is that you're free to leave.",
  },
  {
    q: "Are there hidden fees?",
    a: "No. 0.25% of profits, charged on a high-water mark. If the bot doesn't make you money, we don't make money. Withdrawals are free. No subscription unless you opt into Generational tier ($19/mo, lower performance fee).",
  },
  {
    q: "Why the Pan-African colors? Why the BLM tagline?",
    a: "Because we're from where we're from, and we built this for who we built it for. The colors and the voice don't change the math — but they do tell you who's at the table. If you're not at this particular table, you're still welcome to eat. Just know who set it.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This is software that executes a trading strategy on your behalf, based on rules you agreed to. Talk to a licensed advisor if you want personalized advice.",
  },
  {
    q: "How do I know you're not just gonna run off with the money?",
    a: "Because we don't have it. Your money lives at a regulated, SIPC-insured broker. We're a trading instruction layer, not a custodian. The worst we can do is shut down — your funds stay yours.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="gold" className="mb-5">Real questions. Real answers.</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Ask us <span className="text-gradient-gold italic">anything</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We don&apos;t do PR voice. If something here is unclear, email us at
            <code className="ml-1 rounded-md bg-secondary px-2 py-0.5 font-mono text-sm">hello@blackliquiditymatters.com</code>{" "}
            and we&apos;ll answer like it&apos;s your cousin asking.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 to-transparent p-8 text-center">
            <p className="font-serif text-2xl leading-snug">
              Got a question that&apos;s not here?
            </p>
            <p className="mt-2 text-muted-foreground">
              We answer every email. Personally. Sometimes within minutes.
            </p>
            <div className="mt-6">
              <Button asChild variant="gold" size="lg">
                <Link href="mailto:hello@blackliquiditymatters.com">Email us →</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
