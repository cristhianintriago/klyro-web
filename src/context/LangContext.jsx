// ─── LANGUAGE CONTEXT ────────────────────────────────────────
// Provides lang + setLang + t (translations) to the entire tree.
// Wrap <App> with <LangProvider> — any component can useLang().
// ─────────────────────────────────────────────────────────────

import { createContext, useContext, useState } from "react";
import { TRANSLATIONS } from "../i18n/translations";

const LangCtx = createContext({
  lang:    "en",
  setLang: () => {},
  t:       TRANSLATIONS.en,
});

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = TRANSLATIONS[lang];

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}

/** Access language state from any component */
export function useLang() {
  return useContext(LangCtx);
}
