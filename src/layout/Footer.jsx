// ─── Footer ───────────────────────────────────────────────────

import { useLang } from "../context/LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-kborder py-10 px-8 flex justify-between items-center flex-wrap gap-4 max-w-[1100px] mx-auto">
      <div className="font-mono text-[0.72rem] text-slate-800 tracking-[0.1em]">
        KLYRO © {new Date().getFullYear()}
      </div>
      <div className="font-mono text-[0.68rem] text-slate-800 tracking-[0.08em]">
        {t.footer.copy}
      </div>
    </footer>
  );
}
