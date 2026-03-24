// ─── Navbar ───────────────────────────────────────────────────

import { useState } from "react";
import { useLang }   from "../context/LangContext";
import { useScrolled } from "../hooks";
import { LangToggle } from "./LangToggle";

export function Navbar() {
  const { t }   = useLang();
  const nav      = t.nav;
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NAV_ITEMS = [
    { label: nav.products, href: "#products" },
    { label: nav.about,    href: "#about"    },
    { label: nav.why,      href: "#why"      },
    { label: nav.contact,  href: "#contact"  },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-8 h-16 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-blue-500/10" : "bg-transparent border-b border-transparent"}`}>

      {/* ── Logo ── */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-[15px] font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]">
          K
        </div>
        <span className="font-mono font-semibold text-[1.05rem] text-ktext tracking-[0.06em]">
          klyro
        </span>
      </div>

      {/* ── Desktop links ── */}
      <div className="desktop-nav gap-7 items-center hidden md:flex">
        {NAV_ITEMS.map((l) => (
          <NavLink key={l.href} onClick={() => scrollTo(l.href)}>
            {l.label}
          </NavLink>
        ))}
        <LangToggle />
        <CtaButton label={nav.cta} onClick={() => scrollTo("#contact")} />
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        className="mobile-menu-btn bg-transparent border-none cursor-pointer text-slate-400 text-[1.3rem] block md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="fixed top-16 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-xl border-b border-blue-500/10 py-6 px-8 flex flex-col gap-5 shadow-xl md:hidden">
          {NAV_ITEMS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="bg-transparent border-none cursor-pointer text-slate-400 text-[0.95rem] font-mono text-left"
            >
              {l.label}
            </button>
          ))}
          <LangToggle />
        </div>
      )}
    </nav>
  );
}

function NavLink({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-transparent border-none cursor-pointer text-slate-400 hover:text-ktext text-[0.82rem] font-mono tracking-[0.06em] transition-colors py-1">
      {children}
    </button>
  );
}

function CtaButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-kbluedim border border-blue-500/30 rounded-lg text-blue-400 py-[7px] px-4 text-[0.77rem] font-mono tracking-[0.08em] cursor-pointer transition-all hover:bg-blue-500/20 hover:border-kblue"
    >
      {label}
    </button>
  );
}
