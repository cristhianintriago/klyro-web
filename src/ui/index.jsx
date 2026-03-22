// ─── UI PRIMITIVES ────────────────────────────────────────────
// Atomic, reusable UI components with no business logic.
// Import individually: import { Tag, Badge } from "../ui"
// ─────────────────────────────────────────────────────────────

import { useRef, useState, useEffect } from "react";
import { T } from "../tokens";
import { useInView, useHover } from "../hooks";

// ── Tag ──────────────────────────────────────────────────────
export function Tag({ children }) {
  return (
    <span style={{
      background:    "rgba(148,163,184,0.06)",
      border:        "1px solid rgba(148,163,184,0.1)",
      borderRadius:  "6px",
      padding:       "3px 10px",
      fontSize:      "0.7rem",
      color:         T.subtle,
      fontFamily:    T.mono,
      letterSpacing: "0.06em",
    }}>
      {children}
    </span>
  );
}

// ── Badge ────────────────────────────────────────────────────
export function Badge({ label, color }) {
  return (
    <span style={{
      background:    `${color}14`,
      border:        `1px solid ${color}30`,
      color,
      borderRadius:  "100px",
      padding:       "3px 10px",
      fontSize:      "0.68rem",
      fontFamily:    T.mono,
      letterSpacing: "0.08em",
      fontWeight:    600,
      whiteSpace:    "nowrap",
    }}>
      {label}
    </span>
  );
}

// ── SectionLabel ─────────────────────────────────────────────
export function SectionLabel({ text }) {
  return (
    <div style={{
      fontFamily:    T.mono,
      fontSize:      "0.68rem",
      letterSpacing: "0.2em",
      color:         T.blue,
      marginBottom:  "1.25rem",
      display:       "flex",
      alignItems:    "center",
      gap:           10,
    }}>
      <div style={{ width: 24, height: 1, background: T.blue, flexShrink: 0 }} />
      {text}
    </div>
  );
}

// ── Reveal ───────────────────────────────────────────────────
// Wraps any content in a scroll-triggered fade+slide animation.
export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity:    visible ? 1 : 0,
      transform:  visible ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── PrimaryBtn ───────────────────────────────────────────────
export function PrimaryBtn({ children, onClick }) {
  const [h, hov] = useHover();
  return (
    <button {...hov} onClick={onClick} style={{
      background:    "linear-gradient(135deg,#3b82f6,#1d4ed8)",
      border:        "none",
      borderRadius:  "10px",
      color:         "#fff",
      padding:       "13px 28px",
      fontSize:      "0.85rem",
      fontFamily:    T.mono,
      letterSpacing: "0.07em",
      cursor:        "pointer",
      boxShadow:     h ? "0 8px 40px rgba(59,130,246,0.45)" : "0 0 28px rgba(59,130,246,0.28)",
      transform:     h ? "translateY(-2px)" : "none",
      transition:    "all 0.25s",
    }}>
      {children}
    </button>
  );
}

// ── GhostBtn ─────────────────────────────────────────────────
export function GhostBtn({ children, onClick }) {
  const [h, hov] = useHover();
  return (
    <button {...hov} onClick={onClick} style={{
      background:    "transparent",
      border:        `1px solid ${h ? "rgba(148,163,184,0.5)" : "rgba(148,163,184,0.2)"}`,
      borderRadius:  "10px",
      color:         h ? T.text : "#94a3b8",
      padding:       "13px 28px",
      fontSize:      "0.85rem",
      fontFamily:    T.mono,
      letterSpacing: "0.07em",
      cursor:        "pointer",
      transition:    "all 0.25s",
    }}>
      {children}
    </button>
  );
}
