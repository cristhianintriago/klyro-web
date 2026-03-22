// ─── HeroSection ─────────────────────────────────────────────

import { useLang }                  from "../context/LangContext";
import { Reveal, PrimaryBtn, GhostBtn } from "../ui";
import { T }                         from "../tokens";

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

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }} />

      {/* Glow orb */}
      <div style={{
        position:        "absolute",
        top:             "18%",
        left:            "50%",
        transform:       "translateX(-50%)",
        width:           640,
        height:          640,
        background:      "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        zIndex:          0,
        pointerEvents:   "none",
      }} />

      <Reveal style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>

        {/* Badge */}
        <div style={{
          display:       "inline-flex",
          alignItems:    "center",
          gap:           8,
          background:    T.blueDim,
          border:        `1px solid ${T.blue}33`,
          borderRadius:  "100px",
          padding:       "6px 16px",
          marginBottom:  "2.5rem",
          fontSize:      "0.7rem",
          color:         "#60a5fa",
          fontFamily:    T.mono,
          letterSpacing: "0.12em",
        }}>
          <span style={{
            width:      6, height: 6,
            borderRadius: "50%",
            background:   T.blue,
            display:      "inline-block",
            boxShadow:    `0 0 8px ${T.blue}`,
          }} />
          {h.badge}
        </div>

        {/* Title */}
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
          <span style={{
            display:       "inline-block",
            width:         9, height: 9,
            background:    T.blue,
            borderRadius:  "50%",
            marginLeft:    5,
            verticalAlign: "super",
            boxShadow:     `0 0 18px ${T.blue}`,
          }} />
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily:     T.mono,
          fontSize:       "clamp(0.82rem,1.8vw,1rem)",
          color:          "#60a5fa",
          letterSpacing:  "0.07em",
          marginBottom:   "1.1rem",
          textTransform:  "uppercase",
        }}>
          {h.subtitle}
        </p>

        {/* Description */}
        <p style={{
          fontFamily:   T.sans,
          fontSize:     "clamp(0.95rem,2vw,1.1rem)",
          color:        T.muted,
          maxWidth:     520,
          margin:       "0 auto 3rem",
          lineHeight:   1.75,
        }}>
          {h.desc}
        </p>

        {/* CTAs */}
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

      </Reveal>
    </section>
  );
}
