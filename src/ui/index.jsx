// ─── UI PRIMITIVES ────────────────────────────────────────────
// Atomic, reusable UI components with no business logic.
// Import individually: import { Tag, Badge } from "../ui"
// ─────────────────────────────────────────────────────────────

import { useInView } from "../hooks";

// ── Tag ──────────────────────────────────────────────────────
export function Tag({ children }) {
  return (
    <span className="bg-slate-400/5 border border-slate-400/10 rounded-md py-[3px] px-[10px] text-[0.7rem] text-ksubtle font-mono tracking-[0.06em]">
      {children}
    </span>
  );
}

// ── Badge ────────────────────────────────────────────────────
export function Badge({ label, color }) {
  return (
    <span className="rounded-full py-[3px] px-[10px] text-[0.68rem] font-mono tracking-[0.08em] font-semibold whitespace-nowrap border"
          style={{ backgroundColor: `${color}14`, borderColor: `${color}30`, color }}>
      {label}
    </span>
  );
}

// ── SectionLabel ─────────────────────────────────────────────
export function SectionLabel({ text }) {
  return (
    <div className="font-mono text-[0.68rem] tracking-[0.2em] text-kblue mb-5 flex items-center gap-2.5">
      <div className="w-6 h-px bg-kblue shrink-0" />
      {text}
    </div>
  );
}

// ── Reveal ───────────────────────────────────────────────────
// Scroll-triggered animation. direction: "up" | "left" | "right" | "scale"
export function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useInView();

  const hiddenMap = {
    up:    "translateY(30px)",
    left:  "translateX(-30px)",
    right: "translateX(30px)",
    scale: "scale(0.93)",
  };
  const hidden = hiddenMap[direction] ?? "translateY(30px)";

  return (
    <div ref={ref} className={className} style={{
      opacity:    visible ? 1 : 0,
      transform:  visible ? "translateY(0) translateX(0) scale(1)" : hidden,
      transition: `opacity 0.85s ease ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── PrimaryBtn ───────────────────────────────────────────────
export function PrimaryBtn({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-gradient-to-br from-blue-500 to-blue-700 border-none rounded-[10px] text-white py-[13px] px-[28px] text-[0.85rem] font-mono tracking-[0.07em] cursor-pointer shadow-[0_0_28px_rgba(59,130,246,0.28)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.45)] hover:-translate-y-[2px] transition-all duration-300">
      {children}
    </button>
  );
}

// ── GhostBtn ─────────────────────────────────────────────────
export function GhostBtn({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-transparent border border-slate-400/20 rounded-[10px] text-slate-400 py-[13px] px-[28px] text-[0.85rem] font-mono tracking-[0.07em] cursor-pointer transition-all duration-300 hover:border-slate-400/50 hover:text-ktext hover:-translate-y-[2px] shadow-sm hover:shadow-md">
      {children}
    </button>
  );
}
