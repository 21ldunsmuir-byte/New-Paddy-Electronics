import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "New Paddy Electronics | Phone & Laptop Repairs Dublin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#EA580C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            NP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 20 }}>
              New Paddy Electronics
            </span>
            <span style={{ color: "#71717A", fontSize: 14, marginTop: 2 }}>
              Est. 2008 · Dublin, Ireland
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Dublin&apos;s Trusted
          <br />
          Electronics Repair
          <br />
          <span style={{ color: "#EA580C" }}>Specialists.</span>
        </div>

        {/* Subtext */}
        <div style={{ color: "#A1A1AA", fontSize: 22, lineHeight: 1.5, maxWidth: 680 }}>
          iPhones, laptops, MacBooks & game consoles — repaired fast with genuine parts.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 52,
            paddingTop: 40,
            borderTop: "1px solid #27272A",
          }}
        >
          {[
            { value: "16+", label: "Years in Dublin" },
            { value: "2", label: "Branches" },
            { value: "10,000+", label: "Repairs Done" },
            { value: "100%", label: "Genuine Parts" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: 28 }}>{value}</span>
              <span style={{ color: "#52525B", fontSize: 14, marginTop: 4 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
