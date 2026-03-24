// ─── AboutSection ────────────────────────────────────────────

import { useLang }             from "../context/LangContext";
import { SectionLabel, Reveal } from "../ui";

export function AboutSection() {
  const { t } = useLang();
  const at     = t.about;
  const lines  = at.heading.split("\n");

  return (
    <section id="about" className="py-[7rem] px-[2rem] relative overflow-hidden">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/[0.025] to-transparent" />

      <div className="max-w-[720px] mx-auto relative z-10">
        <SectionLabel text={at.sectionLabel} />

        <Reveal>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.6rem)] font-normal text-ktext m-0 mb-[1.75rem] tracking-[-0.02em] leading-[1.2]">
            {lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="font-sans text-kmuted text-[1.05rem] leading-[1.8] border-l-2 border-blue-500/35 pl-6 m-0">
            {at.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
