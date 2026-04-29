import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { TickerTape } from "@/components/ticker-tape";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = DM_Serif_Display({
  variable: "--font-asar",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackliquiditymatters.com"),
  title: {
    default: "Black Liquidity Matters — Algorithmic Trading For The 99%",
    template: "%s · Black Liquidity Matters",
  },
  description:
    "Algorithmic trading bots built for the people Wall Street forgot. We greenline what they redlined. Reparations through compound interest.",
  keywords: [
    "algorithmic trading",
    "trading bots",
    "wealth building",
    "Black wealth",
    "fintech",
    "passive income",
    "stock trading automation",
  ],
  authors: [{ name: "Black Liquidity Matters" }],
  openGraph: {
    type: "website",
    title: "Black Liquidity Matters",
    description:
      "Algorithmic trading bots built for the people Wall Street forgot. Reparations through compound interest.",
    siteName: "Black Liquidity Matters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Liquidity Matters",
    description: "Reparations through compound interest. Trading bots for the 99%.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} antialiased min-h-screen flex flex-col bg-background text-foreground grain`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TickerTape />
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
