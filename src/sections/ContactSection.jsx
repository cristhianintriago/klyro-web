// ─── ContactSection ──────────────────────────────────────────

import { useLang }             from "../context/LangContext";
import { useHover }            from "../hooks";
import { SectionLabel, Reveal } from "../ui";
import { CONTACT_LINKS }       from "../data";
import { T }                   from "../tokens";

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

        <Reveal delay={0.1}>
          <div style={{
            background:     T.card,
            border:         `1px solid ${T.border}`,
            borderRadius:   T.radiusLg,
            padding:        "2.5rem",
            backdropFilter: "blur(12px)",
          }}>
            {CONTACT_LINKS.map((link, i) => (
              <div key={link.label}>
                {i > 0 && (
                  <div style={{
                    height:     1,
                    background: "rgba(148,163,184,0.06)",
                    margin:     "1.25rem 0",
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
function ContactLink({ icon, label, value, href }) {
  const [h, hov] = useHover();

  return (
    <a
      {...hov}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:         "flex",
        alignItems:      "center",
        gap:             "1rem",
        textDecoration:  "none",
        padding:         "4px 0",
      }}
    >
      <div style={{
        width:        38, height: 38,
        background:   h ? "rgba(59,130,246,0.15)" : T.blueDim,
        border:       `1px solid ${h ? "rgba(59,130,246,0.4)" : "rgba(59,130,246,0.15)"}`,
        borderRadius: "10px",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "center",
        color:        T.blue,
        fontSize:     "0.88rem",
        transition:   "all 0.2s",
      }}>
        {icon}
      </div>

      <div>
        <div style={{
          fontFamily:    T.mono,
          fontSize:      "0.65rem",
          letterSpacing: "0.1em",
          color:         T.subtle,
          marginBottom:  2,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: T.sans,
          fontSize:   "0.875rem",
          color:      h ? "#60a5fa" : "#94a3b8",
          transition: "color 0.2s",
        }}>
          {value}
        </div>
      </div>

      <div style={{
        marginLeft: "auto",
        fontSize:   "0.85rem",
        color:      h ? T.blue : "#1e3a5f",
        transform:  h ? "translateX(4px)" : "none",
        transition: "all 0.2s",
      }}>
        →
      </div>
    </a>
  );
}
