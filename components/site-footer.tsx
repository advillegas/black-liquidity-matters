import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/brand-mark";

const COLUMNS = [
  {
    label: "Product",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/start", label: "Start Free" },
      { href: "/login", label: "Sign In" },
    ],
  },
  {
    label: "The Movement",
    links: [
      { href: "/manifesto", label: "Manifesto" },
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "Legal & Real Talk",
    links: [
      { href: "/disclosure", label: "Risk Disclosure" },
      { href: "/disclosure#satire", label: "Yes, This Is Satire" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <BrandMark />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              They redlined our neighborhoods. We&apos;re greenlining their portfolios. Algorithmic trading
              built for the 99% who never got a trust fund.
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">
              ✦ Forty acres was a promise. Compound interest is a math problem.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.label}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.label}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Black Liquidity Matters. All compound interest reserved.</p>
          <p className="font-mono">
            Built for the culture · Not financial advice · Trading involves risk
          </p>
        </div>
      </Container>
    </footer>
  );
}
