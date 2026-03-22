// ─── WhySection ──────────────────────────────────────────────

import { useLang }             from "../context/LangContext";
import { useInView, useHover } from "../hooks";
import { SectionLabel, Reveal } from "../ui";
import { getWhyItems }         from "../data";
import { T }                   from "../tokens";

export function WhySection() {
  const { lang, t } = useLang();
  const items        = getWhyItems(lang);
  const wt           = t.why;

  return (
    <section id="why" style={{
      padding:  "7rem 2rem",
      maxWidth: "1100px",
      margin:   "0 auto",
    }}>
      <SectionLabel text={wt.sectionLabel} />

      <Reveal style={{ marginBottom: "3.5rem" }}>
        <h2 style={{
          fontFamily:    T.serif,
          fontSize:      "clamp(1.75rem,4vw,2.6rem)",
          fontWeight:    400,
          color:         T.text,
          margin:        0,
          letterSpacing: "-0.02em",
        }}>
          {wt.heading}
        </h2>
      </Reveal>

      <div style={{
        display:               "grid",
        gridTemplateColumns:   "repeat(auto-fit, minmax(220px, 1fr))",
        gap:                   "1.2rem",
      }}>
        {items.map((item, i) => (
          <WhyCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── WhyCard ───────────────────────────────────────────────────
function WhyCard({ item, index }) {
  const [ref, visible] = useInView();
  const [h, hov]       = useHover();

  return (
    <div
      ref={ref}
      {...hov}
      style={{
        background:      h ? "rgba(22,34,56,0.7)" : "rgba(15,23,42,0.4)",
        border:          `1px solid ${h ? "rgba(59,130,246,0.22)" : T.border}`,
        borderRadius:    T.radius,
        padding:         "1.75rem",
        transition:      "all 0.3s ease",
        opacity:         visible ? 1 : 0,
        transform:       visible ? (h ? "translateY(-3px)" : "none") : "translateY(20px)",
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      <div style={{
        fontSize:    "1.4rem",
        color:       T.blue,
        marginBottom: "1rem",
        display:     "inline-block",
        transition:  "transform 0.3s",
        transform:   h ? "scale(1.15)" : "none",
      }}>
        {item.icon}
      </div>

      <h4 style={{
        fontFamily:    T.mono,
        fontSize:      "0.82rem",
        fontWeight:    600,
        color:         "#e2e8f0",
        margin:        "0 0 0.55rem",
        letterSpacing: "0.02em",
      }}>
        {item.title}
      </h4>

      <p style={{
        fontFamily: T.sans,
        color:      T.subtle,
        fontSize:   "0.85rem",
        lineHeight: 1.65,
        margin:     0,
      }}>
        {item.desc}
      </p>
    </div>
  );
}
