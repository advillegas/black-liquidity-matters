import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Welcome back.",
};

export default function LoginPage() {
  return (
    <section className="py-24">
      <Container className="max-w-md">
        <Card className="bg-card/80 backdrop-blur">
          <CardContent className="p-8">
            <h1 className="font-serif text-3xl tracking-tight">Welcome back.</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              New here? <Link href="/start" className="text-brand-gold hover:underline">Open an account</Link>
            </p>

            <form className="mt-7 space-y-4" action="/api/login" method="post">
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
                    className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <Link href="/forgot" className="text-xs text-muted-foreground hover:text-brand-gold">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
                  />
                </div>
              </div>

              <Button type="submit" variant="gold" size="lg" className="mt-2 w-full">
                Sign in <ArrowRight className="size-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
