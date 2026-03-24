// ─── ProductsSection ─────────────────────────────────────────

import { useLang }                        from "../context/LangContext";
import { useInView }                      from "../hooks";
import { Tag, Badge, SectionLabel, Reveal } from "../ui";
import { getProducts }                    from "../data";

export function ProductsSection() {
  const { lang, t }  = useLang();
  const products     = getProducts(lang);
  const pt           = t.products;

  return (
    <section id="products" className="py-[7rem] px-[2rem] max-w-[1100px] mx-auto">
      <SectionLabel text={pt.sectionLabel} />

      <Reveal className="mb-[3.5rem]">
        <h2 className="font-serif text-[clamp(1.9rem,4.5vw,3rem)] font-normal text-ktext m-0 mb-2.5 tracking-[-0.02em]">
          {pt.heading}
        </h2>
        <p className="font-sans text-ksubtle text-[0.95rem] max-w-[520px]">
          {pt.sub}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── ProductCard ───────────────────────────────────────────────
function ProductCard({ product, index }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden backdrop-blur-md bg-kcard hover:bg-kcardhov border border-kborder hover:border-kborderhov rounded-kradius p-8 transition-all duration-300 ease-out hover:-translate-y-1 ${product.featured ? "md:col-span-2" : "col-span-1"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? (product.featured ? "translateY(0)" : "translateY(0)") : "translateY(24px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.35s ease, background-color 0.3s, border-color 0.3s`,
      }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: `linear-gradient(90deg, transparent, ${product.badgeColor}, transparent)` }} />

      {/* Icon + Badge */}
      <div className="flex justify-between items-start mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.2rem] transition-transform duration-300 group-hover:scale-105"
             style={{ backgroundColor: `${product.badgeColor}12`, borderColor: `${product.badgeColor}30`, borderWidth: '1px', color: product.badgeColor }}>
          {product.icon}
        </div>
        <Badge label={product.badge} color={product.badgeColor} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-[1.3rem] font-normal text-slate-100 m-0 mb-2 tracking-[-0.01em]">
        {product.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-kmuted text-[0.875rem] leading-[1.7] m-0 mb-[1.2rem]">
        {product.description}
      </p>

      {/* Problem pill */}
      <div className="bg-[#0a1224]/50 border border-slate-400/5 rounded-kradius-sm py-2.5 px-3.5 mb-[1.2rem]">
        <p className="font-mono text-[0.7rem] text-ksubtle tracking-[0.04em] m-0 leading-[1.6]">
          <span className="text-slate-400 mr-1.5">→</span>
          {product.problem}
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-1.5 flex-wrap">
        {product.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
