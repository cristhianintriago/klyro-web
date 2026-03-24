// ─── App.jsx ──────────────────────────────────────────────────

import { LangProvider }    from "./context/LangContext";
import { Navbar }          from "./layout/Navbar";
import { Footer }          from "./layout/Footer";
import { WhatsAppButton }  from "./layout/WhatsAppButton";
import { HeroSection }     from "./sections/HeroSection";
import { ProductsSection } from "./sections/ProductsSection";
import { AboutSection }    from "./sections/AboutSection";
import { WhySection }      from "./sections/WhySection";
import { ContactSection }  from "./sections/ContactSection";

export default function App() {
  return (
    <LangProvider>
      <div className="bg-kbg min-h-screen text-ktext">
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <AboutSection />
          <WhySection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LangProvider>
  );
}
