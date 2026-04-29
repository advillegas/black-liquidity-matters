const TICKERS = [
  { sym: "REPARATIONS", chg: "+412.00%", up: true },
  { sym: "FORTYACRES", chg: "+1865.00%", up: true },
  { sym: "REDLINE", chg: "−68.20%", up: false },
  { sym: "MAMA-MORTGAGE", chg: "PAID", up: true },
  { sym: "TRUSTFUND", chg: "0.00", up: false },
  { sym: "GENERATIONAL.WEALTH", chg: "+∞", up: true },
  { sym: "STUDENT.DEBT", chg: "−92.40%", up: true },
  { sym: "BLM.LIQUIDITY", chg: "+1488.00%", up: true },
  { sym: "GENTRIFICATION", chg: "−45.10%", up: true },
  { sym: "WHITE.FRAGILITY", chg: "−12.10%", up: true },
  { sym: "POLICE.BUDGET", chg: "−31.00%", up: true },
  { sym: "HARRIET.20", chg: "ATH", up: true },
  { sym: "CRT.INDEX", chg: "+24.50%", up: true },
  { sym: "VENMO.PLUG", chg: "+2.00%", up: true },
];

export function TickerTape() {
  const items = [...TICKERS, ...TICKERS];
  return (
    <div className="relative w-full overflow-hidden border-b border-border bg-card/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-ticker py-2.5 font-mono text-[11px] uppercase tracking-wider">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-2 px-5">
            <span className="text-muted-foreground">{t.sym}</span>
            <span className={t.up ? "text-candle-up" : "text-candle-down"}>{t.chg}</span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
