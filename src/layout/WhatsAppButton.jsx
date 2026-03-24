// ─── WhatsAppButton ───────────────────────────────────────────
// Botón flotante de WhatsApp con animación de entrada, pulso
// y tooltip que aparece al hacer hover.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { useLang }             from "../context/LangContext";
import { WHATSAPP }            from "../data";

export function WhatsAppButton() {
  const { t }             = useLang();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  // Aparece 1.5s después de cargar la página
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Muestra el tooltip 3s después de aparecer (solo una vez)
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setTooltip(true);
      setTimeout(() => setTooltip(false), 4000);
    }, 800);
    return () => clearTimeout(timer);
  }, [visible]);

  const label = t.contact?.whatsapp ?? "Hablar con un asesor";

  return (
    <>
      <style>{`
        @keyframes wa-enter {
          from { opacity: 0; transform: scale(0.5) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5), 0 8px 32px rgba(0,0,0,0.35); }
          50%       { box-shadow: 0 0 0 12px rgba(37,211,102,0), 0 8px 32px rgba(0,0,0,0.35); }
        }
        @keyframes wa-pulse-hover {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.6), 0 12px 40px rgba(37,211,102,0.3); }
          50%       { box-shadow: 0 0 0 16px rgba(37,211,102,0), 0 12px 40px rgba(37,211,102,0.3); }
        }
        @keyframes tooltip-in {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tooltip-out {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(12px); }
        }
      `}</style>

      {/* Tooltip */}
      {(tooltip || hovered) && (
        <div style={{
          position:      "fixed",
          bottom:        "2.25rem",
          right:         "5.5rem",
          zIndex:        999,
          background:    "#1a2332",
          border:        "1px solid rgba(37,211,102,0.25)",
          borderRadius:  "12px",
          padding:       "10px 16px",
          color:         "#f1f5f9",
          fontSize:      "0.82rem",
          fontFamily:    "'DM Sans', sans-serif",
          whiteSpace:    "nowrap",
          pointerEvents: "none",
          animation:     `${tooltip && !hovered ? "tooltip-out" : "tooltip-in"} 0.25s ease forwards`,
          boxShadow:     "0 8px 32px rgba(0,0,0,0.4)",
          display:       "flex",
          alignItems:    "center",
          gap:           "8px",
        }}>
          {/* Bubble tail */}
          <div style={{
            position:    "absolute",
            right:       "-6px",
            top:         "50%",
            transform:   "translateY(-50%)",
            width:       0, height: 0,
            borderTop:   "6px solid transparent",
            borderBottom:"6px solid transparent",
            borderLeft:  "6px solid #1a2332",
          }} />
          <span style={{ fontSize: "0.9rem" }}>💬</span>
          {label}
        </div>
      )}

      {/* Main button */}
      {visible && (
        <a
          href={WHATSAPP.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onMouseEnter={() => { setHovered(true);  setTooltip(false); }}
          onMouseLeave={() => setHovered(false)}
          style={{
            position:       "fixed",
            bottom:         "2rem",
            right:          "2rem",
            zIndex:         1000,
            width:          56,
            height:         56,
            borderRadius:   "50%",
            background:     hovered
              ? "linear-gradient(135deg,#25d366,#1da851)"
              : "linear-gradient(135deg,#25d366,#20ba5a)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            textDecoration: "none",
            cursor:         "pointer",
            animation:      `wa-enter 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards,
                             ${hovered ? "wa-pulse-hover" : "wa-pulse"} 2.5s ease-in-out 0.5s infinite`,
            transform:      hovered ? "scale(1.1)" : "scale(1)",
            transition:     "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.25s",
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="28"
            height="28"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  );
}
