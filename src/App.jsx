// ─── App.jsx ──────────────────────────────────────────────────
// Root entry point. Assembles all sections and injects global
// styles + Google Fonts. Add or remove sections here.
// ─────────────────────────────────────────────────────────────

import { LangProvider } from "./context/LangContext";
import { Navbar }       from "./layout/Navbar";
import { Footer }       from "./layout/Footer";
import { HeroSection }  from "./sections/HeroSection";
import { ProductsSection } from "./sections/ProductsSection";
import { AboutSection } from "./sections/AboutSection";
import { WhySection }   from "./sections/WhySection";
import { ContactSection } from "./sections/ContactSection";
import { T }            from "./tokens";

export default function App() {
  return (
    <LangProvider>
      <GlobalStyles />
      <div style={{ background: T.bg, minHeight: "100vh" }}>
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <AboutSection />
          <WhySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

// ── GlobalStyles ──────────────────────────────────────────────
// Inlined to keep the project zero-config (no CSS files needed).
// Move to index.css if you prefer a separate stylesheet.
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500;600&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html  { scroll-behavior: smooth; }
      body  { background: ${T.bg}; color: ${T.text}; -webkit-font-smoothing: antialiased; }

      /* Responsive nav */
      .desktop-nav     { display: flex !important; }
      .mobile-menu-btn { display: none  !important; }

      @media (max-width: 768px) {
        .desktop-nav       { display: none  !important; }
        .mobile-menu-btn   { display: block !important; }
        .products-grid     { grid-template-columns: 1fr !important; }
        .featured-card     { grid-column: span 1   !important; }
      }

      /* Scrollbar */
      ::-webkit-scrollbar       { width: 5px; }
      ::-webkit-scrollbar-track { background: ${T.bg}; }
      ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.28); border-radius: 3px; }
    `}</style>
  );
}
