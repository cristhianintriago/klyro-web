// ─── LangToggle ───────────────────────────────────────────────
// EN / ES pill toggle. Reads and writes language via LangContext.
// Drop into Navbar or anywhere a language switcher is needed.
// ─────────────────────────────────────────────────────────────

import { useLang } from "../context/LangContext";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center bg-slate-400/5 border border-slate-400/10 rounded-full p-[3px] gap-[2px]">
      {["en", "es"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`border-none rounded-full font-mono text-[0.66rem] tracking-[0.1em] px-[11px] py-1 cursor-pointer transition-all duration-200 ${
            lang === l ? "bg-kblue text-white font-semibold" : "bg-transparent text-kmuted font-normal"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
