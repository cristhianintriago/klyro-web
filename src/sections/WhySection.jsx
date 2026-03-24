// ─── WhySection ──────────────────────────────────────────────

import { useLang }             from "../context/LangContext";
import { useInView }           from "../hooks";
import { SectionLabel, Reveal } from "../ui";
import { getWhyItems }         from "../data";

export function WhySection() {
  const { lang, t } = useLang();
  const items        = getWhyItems(lang);
  const wt           = t.why;

  return (
    <section id="why" className="py-[7rem] px-[2rem] max-w-[1100px] mx-auto">
      <SectionLabel text={wt.sectionLabel} />

      <Reveal className="mb-[3.5rem]">
        <h2 className="font-serif text-[clamp(1.75rem,4vw,2.6rem)] font-normal text-ktext m-0 tracking-[-0.02em]">
          {wt.heading}
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[1.2rem]">
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

  return (
    <div
      ref={ref}
      className="group bg-[#0f172a66] hover:bg-[#162238b3] border border-kborder hover:border-blue-500/20 rounded-kradius p-[1.75rem] transition-all duration-300 ease-out hover:-translate-y-[3px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "" : "translateY(20px)",
        transition: `opacity 0.7s ease ${index * 0.07}s, transform 0.35s ease, background-color 0.3s, border-color 0.3s`,
      }}
    >
      <div className="text-[1.4rem] text-kblue mb-[1rem] inline-block transition-transform duration-300 group-hover:scale-[1.15]">
        {item.icon}
      </div>

      <h4 className="font-mono text-[0.82rem] font-semibold text-slate-200 m-0 mb-[0.55rem] tracking-[0.02em]">
        {item.title}
      </h4>

      <p className="font-sans text-ksubtle text-[0.85rem] leading-[1.65] m-0">
        {item.desc}
      </p>
    </div>
  );
}
