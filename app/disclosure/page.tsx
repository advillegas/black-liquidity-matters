import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description: "Plain-English risk disclosure + the satire question, answered.",
};

export default function DisclosurePage() {
  return (
    <>
      <section className="border-b border-border bg-card/30 py-20">
        <Container className="text-center">
          <Badge variant="red" className="mb-5">Read this. Twice.</Badge>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Risk Disclosure & <span className="text-gradient-gold italic">Honesty</span>.
          </h1>
        </Container>
      </section>

      <article className="py-20">
        <Container className="max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-3xl tracking-tight">The boring legal part</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Black Liquidity Matters (&ldquo;BLM,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates a software
                platform that connects to your account at a third-party, FINRA/SEC-regulated US broker
                and submits trade instructions on your behalf according to a strategy you select.
              </p>
              <p>
                <strong className="text-foreground">We do not custody your funds.</strong> Your money
                lives at the regulated broker, in your name, and is SIPC insured up to $500,000. We
                cannot withdraw from your account.
              </p>
              <p>
                <strong className="text-foreground">Trading involves risk.</strong> You may lose money,
                including your entire investment. Past performance — including all backtests, charts,
                and target return ranges shown on this site — is not indicative of future results.
                Markets can decline. Strategies can underperform. Algorithms can have bad weeks,
                months, or years.
              </p>
              <p>
                BLM is not a registered investment advisor. Nothing on this site is personalized
                investment advice. The strategies described are rules-based and do not consider your
                individual financial situation, tax position, or goals. If you need personalized
                advice, consult a licensed advisor.
              </p>
              <p>
                Performance fees (0.25% of profits, calculated on a high-water mark) are deducted at
                month-end from any net positive performance. There is no fee on a flat or losing
                month. No subscription is required for the Liquid tier.
              </p>
              <p>
                You may close your account and withdraw your funds at any time, free of charge, with
                ACH settlement in 1–3 business days.
              </p>
            </div>
          </section>

          <section id="satire">
            <h2 className="font-serif text-3xl tracking-tight">
              &ldquo;Wait — is this satire or for real?&rdquo;
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-foreground">Both. On purpose.</p>
              <p>
                The <strong>brand voice</strong> is satire. We named ourselves &ldquo;Black Liquidity
                Matters&rdquo; because Wall Street has spent a hundred years marketed in the language of
                frat houses, yacht parties, and the word &ldquo;alpha.&rdquo; That marketing is itself a
                gate. We&apos;re using a different language to point at the same product, on purpose.
              </p>
              <p>
                The <strong>product</strong> is real. Regulated broker partner. Real trades. Real risk
                caps. Real performance fees. Real SIPC insurance. Real money in, real money out, real
                tax docs at year end.
              </p>
              <p>
                The <strong>thesis</strong> is dead serious. Generational wealth gaps in the US are not
                accidents. They are the cumulative output of policy decisions, redlining, GI Bill
                exclusion, sundown towns, and a hundred more inputs that compounded — the wrong way —
                for four hundred years. The same compound interest math that built the gap can be run
                in the other direction. We&apos;re building the tool that does it, automatically,
                accessibly, transparently.
              </p>
              <p>
                If the voice makes you laugh and the product makes you money, that&apos;s exactly the
                outcome we&apos;re aiming for.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl tracking-tight">Plain English summary</h2>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
              <li>• You can lose money. Don&apos;t invest what you can&apos;t afford to lose.</li>
              <li>• We are software, not a financial advisor.</li>
              <li>• Your money is at a regulated broker, not with us.</li>
              <li>• You can leave at any time, free.</li>
              <li>• We make money only when you make money.</li>
              <li>• Past performance is not future performance.</li>
            </ul>
          </section>
        </Container>
      </article>
    </>
  );
}
