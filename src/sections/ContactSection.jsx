// ─── ContactSection ──────────────────────────────────────────

import { useLang }              from "../context/LangContext";
import { useHover }             from "../hooks";
import { SectionLabel, Reveal } from "../ui";
import { CONTACT_LINKS }        from "../data";
import { T }                    from "../tokens";

export function ContactSection() {
  const { t } = useLang();
  const ct     = t.contact;

  return (
    <section id="contact" style={{ padding: "7rem 2rem 5rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionLabel text={ct.sectionLabel} />

        <Reveal style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontFamily:    T.serif,
            fontSize:      "clamp(1.75rem,4vw,2.6rem)",
            fontWeight:    400,
            color:         T.text,
            margin:        "0 0 0.65rem",
            letterSpacing: "-0.02em",
          }}>
            {ct.heading}
          </h2>
          <p style={{
            fontFamily: T.sans,
            color:      T.subtle,
            fontSize:   "0.95rem",
            lineHeight: 1.7,
            margin:     0,
          }}>
            {ct.sub}
          </p>
        </Reveal>

        <Reveal delay={0.12} direction="scale">
          <div style={{
            background:     T.card,
            border:         `1px solid ${T.border}`,
            borderRadius:   T.radiusLg,
            padding:        "2.5rem",
            backdropFilter: "blur(14px)",
          }}>
            {CONTACT_LINKS.map((link, i) => (
              <div key={link.label}>
                {i > 0 && (
                  <div style={{
                    height:     1,
                    background: "rgba(148,163,184,0.06)",
                    margin:     "1.5rem 0",
                  }} />
                )}
                <ContactLink {...link} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── ContactLink ───────────────────────────────────────────────
function ContactLink({ icon, label, value, href, color }) {
  const [h, hov] = useHover();
  const accentColor = color ?? T.blue;

  return (
    <a
      {...hov}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:        "flex",
        alignItems:     "center",
        gap:            "1rem",
        textDecoration: "none",
        padding:        "6px 0",
        transition:     "all 0.2s",
      }}
    >
      {/* Icon box */}
      <div style={{
        width:          44,
        height:         44,
        background:     h ? `${accentColor}20` : `${accentColor}10`,
        border:         `1px solid ${h ? `${accentColor}55` : `${accentColor}22`}`,
        borderRadius:   "12px",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        color:          accentColor,
        fontSize:       "1rem",
        transition:     "all 0.25s",
        transform:      h ? "scale(1.08)" : "scale(1)",
        flexShrink:     0,
      }}>
        {icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily:    T.mono,
          fontSize:      "0.65rem",
          letterSpacing: "0.12em",
          color:         T.subtle,
          marginBottom:  3,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily:   T.sans,
          fontSize:     "0.9rem",
          color:        h ? accentColor : "#94a3b8",
          transition:   "color 0.2s",
          overflow:     "hidden",
          textOverflow: "ellipsis",
          whiteSpace:   "nowrap",
        }}>
          {value}
        </div>
      </div>

      {/* Arrow */}
      <div style={{
        fontSize:   "0.9rem",
        color:      h ? accentColor : "#1e3a5f",
        transform:  h ? "translateX(5px)" : "none",
        transition: "all 0.25s",
        flexShrink: 0,
      }}>
        →
      </div>
    </a>
  );
}
