// ─── Navbar ───────────────────────────────────────────────────
// Fixed top navigation with frosted-glass scroll effect,
// desktop links, language toggle, and mobile hamburger drawer.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { useLang }   from "../context/LangContext";
import { useScrolled, useHover } from "../hooks";
import { LangToggle } from "./LangToggle";
import { T } from "../tokens";

export function Navbar() {
  const { t }   = useLang();
  const nav      = t.nav;
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NAV_ITEMS = [
    { label: nav.products, href: "#products" },
    { label: nav.about,    href: "#about"    },
    { label: nav.why,      href: "#why"      },
    { label: nav.contact,  href: "#contact"  },
  ];

  return (
    <nav style={{
      position:       "fixed",
      top: 0, left: 0, right: 0,
      zIndex:         100,
      padding:        "0 2rem",
      height:         "64px",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "space-between",
      background:     scrolled ? "rgba(15,23,42,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)"           : "none",
      borderBottom:   scrolled ? "1px solid rgba(59,130,246,0.1)" : "1px solid transparent",
      transition:     "all 0.35s ease",
    }}>

      {/* ── Logo ── */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
      >
        <div style={{
          width:        32,
          height:       32,
          background:   "linear-gradient(135deg,#3b82f6,#1d4ed8)",
          borderRadius: "8px",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          fontSize:     15,
          fontWeight:   700,
          color:        "#fff",
          boxShadow:    "0 0 20px rgba(59,130,246,0.35)",
        }}>K</div>
        <span style={{
          fontFamily:    T.mono,
          fontWeight:    600,
          fontSize:      "1.05rem",
          color:         T.text,
          letterSpacing: "0.06em",
        }}>klyro</span>
      </div>

      {/* ── Desktop links ── */}
      <div
        className="desktop-nav"
        style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}
      >
        {NAV_ITEMS.map((l) => (
          <NavLink key={l.href} onClick={() => scrollTo(l.href)}>
            {l.label}
          </NavLink>
        ))}
        <LangToggle />
        <CtaButton label={nav.cta} onClick={() => scrollTo("#contact")} />
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        style={{
          background: "none", border: "none",
          cursor: "pointer", color: "#94a3b8", fontSize: "1.3rem",
        }}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* ── Mobile drawer ── */}
      {open && (
        <div style={{
          position:       "fixed",
          top:            "64px", left: 0, right: 0,
          background:     "rgba(15,23,42,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom:   "1px solid rgba(59,130,246,0.1)",
          padding:        "1.5rem 2rem",
          display:        "flex",
          flexDirection:  "column",
          gap:            "1.25rem",
        }}>
          {NAV_ITEMS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none", border: "none",
                cursor: "pointer", color: "#94a3b8",
                fontSize: "0.95rem", fontFamily: T.mono, textAlign: "left",
              }}
            >
              {l.label}
            </button>
          ))}
          <LangToggle />
        </div>
      )}
    </nav>
  );
}

// ── Internal sub-components ───────────────────────────────────

function NavLink({ children, onClick }) {
  const [h, hov] = useHover();
  return (
    <button {...hov} onClick={onClick} style={{
      background:    "none",
      border:        "none",
      cursor:        "pointer",
      color:         h ? T.text : "#94a3b8",
      fontSize:      "0.82rem",
      fontFamily:    T.mono,
      letterSpacing: "0.06em",
      transition:    "color 0.2s",
      padding:       "4px 0",
    }}>
      {children}
    </button>
  );
}

function CtaButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background:    T.blueDim,
        border:        `1px solid ${T.blue}55`,
        borderRadius:  "8px",
        color:         "#60a5fa",
        padding:       "7px 16px",
        fontSize:      "0.77rem",
        fontFamily:    T.mono,
        letterSpacing: "0.08em",
        cursor:        "pointer",
        transition:    "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background    = "rgba(59,130,246,0.2)";
        e.currentTarget.style.borderColor   = T.blue;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background    = T.blueDim;
        e.currentTarget.style.borderColor   = `${T.blue}55`;
      }}
    >
      {label}
    </button>
  );
}
