// ─── ContactSection ──────────────────────────────────────────

import { useLang }              from "../context/LangContext";
import { SectionLabel, Reveal } from "../ui";
import { CONTACT_LINKS }        from "../data";

export function ContactSection() {
  const { t } = useLang();
  const ct     = t.contact;

  return (
    <section id="contact" className="pt-[7rem] px-[2rem] pb-[5rem]">
      <div className="max-w-[680px] mx-auto">
        <SectionLabel text={ct.sectionLabel} />

        <Reveal className="mb-[3rem]">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.6rem)] font-normal text-ktext m-0 mb-[0.65rem] tracking-[-0.02em]">
            {ct.heading}
          </h2>
          <p className="font-sans text-ksubtle text-[0.95rem] leading-[1.7] m-0">
            {ct.sub}
          </p>
        </Reveal>

        <Reveal delay={0.12} direction="scale">
          <div className="bg-kcard border border-kborder rounded-kradius-lg p-[2.5rem] backdrop-blur-md">
            {CONTACT_LINKS.map((link, i) => (
              <div key={link.label}>
                {i > 0 && <div className="h-[1px] bg-slate-400/5 my-[1.5rem]" />}
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
  const accentColor = color ?? "#3b82f6";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-[1rem] no-underline py-[6px] transition-all duration-200"
    >
      {/* Icon box */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-[1rem] shrink-0 transition-all duration-250 group-hover:scale-[1.08] bg-[var(--bg-color)] group-hover:bg-[var(--hover-bg)] border border-[var(--border-color)] group-hover:border-[var(--hover-border)] text-[var(--color)]"
        style={{
          '--bg-color': `${accentColor}10`,
          '--hover-bg': `${accentColor}20`,
          '--border-color': `${accentColor}22`,
          '--hover-border': `${accentColor}55`,
          '--color': accentColor
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[0.65rem] tracking-[0.12em] text-ksubtle mb-[3px]">
          {label}
        </div>
        <div className="font-sans text-[0.9rem] text-slate-400 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-[var(--hover-color)]"
             style={{ '--hover-color': accentColor }}>
          {value}
        </div>
      </div>

      {/* Arrow */}
      <div className="text-[0.9rem] text-[#1e3a5f] transition-all duration-250 shrink-0 group-hover:translate-x-[5px] group-hover:text-[var(--hover-color)]"
           style={{ '--hover-color': accentColor }}>
        →
      </div>
    </a>
  );
}
