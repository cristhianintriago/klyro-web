// ─── ProductsSection ─────────────────────────────────────────

import { useLang }                        from "../context/LangContext";
import { useInView, useHover }            from "../hooks";
import { Tag, Badge, SectionLabel, Reveal } from "../ui";
import { getProducts }                    from "../data";
import { T }                              from "../tokens";

export function ProductsSection() {
  const { lang, t } = useLang();
  const products     = getProducts(lang);
  const pt           = t.products;

  return (
    <section id="products" style={{
      padding:   "7rem 2rem",
      maxWidth:  "1100px",
      margin:    "0 auto",
    }}>
      <SectionLabel text={pt.sectionLabel} />

      <Reveal style={{ marginBottom: "3.5rem" }}>
        <h2 style={{
          fontFamily:    T.serif,
          fontSize:      "clamp(1.9rem,4.5vw,3rem)",
          fontWeight:    400,
          color:         T.text,
          margin:        "0 0 0.65rem",
          letterSpacing: "-0.02em",
        }}>
          {pt.heading}
        </h2>
        <p style={{ fontFamily: T.sans, color: T.subtle, fontSize: "0.95rem", maxWidth: 520 }}>
          {pt.sub}
        </p>
      </Reveal>

      <div
        className="products-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}
      >
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
  const [h, hov]       = useHover();

  return (
    <div
      ref={ref}
      {...hov}
      className={product.featured ? "featured-card" : ""}
      style={{
        background:     h ? T.cardHover : T.card,
        border:         h ? `1px solid ${product.badgeColor}44` : `1px solid ${T.border}`,
        borderRadius:   T.radius,
        padding:        "2rem",
        position:       "relative",
        overflow:       "hidden",
        backdropFilter: "blur(10px)",
        gridColumn:     product.featured ? "span 2" : "span 1",
        opacity:        visible ? 1 : 0,
        transform:      visible ? (h ? "translateY(-4px)" : "none") : "translateY(24px)",
        transition:     `opacity 0.7s ease ${index * 0.1}s, transform 0.35s ease, background 0.3s, border 0.3s`,
      }}
    >
      {/* Top accent line on hover */}
      {h && (
        <div style={{
          position:   "absolute",
          top: 0, left: 0, right: 0,
          height:     1,
          background: `linear-gradient(90deg, transparent, ${product.badgeColor}, transparent)`,
        }} />
      )}

      {/* Icon + Badge */}
      <div style={{
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "flex-start",
        marginBottom:   "1.25rem",
      }}>
        <div style={{
          width:        44, height: 44,
          background:   h ? `${product.badgeColor}22` : `${product.badgeColor}12`,
          border:       `1px solid ${product.badgeColor}30`,
          borderRadius: "12px",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          fontSize:     "1.2rem",
          color:        product.badgeColor,
          transition:   "all 0.3s",
          transform:    h ? "scale(1.06)" : "none",
        }}>
          {product.icon}
        </div>
        <Badge label={product.badge} color={product.badgeColor} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:    T.serif,
        fontSize:      "1.3rem",
        fontWeight:    400,
        color:         "#f1f5f9",
        margin:        "0 0 0.55rem",
        letterSpacing: "-0.01em",
      }}>
        {product.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily:  T.sans,
        color:       T.muted,
        fontSize:    "0.875rem",
        lineHeight:  1.7,
        margin:      "0 0 1.2rem",
      }}>
        {product.description}
      </p>

      {/* Problem pill */}
      <div style={{
        background:   "rgba(10,18,36,0.5)",
        border:       "1px solid rgba(148,163,184,0.06)",
        borderRadius: T.radiusSm,
        padding:      "10px 14px",
        marginBottom: "1.2rem",
      }}>
        <p style={{
          fontFamily:    T.mono,
          fontSize:      "0.7rem",
          color:         T.subtle,
          letterSpacing: "0.04em",
          margin:        0,
          lineHeight:    1.6,
        }}>
          <span style={{ color: "#94a3b8", marginRight: 6 }}>→</span>
          {product.problem}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {product.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
