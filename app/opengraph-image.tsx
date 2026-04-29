import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Black Liquidity Matters — Algorithmic trading for the 99%";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(80% 60% at 50% 0%, #2a2300 0%, #0a0a0a 60%, #000 100%)",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, #00aa55, #d4a017 50%, #c0392b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4a017",
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 7,
                background: "#0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              $
            </div>
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            BLM<span style={{ color: "#d4a017" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -1.5,
              fontStyle: "italic",
              maxWidth: 1000,
            }}
          >
            Black Liquidity{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a017, #f5e6a3)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Matters
            </span>
            .
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Algorithmic trading bots for the 99% who never got a trust fund.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          <span>Reparations through compound interest</span>
          <span>blackliquiditymatters.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
