// ─── DESIGN TOKENS ───────────────────────────────────────────
// Single source of truth for colors, typography, and spacing.
// Import T from here in every component — never hardcode values.
// ─────────────────────────────────────────────────────────────

export const T = {
  // Backgrounds
  bg:        "#0f172a",
  card:      "rgba(15,23,42,0.65)",
  cardHover: "rgba(22,34,56,0.9)",

  // Borders
  border:    "rgba(148,163,184,0.08)",
  borderHov: "rgba(59,130,246,0.28)",

  // Accent
  blue:    "#3b82f6",
  blueDim: "rgba(59,130,246,0.12)",

  // Text
  text:   "#f1f5f9",
  muted:  "#64748b",
  subtle: "#475569",

  // Typography
  mono:  "'DM Mono', 'Fira Code', monospace",
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'DM Sans', 'Nunito Sans', sans-serif",

  // Border radii
  radius:   "14px",
  radiusSm: "8px",
  radiusLg: "20px",
};
