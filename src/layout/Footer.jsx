// ─── Footer ───────────────────────────────────────────────────

import { useLang } from "../context/LangContext";
import { T }       from "../tokens";

export function Footer() {
  const { t } = useLang();

  return (
    <footer style={{
      borderTop:      `1px solid ${T.border}`,
      padding:        "2.5rem 2rem",
      display:        "flex",
      justifyContent: "space-between",
      alignItems:     "center",
      flexWrap:       "wrap",
      gap:            "1rem",
      maxWidth:       "1100px",
      margin:         "0 auto",
    }}>
      <div style={{
        fontFamily:    T.mono,
        fontSize:      "0.72rem",
        color:         "#1e293b",
        letterSpacing: "0.1em",
      }}>
        KLYRO © {new Date().getFullYear()}
      </div>
      <div style={{
        fontFamily:    T.mono,
        fontSize:      "0.68rem",
        color:         "#1e293b",
        letterSpacing: "0.08em",
      }}>
        {t.footer.copy}
      </div>
    </footer>
  );
}
