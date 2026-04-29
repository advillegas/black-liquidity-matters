import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Start",
  description: "Open your account in 90 seconds. Paper trade free.",
};

export default function StartPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--brand-gold)" }}
      />
      <Container className="relative">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="gold" className="mb-5">90 seconds. No SSN to start.</Badge>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Open your account.
              <br />
              <span className="text-gradient-gold italic">Let the bot eat.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Email and a password — that&apos;s the entire signup. Paper trade as long as you want.
              Fund with $25 when you&apos;re ready.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Free forever to paper trade",
                "$25 minimum to fund real money",
                "Cancel in two taps, no questions",
                "SIPC insured · regulated US broker",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                  <CheckCircle2 className="size-5 text-brand-green" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-card/80 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl tracking-tight">Create your account</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Already have one? <Link href="/login" className="text-brand-gold hover:underline">Sign in</Link>
              </p>

              <form className="mt-7 space-y-4" action="/api/start" method="post">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@yourdomain.com"
                      className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      minLength={8}
                      required
                      placeholder="At least 8 characters"
                      className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                    />
                  </div>
                </div>

                <Button type="submit" variant="gold" size="lg" className="mt-2 w-full">
                  Create account <ArrowRight className="size-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By creating an account you agree to our{" "}
                  <Link href="/terms" className="underline hover:text-foreground">terms</Link> and{" "}
                  <Link href="/disclosure" className="underline hover:text-foreground">risk disclosure</Link>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
