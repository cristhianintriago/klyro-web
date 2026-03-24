// ─── HeroSection ─────────────────────────────────────────────
// Animaciones de entrada escalonadas CSS puras.
// Cada elemento entra con su propio delay sin IntersectionObserver
// (el hero siempre está visible al cargar).
// ─────────────────────────────────────────────────────────────

import { useLang }              from "../context/LangContext";
import { PrimaryBtn, GhostBtn } from "../ui";

export function HeroSection() {
  const { t } = useLang();
  const h     = t.hero;

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 px-8 pb-16 relative overflow-hidden text-center">

      {/* ── Backgrounds ── */}
      <GridBg />
      <GlowOrb />
      <FloatingParticles />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[820px]">

        <FadeIn delay={0.1}>
          <StatusBadge text={h.badge} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="font-serif text-[clamp(3.5rem,11vw,7.5rem)] font-normal text-ktext m-0 mb-3 leading-none tracking-[-0.025em]">
            {h.title}
            <BlueDot />
          </h1>
        </FadeIn>

        <FadeIn delay={0.48}>
          <p className="font-mono text-[clamp(0.78rem,1.8vw,0.96rem)] text-blue-400 tracking-[0.07em] mb-4 uppercase">
            {h.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-sans text-[clamp(0.95rem,2vw,1.1rem)] text-kmuted max-w-[520px] mx-auto mb-12 leading-[1.75]">
            {h.desc}
          </p>
        </FadeIn>

        <FadeIn delay={0.75}>
          <div className="flex gap-4 justify-center flex-wrap">
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
    <div className="opacity-0 translate-y-6 animate-kf-fadein" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function StatusBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 bg-kbluedim border border-blue-500/20 rounded-full py-1.5 px-4 mb-10 text-[0.68rem] text-blue-400 font-mono tracking-[0.12em]">
      <span className="w-1.5 h-1.5 rounded-full bg-kblue inline-block animate-kf-dotpulse" />
      {text}
    </div>
  );
}

function BlueDot() {
  return (
    <span className="inline-block w-2.5 h-2.5 bg-kblue rounded-full ml-1.5 align-super animate-kf-dotglow" />
  );
}

function ScrollHint() {
  return (
    <div className="mt-16 flex flex-col items-center gap-1.5">
      <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500/60 to-transparent animate-kf-scrollline" />
      <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[#1e3a5f]">SCROLL</span>
    </div>
  );
}

function GridBg() {
  return (
    <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] animate-kf-griddrift" />
  );
}

function GlowOrb() {
  return (
    <>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(59,130,246,0.09)_0%,transparent_70%)] z-0 pointer-events-none animate-kf-orbpulse" />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] z-0 pointer-events-none animate-kf-orbpulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[20%] right-[15%] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] z-0 pointer-events-none animate-kf-orbpulse" style={{ animationDelay: "1s" }} />
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
        <div key={i} className="absolute rounded-full bg-blue-500/50 z-0 pointer-events-none" style={{
          top: p.top, left: p.left, width: p.size, height: p.size,
          animation: `float ${p.dur} ease-in-out ${p.delay} infinite`,
        }} />
      ))}
    </>
  );
}
