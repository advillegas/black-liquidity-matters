"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36">
      <BackgroundGlows />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge variant="gold" className="mb-6">
            <Sparkles className="size-3" />
            Reparations through compound interest
          </Badge>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
            Black Liquidity{" "}
            <span className="text-gradient-gold italic">Matters</span>.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Algorithmic trading bots built for the 99% who never got a trust fund.
            We greenline what they redlined — automatically, while you sleep, work, parent, pray.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
              <Link href="/start">
                Start trading with $25
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <Link href="/manifesto">Read the Manifesto</Link>
            </Button>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            No SSN to start · Paper trade free forever · Cancel in 2 taps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <HeroChart />
        </motion.div>
      </Container>
    </section>
  );
}

function BackgroundGlows() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: "var(--brand-gold)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--brand-green)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-60 -right-32 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--brand-red)" }}
      />
    </>
  );
}

function HeroChart() {
  // Decorative SVG candle chart — mimics an aggressive uptrend
  const candles = [
    { o: 22, c: 28, h: 30, l: 20, up: true },
    { o: 28, c: 25, h: 30, l: 23, up: false },
    { o: 25, c: 34, h: 36, l: 24, up: true },
    { o: 34, c: 31, h: 36, l: 30, up: false },
    { o: 31, c: 42, h: 44, l: 30, up: true },
    { o: 42, c: 48, h: 52, l: 41, up: true },
    { o: 48, c: 45, h: 50, l: 42, up: false },
    { o: 45, c: 56, h: 60, l: 44, up: true },
    { o: 56, c: 62, h: 66, l: 54, up: true },
    { o: 62, c: 60, h: 64, l: 58, up: false },
    { o: 60, c: 72, h: 76, l: 58, up: true },
    { o: 72, c: 80, h: 84, l: 70, up: true },
    { o: 80, c: 78, h: 84, l: 76, up: false },
    { o: 78, c: 92, h: 96, l: 76, up: true },
    { o: 92, c: 100, h: 108, l: 90, up: true },
    { o: 100, c: 95, h: 104, l: 92, up: false },
    { o: 95, c: 112, h: 118, l: 92, up: true },
    { o: 112, c: 124, h: 132, l: 110, up: true },
  ];
  const maxVal = 132;
  const minVal = 18;
  const width = 800;
  const height = 220;
  const padding = 16;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const stepX = innerW / candles.length;
  const candleW = stepX * 0.55;
  const range = maxVal - minVal;
  const yFor = (v: number) => padding + (1 - (v - minVal) / range) * innerH;

  return (
    <div className="relative mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
      <div className="mb-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 font-mono">
          <span className="text-muted-foreground">$BLM</span>
          <span className="text-candle-up">+1,488.00%</span>
          <span className="text-muted-foreground">YTD</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-muted-foreground">
          <span className="inline-flex size-2 animate-pulse-glow rounded-full bg-candle-up" />
          LIVE · ALGO ACTIVE
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-44 w-full sm:h-56">
        <defs>
          <linearGradient id="grid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-gold)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--brand-gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={width} height={height} fill="url(#grid)" />
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={padding}
            x2={width - padding}
            y1={padding + innerH * t}
            y2={padding + innerH * t}
            stroke="var(--border)"
            strokeDasharray="3 6"
            strokeOpacity="0.5"
          />
        ))}
        {candles.map((c, i) => {
          const x = padding + i * stepX + (stepX - candleW) / 2;
          const yHigh = yFor(c.h);
          const yLow = yFor(c.l);
          const yOpen = yFor(c.o);
          const yClose = yFor(c.c);
          const yBody = Math.min(yOpen, yClose);
          const hBody = Math.max(2, Math.abs(yClose - yOpen));
          const color = c.up ? "var(--candle-up)" : "var(--candle-down)";
          return (
            <g key={i}>
              <line x1={x + candleW / 2} x2={x + candleW / 2} y1={yHigh} y2={yLow} stroke={color} strokeWidth="1.5" />
              <rect x={x} y={yBody} width={candleW} height={hBody} fill={color} rx="1" />
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span>BACKTEST · 24mo · MAX DD −8.2%</span>
        <span>Sharpe 2.41 · Win 64%</span>
      </div>
    </div>
  );
}
