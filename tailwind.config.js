/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kbg: "#0f172a",
        kcard: "rgba(15,23,42,0.65)",
        kcardhov: "rgba(22,34,56,0.9)",
        kborder: "rgba(148,163,184,0.08)",
        kborderhov: "rgba(59,130,246,0.28)",
        kblue: "#3b82f6",
        kbluedim: "rgba(59,130,246,0.12)",
        ktext: "#f1f5f9",
        kmuted: "#64748b",
        ksubtle: "#475569",
      },
      fontFamily: {
        sans: ["'DM Sans'", "Nunito Sans", "sans-serif"],
        serif: ["'DM Serif Display'", "Georgia", "serif"],
        mono: ["'DM Mono'", "Fira Code", "monospace"],
      },
      borderRadius: {
        "kradius": "14px",
        "kradius-sm": "8px",
        "kradius-lg": "20px",
      },
      animation: {
        "kf-fadein": "heroFadeIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "kf-dotpulse": "dotPulse 2s ease-in-out infinite",
        "kf-dotglow": "dotGlow 2.5s ease-in-out infinite",
        "kf-orbpulse": "orbPulse 6s ease-in-out infinite",
        "kf-griddrift": "gridDrift 20s linear infinite",
        "kf-scrollline": "scrollLine 2s ease-in-out infinite",
        "kf-shimmer": "shimmer 2s infinite",
        "kf-float": "float 8s ease-in-out infinite",
      },
      keyframes: {
        heroFadeIn: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dotPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59,130,246,0.7)" },
          "50%": { boxShadow: "0 0 0 5px rgba(59,130,246,0)" },
        },
        dotGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(59,130,246,0.8)" },
          "50%": { boxShadow: "0 0 22px rgba(59,130,246,1), 0 0 40px rgba(59,130,246,0.4)" },
        },
        orbPulse: {
          "0%, 100%": { transform: "translateX(-50%) scale(1)", opacity: "1" },
          "50%": { transform: "translateX(-50%) scale(1.1)", opacity: "0.7" },
        },
        gridDrift: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "64px 64px" },
        },
        scrollLine: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.8)" },
          "50%": { opacity: "0.8", transform: "scaleY(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% center" },
          to: { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.5" },
          "50%": { transform: "translateY(-18px)", opacity: "1" },
        }
      }
    },
  },
  plugins: [],
}
