// ─── HeroSection ─────────────────────────────────────────────
// Animaciones de entrada escalonadas CSS puras.
// Cada elemento entra con su propio delay sin IntersectionObserver
// (el hero siempre está visible al cargar).
// ─────────────────────────────────────────────────────────────

import { useLang }              from "../context/LangContext";
import { PrimaryBtn, GhostBtn } from "../ui";
import { T }                    from "../tokens";

export function HeroSection() {
  const { t } = useLang();
  const h     = t.hero;

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{
      minHeight:      "100vh",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      padding:        "8rem 2rem 4rem",
      position:       "relative",
      overflow:       "hidden",
      textAlign:      "center",
    }}>

      {/* ── Backgrounds ── */}
      <GridBg />
      <GlowOrb />
      <FloatingParticles />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "820px" }}>

        <FadeIn delay={0.1}>
          <StatusBadge text={h.badge} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 style={{
            fontFamily:    T.serif,
            fontSize:      "clamp(3.5rem,11vw,7.5rem)",
            fontWeight:    400,
            color:         T.text,
            margin:        "0 0 0.75rem",
            lineHeight:    1,
            letterSpacing: "-0.025em",
          }}>
            {h.title}
            <BlueDot />
          </h1>
        </FadeIn>

        <FadeIn delay={0.48}>
          <p style={{
            fontFamily:    T.mono,
            fontSize:      "clamp(0.78rem,1.8vw,0.96rem)",
            color:         "#60a5fa",
            letterSpacing: "0.07em",
            marginBottom:  "1rem",
            textTransform: "uppercase",
          }}>
            {h.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p style={{
            fontFamily: T.sans,
            fontSize:   "clamp(0.95rem,2vw,1.1rem)",
            color:      T.muted,
            maxWidth:   520,
            margin:     "0 auto 3rem",
            lineHeight: 1.75,
          }}>
            {h.desc}
          </p>
        </FadeIn>

        <FadeIn delay={0.75}>
          <div style={{
            display:        "flex",
            gap:            "1rem",
            justifyContent: "center",
            flexWrap:       "wrap",
          }}>
            <PrimaryBtn onClick={() => scrollTo("#products")}>
              {h.ctaPrimary}
            </PrimaryBtn>
            <GhostBtn onClick={() => scrollTo("#contact")}>
              {h.ctaSecondary}
            </GhostBtn>
          </div>
        </FadeIn>

        {/* Scroll hint */}
        <FadeIn delay={1.1}>
          <ScrollHint />
        </FadeIn>

      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────

function FadeIn({ children, delay = 0 }) {
  return (
    <div style={{
      opacity:   0,
      transform: "translateY(24px)",
      animation: `heroFadeIn 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s forwards`,
    }}>
      {children}
    </div>
  );
}

function StatusBadge({ text }) {
  return (
    <div style={{
      display:       "inline-flex",
      alignItems:    "center",
      gap:           8,
      background:    T.blueDim,
      border:        `1px solid ${T.blue}33`,
      borderRadius:  "100px",
      padding:       "6px 16px",
      marginBottom:  "2.5rem",
      fontSize:      "0.68rem",
      color:         "#60a5fa",
      fontFamily:    T.mono,
      letterSpacing: "0.12em",
    }}>
      <span style={{
        width:        6,
        height:       6,
        borderRadius: "50%",
        background:   T.blue,
        display:      "inline-block",
        animation:    "dotPulse 2s ease-in-out infinite",
      }} />
      {text}
    </div>
  );
}

function BlueDot() {
  return (
    <span style={{
      display:       "inline-block",
      width:         10,
      height:        10,
      background:    T.blue,
      borderRadius:  "50%",
      marginLeft:    6,
      verticalAlign: "super",
      animation:     "dotGlow 2.5s ease-in-out infinite",
    }} />
  );
}

function ScrollHint() {
  return (
    <div style={{
      marginTop:     "4rem",
      display:       "flex",
      flexDirection: "column",
      alignItems:    "center",
      gap:           6,
    }}>
      <div style={{
        width:        1,
        height:       40,
        background:   "linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)",
        animation:    "scrollLine 2s ease-in-out infinite",
      }} />
      <span style={{
        fontFamily:    T.mono,
        fontSize:      "0.6rem",
        letterSpacing: "0.2em",
        color:         "#1e3a5f",
      }}>SCROLL</span>
    </div>
  );
}

function GridBg() {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "64px 64px",
      animation: "gridDrift 20s linear infinite",
    }} />
  );
}

