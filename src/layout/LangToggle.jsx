// ─── LangToggle ───────────────────────────────────────────────
// EN / ES pill toggle. Reads and writes language via LangContext.
// Drop into Navbar or anywhere a language switcher is needed.
// ─────────────────────────────────────────────────────────────

import { useLang } from "../context/LangContext";
import { T } from "../tokens";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div style={{
      display:       "flex",
      alignItems:    "center",
      background:    "rgba(148,163,184,0.06)",
      border:        "1px solid rgba(148,163,184,0.12)",
      borderRadius:  "100px",
      padding:       "3px",
      gap:           "2px",
    }}>
      {["en", "es"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            background:    lang === l ? T.blue : "transparent",
            border:        "none",
            borderRadius:  "100px",
            color:         lang === l ? "#fff" : T.muted,
            fontFamily:    T.mono,
            fontSize:      "0.66rem",
            letterSpacing: "0.1em",
            padding:       "4px 11px",
            cursor:        "pointer",
            transition:    "all 0.2s",
            fontWeight:    lang === l ? 600 : 400,
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
