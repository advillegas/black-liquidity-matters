import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  short?: boolean;
}

export function BrandMark({ className, short = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-serif text-lg leading-none tracking-tight",
        className
      )}
    >
      <span
        aria-hidden
        className="relative inline-flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-green via-brand-gold to-brand-red p-[1.5px] transition-transform group-hover:rotate-3"
      >
        <span className="flex size-full items-center justify-center rounded-[5px] bg-background font-mono text-[11px] font-bold text-brand-gold">
          $
        </span>
      </span>
      {short ? (
        <span className="font-mono text-base font-bold tracking-tight">
          BLM<span className="text-brand-gold">.</span>
        </span>
      ) : (
        <span className="text-foreground">
          Black Liquidity{" "}
          <span className="text-gradient-gold font-semibold">Matters</span>
        </span>
      )}
    </Link>
  );
}