function GlowOrb() {
  return (
    <>
      <div style={{
        position:      "absolute",
        top:           "10%",
        left:          "50%",
        transform:     "translateX(-50%)",
        width:         700,
        height:        700,
        background:    "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)",
        zIndex:        0,
        pointerEvents: "none",
        animation:     "orbPulse 6s ease-in-out infinite",
      }} />
      <div style={{
        position:      "absolute",
        top:           "30%",
        left:          "20%",
        width:         300,
        height:        300,
        background:    "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
        zIndex:        0,
        pointerEvents: "none",
        animation:     "orbPulse 8s ease-in-out 2s infinite",
      }} />
      <div style={{
        position:      "absolute",
        top:           "20%",
        right:         "15%",
        width:         250,
        height:        250,
        background:    "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
        zIndex:        0,
        pointerEvents: "none",
        animation:     "orbPulse 7s ease-in-out 1s infinite",
      }} />
    </>
  );
}

function FloatingParticles() {
  const particles = [
    { size: 2, top: "15%", left: "10%",  delay: "0s",   dur: "8s"  },
    { size: 3, top: "70%", left: "8%",   delay: "1.5s", dur: "10s" },
    { size: 2, top: "40%", left: "92%",  delay: "3s",   dur: "9s"  },
    { size: 2, top: "80%", left: "85%",  delay: "0.5s", dur: "7s"  },
    { size: 3, top: "25%", left: "88%",  delay: "2s",   dur: "11s" },
    { size: 2, top: "60%", left: "5%",   delay: "4s",   dur: "8s"  },
    { size: 2, top: "85%", left: "50%",  delay: "1s",   dur: "9s"  },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <div key={i} style={{
          position:      "absolute",
          top:           p.top,
          left:          p.left,
          width:         p.size,
          height:        p.size,
          borderRadius:  "50%",
          background:    "rgba(59,130,246,0.5)",
          zIndex:        0,
          pointerEvents: "none",
          animation:     `float ${p.dur} ease-in-out ${p.delay} infinite`,
        }} />
      ))}
    </>
  );
}

// ── Keyframes (inyectadas una sola vez vía <style>) ──────────
// Se inyectan en App.jsx dentro de GlobalStyles para mantener
// los componentes sin side-effects de DOM.
export const HERO_KEYFRAMES = `
  @keyframes heroFadeIn {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7); }
    50%       { box-shadow: 0 0 0 5px rgba(59,130,246,0); }
  }
  @keyframes dotGlow {
    0%, 100% { box-shadow: 0 0 8px rgba(59,130,246,0.8); }
    50%       { box-shadow: 0 0 22px rgba(59,130,246,1), 0 0 40px rgba(59,130,246,0.4); }
  }
  @keyframes orbPulse {
    0%, 100% { transform: translateX(-50%) scale(1);   opacity: 1; }
    50%       { transform: translateX(-50%) scale(1.1); opacity: 0.7; }
  }
  @keyframes gridDrift {
    from { background-position: 0 0; }
    to   { background-position: 64px 64px; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px)   opacity: 0.5; }
    50%       { transform: translateY(-18px); opacity: 1; }
  }
  @keyframes scrollLine {
    0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
    50%       { opacity: 0.8; transform: scaleY(1); }
  }
`;
