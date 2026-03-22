// ─── AboutSection ────────────────────────────────────────────

import { useLang }             from "../context/LangContext";
import { SectionLabel, Reveal } from "../ui";
import { T }                    from "../tokens";

export function AboutSection() {
  const { t } = useLang();
  const at     = t.about;
  const lines  = at.heading.split("\n");

  return (
    <section id="about" style={{
      padding:  "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle gradient wash */}
      <div style={{
        position:      "absolute",
        inset:         0,
        zIndex:        0,
        pointerEvents: "none",
        background:    "linear-gradient(180deg, transparent, rgba(59,130,246,0.025) 50%, transparent)",
      }} />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel text={at.sectionLabel} />

        <Reveal>
          <h2 style={{
            fontFamily:    T.serif,
            fontSize:      "clamp(1.75rem,4vw,2.6rem)",
            fontWeight:    400,
            color:         T.text,
            margin:        "0 0 1.75rem",
            letterSpacing: "-0.02em",
            lineHeight:    1.2,
          }}>
            {lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p style={{
            fontFamily:   T.sans,
            color:        T.muted,
            fontSize:     "1.05rem",
            lineHeight:   1.8,
            borderLeft:   "2px solid rgba(59,130,246,0.35)",
            paddingLeft:  "1.5rem",
            margin:       0,
          }}>
            {at.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
